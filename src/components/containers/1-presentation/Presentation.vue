<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="presentation mt-4">
        <b-row>
          <b-col cols="12" class="p-4">
            <h2>
              <span>Hello</span> <span>World!</span><span>👋</span>
            </h2>
            <h2>
              <span>Alexandre</span><span>,</span>
            </h2>
            <h2>
              <span>WEB </span><span>Développeur </span><span>👨🏻‍💻</span>
            </h2>
            <b-row class="container-btns mt-5">
              <b-col cols="12" sm="4" class="d-flex mb-3">
                <a
                  href="#"
                  v-scroll-to="{ element: '#tools', duration: 500 }"
                  class="as-btn b1 mx-2">Outils
                </a>
              </b-col>
              <b-col cols="12" sm="4" class="d-flex mb-3">
                <a
                  href="#"
                  v-scroll-to="{ element: '#projects', duration: 500 }"
                  class="as-btn b1 mx-2">Projects
                </a>
              </b-col>
              <b-col cols="12" sm="4" class="d-flex mb-3">
                <a
                href="#"
                v-scroll-to="{ element: '#contact', duration: 1000 }"
                class="as-btn b2 mx-2">Contact
              </a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
// import Medias from '@/components/containers/1-presentation/medias/Medias.vue';

export default {
  name: 'presentation',
  components: {
    // Medias,
  },
};
</script>

<style lang="scss">
.presentation {
  border: 1px solid $green;
  box-shadow: 0 0 30px 0 $green-50;
  color: $green;
  background: $black;
  background-color: $black;
  overflow-wrap: break-word;
}
h2 span {
  position: relative;
}
@media all and (max-device-width: 480px) {
  .medias {
    position: relative;
    top: 0%;
    transform: translate(0%);
  }
  .presentation {
    text-align: center;
  }
  .container-btns {
    justify-content: space-around;
  }
}
</style>
