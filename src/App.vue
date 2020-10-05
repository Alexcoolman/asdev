<template>
  <div id="app">
    <Loading v-if="loading.load" @loaded="loaded"></Loading>
    <Welcome v-if="loading.welcome" @loaded="loaded"></Welcome>
    <Container v-if="loader"></Container>
  </div>
</template>

<script>
import Loading from '@/components/customs/1-loaders/loading/Loading.vue';
import Welcome from '@/components/customs/1-loaders/welcome/Welcome.vue';
import Container from '@/components/containers/Container.vue';

export default {
  name: 'app',
  components: {
    Loading,
    Welcome,
    Container,
  },
  data() {
    return {
      loading: {
        load: true,
        welcome: false,
      },
      hover: false,
    };
  },
  computed: {
    loader() {
      return !(this.loading.welcome || this.loading.load);
    },
  },
  methods: {
    loaded(loading) {
      this.loading.load = loading.load;
      this.loading.welcome = loading.welcome;
    },
  },
};
</script>

<style lang="scss">
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "Anonymus Pro";
  src: url('./fonts/AnonymousPro-Regular.ttf') format("truetype");
}
body {
  font-family: "Anonymus Pro", "truetype", sans-serif !important;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  background: $black;
  background-color: $black;
  color: $green;
}
#app {
  height: 100%;
  width: 100%;
  background: $grey;
  background: radial-gradient(circle, $grey 0%, $black 100%);
}
@media all and (max-device-width: 480px) {
    .body {
    font-size: 150px;
  }
}
</style>
