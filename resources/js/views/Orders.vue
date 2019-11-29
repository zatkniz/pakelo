<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-5" shaped outlined :loading="loading">
          <v-data-table
            :headers="headers"
            :items="orders"
            sort-by="name"
            class="elevation-1"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            show-expand
          >
            <template v-slot:top>
              <v-toolbar flat color="secondary" dark>
                <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark class="mb-2" @click="editItem({})">Προσθηκη</v-btn>
              </v-toolbar>
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
                  <template v-slot:item.price="{ item }">{{ item.price }}€</template>
                  <template v-slot:item.lt_kg="{ item }">{{ item.lt_kg }}Lt</template>
                  <template
                    v-slot:item.price_per_kg="{ item }"
                  >{{ (item.price / item.quantity).toFixed(2) }}€</template>
                </v-data-table>
                <div class="sum-table-div pa-5">Σύνολο: {{item.summary}}€</div>
                <div class="sum-table-div pa-5">Σύνολο: {{item.products_count}}</div>
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
  components: {
    deleteDialog,
    editDialog
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    expanded: [],
    singleExpand: false,
    deleteDialog: false,
    loading: false,
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
    editedItem: {}
  }),

  created() {
    this.getorders();
    if (this.$route.query.new) this.dialog = true;
  },

  methods: {
    getorders() {
      this.loading = true;
      axios.get("orders").then(res => {
        this.orders = res.data;
        this.loading = false;
        this.$route.query.new;
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