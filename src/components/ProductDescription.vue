<template>
  <div class="content">
    <h3 class="title is-5">Produktbeskrivning</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    description: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  margin-top: 3rem;
}
</style>