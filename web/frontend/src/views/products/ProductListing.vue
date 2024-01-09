<template>
    <div class="main-container">
        <div class="card">
            <div class="left-text d-flex justify-content-between main-search">
                <div class="new-product">
                    <h2>
                        Product Listing ({{ productListArray.length }})
                        <!-- Nice work on building a shopify app with a
          <a href="https://vuejs.org/guide/introduction.html" target="_blank">Vue Template</a>💚 -->
                    </h2>
                </div>

                <div class="search-products align-items-center d-flex justify-content-center">
                    <fieldset class="form-group position-relative mb-0 search_form setfield-space">
                        <input type="text" class="form-control" id="iconLeft1" placeholder="Search and Filter Options" />
                        <div class="form-control-position form_input_items mt_8">
                            <i class="ft-x font-medium-5 cross_image cursor-pointer"></i>
                            <i alt="icon" class="ft-search font-medium-5 cursor-pointer pr_8"></i>
                        </div>
                    </fieldset>
                    <button id="close-edit-category" type="button" @click="$router.push('/add-new-product')" class=" btn btn-primary">
                        Add New Product 
                    </button>
                </div>
            </div>
            <div class="product-table-main-list">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Varients</th>
                            <th scope="col">Templates</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <!-- <tr v-for="(product, indx) in productListArray" :key="indx">
                            <td><img v-if="product.image" :src="product.image.src" width="70" height="70" alt=" " /></td>
                            <td>{{ product.title }}</td>
                            <td>{{ productVarientData(product.variants) }}</td>
                            <td>--</td>
                            <td>Edit &nbsp Delete</td>
                        </tr> -->

                        
                        <tr>
                            <td><img src="https://cdn.shopify.com/s/files/1/0810/6724/5887/files/download_9.jpg?v=1700824266" 
                                 width="70" height="70" alt=" " /></td>
                            <td>14k Gold Circle</td>
                            <td>GOld, Silver</td>
                            <td>Gold Circle</td>
                            <td>Edit &nbsp Delete</td>
                            </tr>
                        <tr>
                        <td><img src="https://cdn.shopify.com/s/files/1/0810/6724/5887/files/Gold.jpg?v=1700824831" 
                                 width="70" height="70" alt=" " /></td>
                        <td>14k Gold Heart</td>
                        <td>GOld, Silver</td>
                        <td>Gold Heart</td>
                        <td>Edit &nbsp Delete</td>
                        </tr>
                        <tr>
                        <td><img src="https://cdn.shopify.com/s/files/1/0810/6724/5887/files/download_3.jpg?v=1700211822" 
                                 width="70" height="70" alt=" " /></td>
                        <td colspan="2">Gold Skinny Bar Necklace</td>
                        <td>Necklace</td>
                        <td>Edit &nbsp Delete</td>
                        </tr>
                        <tr>
                        <td><img src="https://cdn.shopify.com/s/files/1/0810/6724/5887/files/download_abcdd3ef-1b2b-4676-ab13-5215c001f43c.jpg?v=1700207914" 
                                 width="70" height="70" alt=" " /></td>
                        <td colspan="2">14k Gold Mini Dog Tag Necklace</td>
                        <td>Dog Tag Necklace</td>
                        <td>Edit &nbsp Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mt-3 b-pagination">
                <b-pagination class="justify-content-end" v-model="currentPage" :total-rows="rows" :per-page="itemsPerPage"
                    align="right"></b-pagination>
            </div>
            <!-- <div class="b-pagination">
                <b-pagination v-model="currentPage" :total-rows="user_length" :per-page="itemsPerPage" aria-controls="manage_template"></b-pagination>
             </div> -->
        </div>

        <!-- <div class="card product-counter">
      <h2>Product Counter</h2>
      <p>
        Sample Products are created with a default title and price. You can remove them at any time
      </p>
      <br />
      <h2>Total Products</h2>
      <h3>{{ currentProductCount }}</h3>
   
    </div> -->


    </div>
</template>

<script>
import { useProductCounterStore } from '@/stores/counter.js'
import { useAuthenticatedFetchVue } from '@/helpers/vueAuthenticatedFetch.js'
import { ref, inject, onMounted, computed } from 'vue'

const buttonDisabled = ref(false)
const products = ref([])
const fetch = useAuthenticatedFetchVue()
const currentProductCount = computed(() => {

    return useProductCounterStore().count
})

export default {
    data() {
        return {
            rows: 40,
            currentPage: 1,
            itemsPerPage: 25,
            product_length:0,
            productListArray: [],
            listConfig: {
                offset: (this.currentPage - 1) * this.itemsPerPage,
                limit: this.itemsPerPage,
                sortBy: "title",
                order: "ASC",
                searchKeyword: "",
                id: ''
            }
        }
    },
    computed: {
        pages() {
            if (this.product_length <= this.itemsPerPage) {
                return [1];
            }
            return [
                ...Array(Math.ceil(this.product_length / this.itemsPerPage)).keys()
            ].map((e) => e + 1);
        }
    },
    watch: {
        currentPage(newValue) {
            this.listConfig.offset = (newValue - 1) * this.itemsPerPage;
            this.getProductList();
            if (this.currentPage && this.currentPage >= 2) {
                this.$router.push({ name: "product", query: { page: this.currentPage } });
            } else {
                this.$router.push({ name: "product" });
            }
        }

    },
    mounted() {
        this.getProductList();
        this.listConfig = {
            offset: (this.currentPage - 1) * this.itemsPerPage,
            limit: this.itemsPerPage,
            sortBy: "title",
            order: "ASC",
            searchKeyword: "",
            id: ''
        };
    },

    methods: {
        async getProductList() {
            const response = await fetch('/api/products/getAll')
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`)
            }
            console.log("response in store in listing11111")
            const allProducts = await response.json()
            this.productListArray = allProducts;
            this.product_length = allProducts.length;
            console.log('check first data is here11================', this.productListArray[0].title, this.productListArray.length);
            return allProducts;
        },
        productVarientData(dataList) {
            // Join the dataList array into a comma-separated string
           return dataList.map(val => val.title).join(', ')
        },
    }

}


</script>
<style scoped>

/* .setfield-space {
    margin-right: 15px;
}

 .main-search {
    padding: 15px;
}

.search-products {
    max-width: 600px;
    width: 100%;
}

.search-products fieldset {
    max-width: 430px;
    width: 100%;
}

.search-products fieldset input {
    padding-left: 100px
} */

/* .product-table-main-list {
    padding: 20px;
} */
</style>
