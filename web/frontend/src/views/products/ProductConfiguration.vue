<template>
    <div class="main-container">
        <div class="card">
            <div class="left-text d-flex justify-content-between main-search">
                <div class="new-product">
                    <h2>
                        Product Configuration
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
                        <button id="close-edit-category" type="button" @click="$router.push('/add-new-product')" class=" btn btn-primary">
                            Back
                        </button>
                    </div>
            </div>
            <form  @submit.prevent="addNewProduct">
            <div class="p-5">
                <div class="row">
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Product Name</label>
                        <input type="text" class="form-control" v-model="saveProductData.product_name" id="exampleFormControlInput1" placeholder="Product Name">
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Product Variant</label>
                        <select class="form-select" aria-label="Default select example" v-model="saveProductData.product_varient">
                            <option v-for="option in productVarientList.variants" :key="option.value" :value="option.id">{{ option.title }}</option>
                            <!-- <option selected>Product Variant</option>
                            <option value="14K Gold">14K Gold</option>
                            <option value="14K Silver">14K Silver</option> -->
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="exampleFormControlInput1" class="form-label">Templates</label>
                            <input type="text" class="form-control" v-model="saveProductData.product_template" id="exampleFormControlInput1" placeholder="Add Templates">
                    </div>
                </div>
                <div class="pt-5">
                    <div class="row">
                        <div class="col-md-6">
                            <button id="close-edit-category" type="submit" class=" btn btn-primary">
                            Save
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
            <!-- <div class="p-5">
                <div class="row">
                    <div class="col-md-6">
                        <button id="close-edit-category" type="button" class=" btn btn-primary">
                            Next
                        </button>
                    </div>
                </div>
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
            product_length: 0,
            productVarientList:[],
            saveProductData: {
                product_name: null,
                product_varient: '14K Gold',
                product_template: null,
            },

        }
    },

    mounted() {
        // this.getProductList();
        this.getVarient();
        this.addNewProduct();
    },

    methods: {
        async getProductList() {
            const response = await fetch('/api/products/getAll')
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`)
            }
            const allProducts = await response.json()
            this.productListArray = allProducts;
            this.product_length = allProducts.length;
            return allProducts;
        },
        async addNewProduct() {
            const response = await fetch('/api/test')
            if (!response.ok) {
                throw new Error(`Failed to fetch products routes: ${response.status}`)
            }
            console.log("response in new routes", response)
            // alert()
            // console.log('check data is here==================', this.saveProductData, this.saveProductData.product_name);
        },
        getVarient() {
            let product_detail = JSON.parse(localStorage.getItem("single_product_detail"));
            this.productVarientList = product_detail;
            if (product_detail.variants.length > 0) {
                this.saveProductData.product_varient = product_detail.variants[0].id;
            }
            
        }
    }

}


</script>
<style scoped></style>
