<template>
    <div class="main-container">
        <div class="card">
            <div class="left-text d-flex justify-content-between main-search">
                <div class="new-product">
                    <h2>
                        Product Configuration
                    </h2>
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
                            <option selected>Product Variant</option>
                            <option value="14K Gold">14K Gold</option>
                            <option value="14K Silver">14K Silver</option>
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
            saveProductData: {
                product_name: null,
                product_varient: '14K Gold',
                product_template: null,
            },

        }
    },

    mounted() {
        // this.getProductList();

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
        addNewProduct() {
            alert()
            console.log('check data is here==================', this.saveProductData, this.saveProductData.product_name);
        }
    }

}


</script>
<style scoped></style>
