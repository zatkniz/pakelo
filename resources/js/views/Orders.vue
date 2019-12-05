<template>
  <v-container :class="{ 'pa-0': customer}">
    <v-row>
      <v-col :class="{ 'pa-0': customer}">
        <v-card
          class
          shaped
          outlined
          :loading="loading"
          :class="{ 'ma-0': customer, 'ma-5': !customer }"
        >
          <v-toolbar flat color="secondary" dark v-if="!hideToolbar">
            <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="editItem({products:[]})">Προσθηκη</v-btn>
          </v-toolbar>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Αναζήτηση"
              single-line
              hide-details
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="orders"
            sort-by="name"
            class="elevation-1"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            :search="search"
            show-expand
          >
            <template v-slot:top>
              <v-row>
                <v-col class="px-10" cols="12" sm="6" md="6">
                  <v-autocomplete
                    :items="users"
                    label="Πωλητής"
                    clearable
                    v-model="user_id"
                    item-text="name"
                    item-value="id"
                    @input="getorders"
                    @click:clear="getorders()"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="px-5">
                <v-col cols="12" sm="6" md="6">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="searchQuery[0]"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="searchQuery[0]"
                        label="Από"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        clearable
                        @click:clear="searchQuery[0] = null; getorders()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[0]"
                      no-title
                      scrollable
                      @input="getorders(); $refs.menu.save(searchQuery[0])"
                      reactive
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(searchQuery[0])">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-menu
                    ref="menuTo"
                    v-model="menuTo"
                    :close-on-content-click="false"
                    :return-value.sync="searchQuery[1]"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="searchQuery[1]"
                        label="Έως"
                        clearable
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        @click:clear="searchQuery[1] = null; getorders()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[1]"
                      no-title
                      scrollable
                      @input="getorders(); $refs.menuTo.save(searchQuery[1])"
                      reactive
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menuTo = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menuTo.save(searchQuery[1])">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn class="mx-0" fab dark x-small color="teal" @click="editItem(item)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-0" fab dark x-small color="primary" @click="openDeleteDialog(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
            <template v-slot:expanded-item="{item , headers}">
              <td :colspan="headers.length" class="pa-0 tables-td">
                <v-data-table
                  class="products-table"
                  hide-default-footer
                  :headers="[
                    { text: 'Κωδικός', align: 'center', sortable: false, value: 'product.code', },
                    { text: 'Ποσότητα', align: 'center', value: 'quantity' }, 
                    { text: 'Tιμή',align: 'center', value: 'price' }, 
                    { text: 'Tιμή Ποσότητας', align: 'center', value: 'price_per_kg' }
                  ]"
                  :items="item.products"
                >
                  <template v-slot:item.product.code="{ item }">
                    <v-tooltip right>
                      <template v-slot:activator="{ on }">
                        <div v-on="on">{{item.product.code}}</div>
                      </template>
                      <span>Ονομασία: {{item.product.product.name}}lt</span>
                      <br />
                      <span>Ποσότητα: {{item.product.lt_kg}}lt</span>
                    </v-tooltip>
                  </template>
                  <template v-slot:item.price="{ item }">{{ item.price }}€</template>
                  <template v-slot:item.lt_kg="{ item }">{{ item.lt_kg }}Lt</template>
                  <template
                    v-slot:item.price_per_kg="{ item }"
                  >{{ (item.price / item.quantity).toFixed(2) }}€</template>
                </v-data-table>
                <div class="sum-table-div pa-5">Σύνολο Παραγγελίας: {{item.summary}}€</div>
                <div class="sum-table-div pb-5">Αριθμός Προϊόντων: {{item.products_count}}</div>
              </td>
            </template>
          </v-data-table>
          <delete-dialog
            :order="editedItem"
            :deleteDialog="deleteDialog"
            @orderDeleted="getorders(); snackbar = true;"
            @closeDialog="deleteDialog = false"
          />
          <edit-dialog
            :order="editedItem"
            :dialog="dialog"
            @orderEdited="getorders(); snackbar = true;"
            @closeDialog="dialog = false; $route.query.new = false;"
          />

          <v-snackbar v-model="snackbar">
            Η επιλογή σας αποθηκεύτηκε επιτυχώς
            <v-btn color="pink" text @click="snackbar = false">κλεισιμο</v-btn>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import deleteDialog from "../components/orders/DeleteDialog";
import editDialog from "../components/orders/EditDialog";
export default {
  props: {
    isOrder: Boolean,
    hideToolbar: Boolean,
    customer: Number
  },
  components: {
    deleteDialog,
    editDialog
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    isSingleOrder: false,
    expanded: [],
    menu: false,
    menuTo: false,
    date: new Date().toISOString().substr(0, 10),
    searchQuery: [new Date().toISOString().substr(0, 10), null],
    singleExpand: false,
    deleteDialog: false,
    loading: false,
    search: "",
    headers: [
      {
        text: "Πελάτης",
        align: "left",
        value: "customer.name"
      },
      { text: "Πωλητής", value: "user.name" },
      { text: "Αριθμός", value: "products_count", align: "center" },
      { text: "Ποσό", value: "summary", align: "center" },
      { text: "Ημερομηνία", value: "created_at" },
      { text: "Ενέργειες", value: "action", align: "right" }
    ],
    orders: [],
    editedItem: {},
    users: [],
    user_id: ""
  }),

  created() {
    if (this.$route.name == "Customers Single") {
      this.isSingleOrder = this.isOrder;
    } else {
      this.isSingleOrder = this.$route.name == "Orders";
    }

    this.getorders();
    if (this.$route.query.new) this.dialog = true;

    this.getUsers();
  },

  methods: {
    getorders() {
      if (!this.user_id) this.user_id = "";

      this.loading = true;
      axios
        .get(
          `orders?orders=${this.isSingleOrder}&date=${this.searchQuery}&user=${this.user_id}&customer=${this.customer}`
        )
        .then(res => {
          this.orders = res.data;
          this.loading = false;
          this.$route.query.new;
        });
    },

    getUsers() {
      axios.get("users").then(res => {
        this.users = res.data;
      });
    },

    editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    openDeleteDialog(order) {
      this.editedItem = Object.assign({}, order);
      this.deleteDialog = true;
    }
  },
  watch: {
    "$route.query"() {
      if (this.$route.query.new) this.dialog = true;
    }
  },

  computed: {
    pageTitle() {
      return this.$route.name == "Orders" ? "Παραγγελίες" : "Προσφορές";
    }
  }
};
</script>