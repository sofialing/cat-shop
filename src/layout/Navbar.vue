<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img :src="logo" alt="Cat shop" width="150px" />
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Start</router-link>
        <router-link to="/products" class="navbar-item">Produkter</router-link>
        <router-link to="/about" class="navbar-item">Om oss</router-link>
        <router-link to="/contact" class="navbar-item">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logo: require("@/assets/logo.svg")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-item {
  text-transform: uppercase;
}
</style>
