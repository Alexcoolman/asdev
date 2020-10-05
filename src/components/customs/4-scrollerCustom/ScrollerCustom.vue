<template>
  <GoTop
    :bgColor="bgColor"
    :fgColor="fgColor"
    :boxShadow="boxShadow"
    :size="size"
    :right="right"
    :max-width="maxWidth"
  >
  </GoTop>
</template>

<script>
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'scrollerCustom',
  components: {
    GoTop,
  },
  data() {
    return {
      bgColor: '#000',
      fgColor: '#62FF62',
      boxShadow: '0 0 0.75rem rgb(98,255,98)',
      size: 40,
      right: 45,
      maxWidth: 100,
    };
  },
};
</script>

<style lang="scss">
.vue-go-top {
  border: 1px solid $green;
}
.vue-go-top:hover {
  box-shadow: 0 0 30px 0 $green !important;
  animation: bounce 0.35s ease infinite alternate;
}

@keyframes bounce{
  from {transform: translateY(0);}
  to   {transform: translateY(-10px);}
}
</style>
