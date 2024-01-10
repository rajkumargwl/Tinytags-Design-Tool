<template>
    <div class="main-container">
        <div class="card">
            <div class="left-text d-flex justify-content-between main-search">
                <div class="new-product">
                    <h2>
                        Add New Product
                        <!-- Nice work on building a shopify app with a
          <a href="https://vuejs.org/guide/introduction.html" target="_blank">Vue Template</a> -->
                    </h2>
                </div>

                <div class="search-products align-items-center d-flex justify-content-end">
                    <!-- <fieldset class="form-group position-relative mb-0 search_form setfield-space">
                        <input type="text" class="form-control" id="iconLeft1" placeholder="Search and Filter Options" />
                        <div class="form-control-position form_input_items mt_8">
                            <i class="ft-x font-medium-5 cross_image cursor-pointer"></i>
                            <i alt="icon" class="ft-search font-medium-5 cursor-pointer pr_8"></i>
                        </div>
                    </fieldset> -->
                    <button id="close-edit-category" type="button" @click="$router.push('/product-listing')" class=" btn btn-primary">
                        Back
                    </button>
                </div>
                
            </div>
                <div class="p-4">
                    <div class="row">
                        <div class="col-md-4">
                            <select class="form-select" aria-label="Default select example" @change="filtertemplateName" v-model="products.product_name" required>
                            <option v-for="option in productList"  :key="option.value" :value="option.id">{{ option.title }}</option>
                            <!-- <option selected>Select Product</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> -->
                            </select>
                        </div>
                         <div class="col-md-4">
                            <select class="form-select" aria-label="Default select example" v-model="products.product_template" required>
                            <option v-for="option in templateList" :key="option.value" :value="option.id">{{ option.name }}</option>
                            </select>
                         </div>
                         <div class="col-md-4">
                            <select class="form-select" aria-label="Default select example" v-model="products.product_price_template">
                            <option v-for="option in priceTemplateList" :key="option.value" :value="option.id">{{ option.name }}</option>
                            </select>
                         </div>
                    </div>
                    
                </div>
                <div class="p-5">
                    <div class="row">
                        <div class="col-md-6">
                            <button id="close-edit-category" @click="$router.push('/configure-new-product')" type="button" class=" btn btn-primary">
                           Next
                        </button>
                        </div>
                    </div>
                </div>
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
            product_length: 0,
            productList: [],
            templateList: [
                { id: 1, name: 'BasicPriceTemplate' },
                { id: 2, name: 'StandardPricingModel' },
                { id: 3, name: 'EconoRateBlueprint' },
            ],
            priceTemplateList: [
                { id: 1, name: 'Tiny tag templates' },
                { id: 2, name: 'ciruler design template' },
                { id: 3, name: 'neckless templates' }
            ],
            products: {
                product_name: null,
                product_template: null,
                product_price_template:null,
            },
            
        }
    },
    
    mounted() {
        this.getProductList();
        this.products.product_template = 1;
        this.products.product_price_template = 1;
    },

    methods: {
        async getProductList() {
            // alert()
            const response = await fetch('/api/products/getAll')
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`)
            }
            console.log("response in store in listing11111")
            const allProducts = await response.json()
            this.productListArray = allProducts;
            this.product_length = allProducts.length;
            // Filtering the object based on selected keys
            var selectedKeys = ['title', 'id'];
            var filteredArray = allProducts.map(obj => Object.fromEntries(Object.entries(obj).filter(([key]) => selectedKeys.includes(key))));
            console.log(filteredArray);
            this.productList = filteredArray;
            
            // return allProducts;
        },
        filtertemplateName(name) {
            let singleProductDetail = this.productListArray.find(obj => obj['id'] === this.products.product_name);
            localStorage.setItem("single_product_detail", JSON.stringify(singleProductDetail));
        },
        
    }

}


</script>
<style scoped>

</style>
