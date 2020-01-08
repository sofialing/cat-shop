<template>
  <div class="about">
    <Hero title="Kontakta oss" />

    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <h2 class="title is-2 has-text-weight-bold">Fråga gärna oss någonting.</h2>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Namn" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="E-post" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Ämne" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Ditt meddelande..."></textarea>
                </div>
              </div>
              <div class="control">
                <button class="button is-primary is-fullwidth">Skicka</button>
              </div>
            </form>
          </div>

          <div class="column column-img is-6 is-offset-1 has-background-black">
            <figure class="image is-4by3">
              <img src="@/assets/images/contact.jpg" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSubpage from "@/components/HeroSubpage.vue";

export default {
  name: "Contact",
  components: {
    Hero: HeroSubpage
  }
};
</script>

<style scoped lang="scss">
.column-img {
  padding: 0;
}
</style>
