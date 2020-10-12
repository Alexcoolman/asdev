<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="section-container-fluid shortcuts text-center my-4">
        <b-row align-h="center">
          <b-col cols="12" class="pt-4">
            <h2>
              <font-awesome-icon
                :icon="['fas', 'map-signs']"
                class="title-fa"
                id='map-signs'
              />
            </h2>
            <h2> Raccourcies</h2>
          </b-col>
        </b-row>
        <b-row class="container-btns p-4">
          <b-col cols="12" sm="4" class="d-flex mb-3">
            <a
              href="#"
              v-scroll-to="{ element: '#tools', duration: 500 }"
              class="as-btn shortcut-btn my-2 px-5">Outils
            </a>
          </b-col>
          <b-col cols="12" sm="4" class="d-flex mb-3">
            <a
              href="#"
              v-scroll-to="{ element: '#projects', duration: 800 }"
              class="as-btn shortcut-btn my-2 px-5">Projects
            </a>
          </b-col>
          <b-col cols="12" sm="4" class="d-flex mb-3">
            <a
            href="#"
            v-scroll-to="{ element: '#contact', duration: 1000 }"
            class="as-btn shortcut-btn my-2 px-5">Contact
          </a>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'shotcuts',
};
</script>

<style lang="scss">
</style>
