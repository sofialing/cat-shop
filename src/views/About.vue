<template>
  <div class="about">
    <Hero title="Om oss" />

    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <h2
              class="title is-2 has-text-weight-bold"
            >Kattbutiken för dig som älskar allt med katter</h2>
            <p
              class="content"
            >Vår målsättning är att erbjuda dig en levande och spännande plats där du kan hitta alla kattsaker som du behöver till din katt. Vår ambition är att överraska och väcka våra kunder genom att ständigt erbjuda produkter som är nya, unika och aktuella.</p>

            <p
              class="content"
            >Sortimentet är noggrant utvalt för att täcka det mesta och vi har en tanke bakom varje produkt. Vi har ett mycket stort utbud av klösträd, katthalsband, kattbäddar, kattlådor, kattluckor, kattgodis, kattleksaker och mycket mer!</p>
          </div>
          <div class="column column-img is-6 is-offset-1 has-background-black">
            <figure class="image is-4by3">
              <img src="@/assets/images/about.jpg" />
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
  name: "About",
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
