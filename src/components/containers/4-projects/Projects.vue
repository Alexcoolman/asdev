<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="section-container-fluid projects my-4">
        <b-row align-h="center">
          <b-col cols="12" class="text-center pt-4">
            <h2>
              <span>
                <font-awesome-icon
                  :icon="['fas', 'code']"
                  class="title-fa"
                  id='code'
                />
              </span>
              <span> Projets</span>
            </h2>
          </b-col>
        </b-row>
        <b-row class="my-4" align-h="center">
          <b-col cols="12" md="6" lg="4" class="text-center">
            <Cards id="matrix1"></Cards>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="text-center">
            <Cards id="matrix2"></Cards>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="text-center">
            <Cards id="matrix3"></Cards>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import Cards from '@/components/containers/4-projects/Cards/Cards.vue';

export default {
  name: 'Projets',
  components: {
    Cards,
  },
};
</script>

<style lang="scss">
.card {
  background: $black;
  background-color: $black;
}
.card-img-top {
  background: $green;
  border-radius: 50%;
  -webkit-filter: drop-shadow($green-shadow);
  filter: drop-shadow($green-shadow);
  cursor: pointer;
}
</style>
