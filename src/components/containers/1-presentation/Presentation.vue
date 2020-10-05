<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container class="presentation mt-4">
        <b-row>
          <b-col cols="12" md="10" class="p-4">
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
              <b-col cols="6" lg="4" class="d-flex">
                <a
                  href="#"
                  v-scroll-to="{ element: '#tools', duration: 500 }"
                  class="btn-first b1 mx-2">Projects
                </a>
              </b-col>
              <b-col cols="6" lg="4" class="d-flex">
                <a
                href="#"
                v-scroll-to="{ element: '#contact', duration: 1000 }"
                class="btn-first b2 mx-2">Contact
              </a>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="2" class="d-flex align-items-center my-3 justify-content-center">
            <!-- <Medias></Medias> -->
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

<style scoped lang="scss">
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
.container-btns {
  justify-content: start;
}
.btn-first {
  text-decoration: none;
  border: 2px solid $green;
  background: transparent;
  white-space:nowrap;
  padding: 20px;
  width: 100%;
  cursor: pointer;
  color: $green;
}
.btn-first:hover{
  transition: all 0.3s ease-in-out;
  background: $green-80;
  color: $black;
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
