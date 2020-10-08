<template>
  <div class="blackbg">
    <div class="loader">
      <span class="lettre">C</span>
      <span class="lettre">H</span>
      <span class="lettre">A</span>
      <span class="lettre">R</span>
      <span class="lettre">G</span>
      <span class="lettre">E</span>
      <span class="lettre">M</span>
      <span class="lettre">E</span>
      <span class="lettre">N</span>
      <span class="lettre">T</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
      loader.classList.add('fondu-out');
    });
    this.loaded();
  },
  methods: {
    loaded() {
      setTimeout(() => {
        this.$emit('loaded', { load: false, welcome: true });
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.blackbg {
  background: $black;
  background-color: $black;
}
.loader {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.lettre {
  color: $grey;
  font-size: 10vw;
  letter-spacing: 15px;
  animation: flash 1s linear infinite;
}

@media all and (max-device-width: 480px) {
    .lettre {
    font-size: 8vw;
  }
}
@keyframes flash {
  0% {
    color: $green;
    text-shadow: 0 0 7px $green;
  }
  90% {
    color: $grey;
    text-shadow: none;
  }
  100% {
    color: $green;
    text-shadow: 0 0 7px $green;
  }
}
.lettre:nth-child(1) {
  animation-delay: 0.1s;
}
.lettre:nth-child(2) {
  animation-delay: 0.2s;
}
.lettre:nth-child(3) {
  animation-delay: 0.3s;
}
.lettre:nth-child(4) {
  animation-delay: 0.4s;
}
.lettre:nth-child(5) {
  animation-delay: 0.5s;
}
.lettre:nth-child(6) {
  animation-delay: 0.6s;
}
.lettre:nth-child(7) {
  animation-delay: 0.7s;
}
.lettre:nth-child(8) {
  animation-delay: 0.8s;
}
.lettre:nth-child(9) {
  animation-delay: 0.9s;
}
.lettre:nth-child(10) {
  animation-delay: 1s;
}
.fondu-out {
  opacity: 0;
  transition: opacity 1.5s ease-out;
}
</style>
