<template>
  <nav class="navbar is-white is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img :src="logo" alt="Cat shop" width="150px" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isOpen = !isOpen"
        v-bind:class="{'is-active': isOpen}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Start</router-link>
        <router-link to="/products" class="navbar-item">Produkter</router-link>
        <router-link to="/blog" class="navbar-item">Blogg</router-link>
        <router-link to="/about" class="navbar-item">Om oss</router-link>
        <router-link to="/contact" class="navbar-item">Kontakt</router-link>
        <router-link to="/cart" class="navbar-item">Varukorg</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logo: require("@/assets/logo.svg"),
      isOpen: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-item {
  text-transform: uppercase;
}

.navbar-menu {
  margin-right: 1rem;
  letter-spacing: 0.05em;
  box-shadow: none;
}

.navbar.is-spaced {
  padding: 0.5rem;
}

@media screen and (min-width: 1024px) {
  .navbar.is-spaced {
    padding: 0.5rem 1rem;
  }
}
</style>
