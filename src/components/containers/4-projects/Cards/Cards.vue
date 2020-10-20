<template>
  <article class="projects-cards p-4 mb-2">
    <div class="card-top">
      <MatrixCard :id="this.id"></MatrixCard>
    </div>
    <div class="card-body p-4">
      <h4 class="card-title">Portfolio</h4>
      <p class="card-text p-4">Site personnel permettant de présenter mes compétences</p>
      <div class="py-3"><a
        href="http://alexandresavary.surge.sh/"
        class="as-btn px-4">Voir le site
      </a></div>
    </div>
  </article>
</template>

<script>
import MatrixCard from '@/components/containers/4-projects/Cards/MatrixCard.vue';

export default {
  name: 'cards',
  components: {
    MatrixCard,
  },
  props: {
    id: {
      type: String,
      default: 'card',
    },
  },
};
</script>

<style lang="scss">
.card-top {
  border: 1px solid $green-80;
}
.card-body {
  border-left: 1px solid $green-80;
  border-right: 1px solid $green-80;
  border-bottom: 1px solid $green-80;
  border-radius: 0 0 15px 15px;
}
</style>
