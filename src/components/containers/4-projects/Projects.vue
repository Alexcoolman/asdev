<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="projects my-4">
        <b-row align-h="center">
          <b-col cols="12" class="text-center pt-4">
            <h2>
              <span>Projets</span>
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
import Cards from '@/components/containers/3-articlesList/cards/Cards.vue';

export default {
  name: 'Projets',
  components: {
    Cards,
  },
};
</script>

<style lang="scss">
.projects {
  border: 1px solid $green;
  box-shadow: 0 0 30px 0 $green-50;
  border-radius: 15px;
  color: $green;
  background: $black;
  background-color: $black;
  overflow-wrap: break-word;
}
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
h2 span {
  position: relative;
  line-break: wrap;
}
</style>
