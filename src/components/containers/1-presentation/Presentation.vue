<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="section-container-fluid presentation mb-4">
        <b-row cols="1"
        :class="[this.mobile ? 'full-content-presentation' : '', 'text-center']"
        align-h="center" align-v="center">
          <b-col v-if="false" class='helloWorld'>
            <HelloWorld></HelloWorld>
          </b-col>
          <b-col>
            <h2 class="mt-5">
              <span>Hello</span><span> World!</span><span>👋</span>
            </h2>
          </b-col>
          <b-col>
            <h2>
              <span>Alexandre</span><span>,</span>
            </h2>
          </b-col>
          <b-col>
            <h2 class="mb-5">
              <span>WEB</span><span> Développeur</span><span>👨🏻‍💻</span>
            </h2>
          </b-col>
          <b-col v-if="this.mobile" class="pb-5">
            <div
             :class="[this.mobile ? 'mouse-scroll-bot' : 'mouse-scroll-top', 'mouse-scroll']"></div>
            <span class="text-black">
              _
            </span>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import HelloWorld from '@/components/containers/1-presentation/HelloWorld.vue';

export default {
  name: 'presentation',
  props: {
    mobile: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.full-content-presentation {
  min-height: calc(100vh - 150px);
}
.mouse-scroll {
  position: relative;
  left: 50%;
  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 80%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px $green-80;
  border-radius: 25px;
}
.mouse-scroll::before {
  content: '';
  position: absolute;
  left: 50%;
  width: 8px;
  height: 8px;
  background: $green;
  margin-left: -4px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
.mouse-scroll-top.mouse-scroll::before {
  top: 4px;
  animation-name: scrollTop;
}
.mouse-scroll-bot.mouse-scroll::before {
  top: 54px;
  animation-name: scrollBot;
}
@keyframes scrollBot {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-46px);
  }
}
@keyframes scrollTop {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
.text-black {
  color: $black;
}
</style>
