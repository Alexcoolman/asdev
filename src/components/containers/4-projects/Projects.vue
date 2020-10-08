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
            <b-card
              title="Porftolio"
              img-src="../../../assets/AS_Logo.png"
              img-alt="Portfolio"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="p-4 mb-2 card"
            >
              <b-card-text class="p-3">
                Site personnel permettant de présenter mes compétences
              </b-card-text>
              <a
                href="http://zealous-mayer-f64e34.netlify.app/"
                class="as-btn mx-2 my-2">Voir le site
              </a>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="text-center">
            <b-card
              title="Porftolio"
              img-src="../../../assets/AS_Logo.png"
              img-alt="Portfolio"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="p-4 mb-2 card"
            >
              <b-card-text class="p-3">
                Site personnel permettant de présenter mes compétences
              </b-card-text>
              <a
                href="http://zealous-mayer-f64e34.netlify.app/"
                class="as-btn mx-2 my-2">Voir le site
              </a>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" lg="4" class="text-center">
            <b-card
              title="Porftolio"
              img-src="../../../assets/AS_Logo.png"
              img-alt="Portfolio"
              img-top
              tag="article"
              class="p-4 mb-2 card"
            >
              <b-card-text class="p-3">
                Site personnel permettant de présenter mes compétences
              </b-card-text>
              <a
                href="http://zealous-mayer-f64e34.netlify.app/"
                class="as-btn mx-2 my-2">Voir le site
              </a>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Projets',
};
</script>

<style lang="scss">
.projects {
  border: 1px solid $green;
  box-shadow: 0 0 30px 0 $green-50;
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
