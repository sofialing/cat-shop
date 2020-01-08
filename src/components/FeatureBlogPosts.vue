<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2 has-text-weight-bold has-text-centered">{{ title }}</h2>
      <div class="columns is-multiline">
        <div v-for="post in posts.newestPosts" v-bind:key="post.id" class="column is-one-third">
          <BlogPostCard :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogPostCard from "@/components/BlogPostCard.vue";
import { BlogPosts } from "@/services/BlogPosts";

export default {
  name: "FeatureBlogPosts",
  data() {
    return {
      posts: new BlogPosts()
    };
  },
  props: {
    title: {
      type: String
    }
  },
  components: {
    BlogPostCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
