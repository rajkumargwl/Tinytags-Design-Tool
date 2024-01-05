<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Dashboard</RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/about">About</RouterLink>
        </li> -->
            <li>
            <RouterLink to="/product-listing">Product Listing</RouterLink>
          </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  background-color: #f2f2f2;
  padding: 1rem;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1rem;
}
</style>
