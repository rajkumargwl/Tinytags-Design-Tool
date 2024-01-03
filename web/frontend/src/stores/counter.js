import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthenticatedFetchVue } from '../helpers/vueAuthenticatedFetch.js'

export const useProductCounterStore = defineStore('productCounter', () => {
  const count = ref(0)
  const fetch = useAuthenticatedFetchVue()

  const getProducts = async () => {
    try {
      const response = await fetch('/api/products/count')
      if (!response.ok) {
        throw new Error(`Failed to fetch product count: ${response.status}`)
      }
      const data = await response.json()
      return count.value = data.count
    } catch (error) {
      console.log(`Failed to fetch product count: ${error.message}`)
    }
  }

  /**Created by me */
  const getAllProducts = async () => {
    try {
      const response = await fetch('/api/products/getAll')
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`)
      }
      const allProducts = await response.json()
      return allProducts;
    } catch (error) {
      console.log(`Failed to fetch products: ${error.message}`)
    }
  }
  /**End */

  const createProducts = async () => {
    try {
      const response = await fetch('/api/products/create')
      if (!response.ok) {
        throw new Error(`Failed to create products: ${response.status}`)
      }
      const data = await response.json()
      if (!data.success) {
        throw new Error(`Failed to create products: ${data.error}`)
      }
      await getProducts()
      return data
    } catch (error) {
      console.log(`Failed to create products: ${error.message}`)
    }
  }

  return { count, getProducts, createProducts,getAllProducts }
})
