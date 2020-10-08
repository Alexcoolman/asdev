<template>
  <div class="bloc">
    <span>B</span>
    <span>I</span>
    <span>E</span>
    <span>N</span>
    <span>V</span>
    <span>E</span>
    <span>N</span>
    <span>U</span>
    <span>E</span>
    <div class="ligne"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'welcome',
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      const allLetters = document.querySelectorAll('.bloc span');
      const ligne = document.querySelector('.ligne');

      const TLLetters = gsap.timeline();
      TLLetters
        .from(ligne, {
          width: '0%', opacity: 0, duration: 0.7, ease: 'power1.in',
        })
        .from(allLetters, {
          opacity: 0, top: gsap.utils.wrap([100, -100]), stagger: 0.1, ease: 'power2.out',
        })
        .to(allLetters, {
          opacity: 0, top: gsap.utils.wrap([-100, 100]), stagger: 0.1, ease: 'power2.out',
        })
        .to(ligne, {
          width: '0%', opacity: 0, duration: 0.7, ease: 'power1.out', onComplete: this.end,
        });
    },
    end() {
      this.$emit('loaded', { load: false, welcome: false });
    },
  },
};
</script>

<style lang="scss">
.bloc {
  background: $black;
  background-color: $black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bloc span {
  font-size : 10vw;
  position: relative;
  letter-spacing: 25px;
  text-shadow: 0 0 3px $green;
}
.bloc span:nth-child(9) {
  letter-spacing: normal;
}
.ligne {
  width: 85vw;
  height: 25px;
  background: $grey;
  border-radius: 9999px;
  margin: 0 auto;
  position: absolute;
  z-index: 10;
}
span:nth-child(odd) {
  z-index: 11;
}
span:nth-child(even) {
  z-index: 9;
}
@media all and (max-device-width: 480px) {
  .bloc span {
    font-size: 10vw;
    letter-spacing: 10px;
  }
  .ligne {
    height: 10px;
  }
}

</style>
