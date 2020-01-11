<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <div class="box has-background-white-ter">
            <truck-icon class="icon-2x" />
            <p class="is-uppercase">Snabba leveranser</p>
            <p class="is-size-7">Vi skickar dina varor inom en arbetsdag</p>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box has-background-white-ter">
            <shopping-icon class="icon-2x" />
            <p class="is-uppercase">Fri frakt</p>
            <p class="is-size-7">Alltid fri leverans på alla ordrar</p>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box has-background-white-ter">
            <phone-icon class="icon-2x" />
            <p class="is-uppercase">Professionell service</p>
            <p class="is-size-7">Online support dygnet runt</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TruckIcon from "vue-material-design-icons/TruckFastOutline.vue";
import ShoppingIcon from "vue-material-design-icons/ShoppingOutline.vue";
import PhoneIcon from "vue-material-design-icons/PhoneInTalkOutline.vue";

export default {
  name: "Services",
  components: {
    TruckIcon,
    ShoppingIcon,
    PhoneIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  border-radius: 0;
  box-shadow: none;
}

.material-design-icon.icon-2x {
  height: 1.5em;
  width: 1.5em;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}
.section {
  padding-bottom: 1rem;
}
</style>
