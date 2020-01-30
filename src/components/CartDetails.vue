<template>
  <div class="column is-4 is-offset-1">
    <div class="table-container">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th colspan="2">
              <h2 class="title is-4">Totalsumma</h2>
            </th>
          </tr>
        </thead>
        <tr>
          <td>Deltotal</td>
          <td>{{sum}} kr</td>
        </tr>
        <tr>
          <td>Frakt</td>
          <td>Gratis</td>
        </tr>
        <tr class="has-text-weight-bold">
          <td>Totalsumma (inkl. moms)</td>
          <td>{{sum}} kr</td>
        </tr>
      </table>
      <button class="button is-primary is-fullwidth">Gå till kassan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartDetails",
  props: {
    sum: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  font-weight: 700;
  text-transform: uppercase;
}
</style>