<template>
   <div class="main-container">
        <div class="card">
          <div class="left-text d-flex justify-content-between main-search">
           <div class="new-product">
             <h2>
                  Product Listing (100)
                  <!-- Nice work on building a shopify app with a
          <a href="https://vuejs.org/guide/introduction.html" target="_blank">Vue Template</a>💚 -->
                </h2>
           </div>

            <div class="search-products align-items-center d-flex justify-content-center">
                <fieldset class="form-group position-relative mb-0 search_form setfield-space">
                    <input type="text" class="form-control" id="iconLeft1" placeholder="Search and Filter Options"
                        />
                    <div class="form-control-position form_input_items mt_8">
                    <i  class="ft-x font-medium-5 cross_image cursor-pointer"></i>
                    <i alt="icon"  class="ft-search font-medium-5 cursor-pointer pr_8"></i>
                    </div>
               </fieldset>
                <button id="close-edit-category" type="button" class=" btn btn-primary">
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
                <b-pagination class="justify-content-end" v-model="currentPage" :total-rows="rows" :per-page="itemsPerPage" align="right"></b-pagination>
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
export default {
    data() {
        return {
            rows: 40,
            currentPage: 3,
            itemsPerPage:10
        }
    }
}

</script>
<style scoped>
.setfield-space {
    margin-right: 15px;
}
.main-search{
    padding: 15px;
}
.search-products {
    max-width: 600px;
    width: 100%;
}
.search-products fieldset{
    max-width: 430px;
    width: 100%;
}

.search-products fieldset input{
   padding-left: 100px 
}
.product-table-main-list {
    padding: 20px;
}
</style>
