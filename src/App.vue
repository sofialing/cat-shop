<template>
  <div id="app">
    <app-navbar />
    <router-view :products="products" :blog-posts="blogPosts" />
    <app-footer />
  </div>
</template>

<script>
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";
import { db } from "@/services/db";

export default {
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer
  },
  data() {
    return {
      products: [],
      blogPosts: []
    };
  },
  firestore: {
    products: db.collection("products").orderBy("added"),
    blogPosts: db.collection("blogposts").orderBy("posted")
  }
};
</script>

<style lang="scss"></style>
