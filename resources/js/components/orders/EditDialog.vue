<template>
  <v-dialog v-model="dialog" max-width="1200px" @click:outside="closeDialog">
    <v-card :loading="loading">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-autocomplete
                  required
                  :rules="requiredRules"
                  :items="customers"
                  v-model="order.customer_id"
                  label="Πελάτης"
                  item-text="name"
                  item-value="id"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                

                <!-- <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="order.created_at"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }"> -->
                    <v-text-field v-model="order.created_at"
                      prepend-icon="mdi-calendar"
                      readonly
                      label="Ημερομηνία"></v-text-field>
                  <!-- </template> -->
                  <!-- <v-date-picker v-model="order.created_at" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(order.created_at)">OK</v-btn>
                  </v-date-picker>
                </v-menu> -->
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea rows="1" auto-grow v-model="order.comments" label="Σχόλια"></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-right" cols="12" sm="12" md="12">
                <v-btn color="primary" dark class="mb-2" @click="addItem()">Προσθηκη</v-btn>
                <v-data-table
                  dark
                  class="products-table"
                  hide-default-footer
                  :headers="[
                    { text: 'Κωδικός', align: 'center', sortable: false, value: 'product.code', },
                    { text: 'Ποσότητα', align: 'left', value: 'quantity', width: 106 }, 
                    { text: 'Tιμή',align: 'left', value: 'price', width: 150 }, 
                    { text: 'Tιμή Μονάδας', align: 'center', value: 'product.price' },
                    { text: 'Ενέργειες', align: 'center', value: 'action', sortable: false },
                  ]"
                  :items="order.products"
                >
                  <template v-slot:item.product.code="{ item }">
                    <v-autocomplete
                      label="Προιόν"
                      :items="products"
                      required
                      class="edit-product-dialog"
                      :rules="requiredRules"
                      v-model="item.product_id"
                      item-text="code"
                      item-value="id"
                      clearable
                      dark
                      @input="updateItem(item)"
                    >
                    <template v-slot:item="{item}">
                      {{item.code}} - {{item.product.name}} ({{item.lt_kg}}lt)
                    </template>
                    <template v-slot:selection="{item}">
                      {{item.code}} - {{item.product.name}} ({{item.lt_kg}}lt)
                    </template>
                    </v-autocomplete>
                  </template>
                  <template v-slot:item.price="{ item }">
                    <v-text-field  dark v-model="item.price" append-icon="mdi-currency-eur"></v-text-field>
                    </template>
                  <template v-slot:item.quantity="{ item }">
                    <v-text-field @input="updateItem(item)" dark type="number"  v-model="item.quantity"></v-text-field>
                  </template>
                  <template
                    v-slot:item.product.price="{ item }"
                  >
                    <span style="color:#fff;">{{ customersPrice(item) }}€</span>
                  </template>
                  <template v-slot:item.action="{ item }">
                    <v-btn class="mx-0" fab dark x-small color="primary" @click="removeItem(item)">
                      <v-icon small>mdi-close</v-icon>
                    </v-btn>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Ακυρωση</v-btn>
          <v-btn color="blue darken-1" text type="submit">Αποθηκευση</v-btn>
          <v-btn v-if="$route.name == 'Offers'" color="blue darken-1" text @click.prevent="saveAsOrder()" type="buttom">Μετατροπη σε παραγγελια</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    dialog: Boolean,
    order: Object
  },
  data: () => ({
    loading: false,
    menu: false,
    customers: [],
    initProducts: [],
    products: [],
    valid: false,
    activeItems: [
      { text: "Ενεργός", value: 1 },
      { text: "Ανενεργός", value: 0 }
    ],
    nameRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό"],
    emailRules: [
      v => !!v || "Το πεδίο είναι υποχρεωτικό",
      v => /.+@.+/.test(v) || "Το email δεν είναι σωστό"
    ],
    requiredRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό"],
    passRules: [
      v => {
        if (!order.id && !v) {
          return "Το πεδίο είναι υποχρεωτικό";
        } else {
          return !!v;
        }
      }
    ]
  }),

  computed: {
    formTitle() {
      const name = this.$route.name == "Orders" ? "Παραγγελίας" : "Προσφοράς";
      return !this.order.id ? `Προσθήκη ${name}` : `Επεξεργασία ${name}`;
    }
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    customersPrice(item){
      // console.log(item);
      // console.log(this.order);
      // let percentage = this.order.customer.percentage ? parseFloat(this.order.customer.percentage) / 100 : 0.4;

      // if(item.product)
      //   item.product.price += item.product.price * percentage;
      
      return item.product ? item.product.price : 0;
    },

    updateItem(item, d) {
      const selectedProduct = this.products.find( product => product.id == item.product_id );  
      item.product = selectedProduct;   

      if(selectedProduct)
        return item.price = (item.quantity * selectedProduct.price).toFixed(2);

      item.price = 0;
    },

    addItem(){
      this.order.products.push({
        price: 0,
        quantity: 1,
        id: Math.random() * 2525
      })
    },

    saveAsOrder(){
      this.order.is_offer = 1;
      this.save();
    },

    removeItem(item) {
      const index = this.order.products.findIndex( p => p.id == item.id );
      this.order.products.splice(index, 1)
      
    },

    getCustomers() {
      axios.get("customers").then(res => (this.customers = res.data));
    },

    getAttributes() {
      axios.get("products-attributes").then(res => {
         this.initProducts = this.products = res.data
        }
      );
    },

    save() {
      if (this.$refs.form.validate()) {
        // this.loading = true;
        axios.post(`orders`, this.order).then(res => {
          this.$emit("closeDialog");
          this.$emit("orderEdited");
          this.loading = false;
        });
      }
    }
  },

  created() {
    this.getCustomers();
    this.getAttributes();    
  },

  watch: {
    order(val) {
      window.order = val;
    },
    // 'order.customer_id'(){
    //   console.log(this.order.customer_id);
    //   console.log(this.products);
    //     this.products = this.initProducts.map(product => {
    //       product.price = product.price + 100;
    //     });

    //     this.order.products = this.order.products.map(product => {
    //       console.log(product);
          
    //       product.price = product.price + 100;
    //     });
    // }
  },
};
</script>