<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3 has-background-white-ter">
        <a :href="postUrl">
          <img :src="postImg" />
        </a>
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="is-marginless">{{ post.posted }}</p>
        <a :href="postUrl">
          <h3 class="title is-size-4 has-text-weight-bold">{{ post.title }}</h3>
        </a>
        <p>{{ postIntro }}</p>
        <a :href="postUrl" class="is-primary has-text-weight-bold is-uppercase">Läs mer</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPostCard",
  props: {
    post: {
      type: Object
    }
  },
  computed: {
    postUrl() {
      return "/blog/" + this.post.slug;
    },
    postImg() {
      return require("@/assets/images/blog/" + this.post.images);
    },
    postIntro() {
      return this.post.content.slice(0, 150) + "...";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  box-shadow: none !important;
}
</style>
