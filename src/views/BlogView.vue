<template>
  <div>
    <Hero :title="title" subtitle />
    <section class="section">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li class="is-size-7">
              <router-link to="/blog" class="has-text-grey">Blogg</router-link>
            </li>
            <li class="is-size-7">
              <router-link to="/blog" class="has-text-grey">Kategori</router-link>
            </li>
            <li class="is-active is-size-7">
              <a href="#">{{post.title}}</a>
            </li>
          </ul>
        </nav>

        <div class="columns is-multiline">
          <div class="column is-full">
            <figure class="image is-4by3">
              <img :src="postImg" />
            </figure>
          </div>
          <div class="column is-four-fifths">
            <h2 class="title is-1">{{post.title}}</h2>
            <p class="subtitle is-6">Publicerad{{post.posted}} av {{post.author}}</p>
            <p class="content">{{post.content}}</p>
          </div>
        </div>
        <arrow-icon />
        <router-link to="/blog" class="is-size-7 has-text-grey">Tillbaka till alla inlägg</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSubpage from "@/components/HeroSubpage.vue";
import ArrowIcon from "vue-material-design-icons/ArrowLeft.vue";

export default {
  name: "BlogView",
  components: {
    Hero: HeroSubpage,
    ArrowIcon
  },
  props: {
    blogPosts: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: "Nyheter, tips & råd",
      post: {}
    };
  },
  created() {
    this.post = this.blogPosts.find(post => post.slug == this.slug);
  },
  computed: {
    postImg() {
      return require("@/assets/images/blog/" + this.post.images);
    }
  }
};
</script>

<style scoped lang="scss">
</style>