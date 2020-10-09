<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="tools-use text-center my-4">
        <b-row align-h="center">
          <b-col cols="12" class="pt-4">
            <h2>
              <span>Mes </span><span>Outils </span>
              <span>de </span><span>travail </span>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="p-5">
            <ToolsList></ToolsList>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import ToolsList from '@/components/containers/2-toolsUse/toolsList/ToolsList.vue';

export default {
  name: 'ToolsUse',
  components: {
    ToolsList,
  },
};
</script>

<style lang="scss">
.tools-use {
  border: 1px solid $green;
  box-shadow: 0 0 30px 0 $green-50;
  border-radius: 15px;
  color: $green;
  background: $black;
  background-color: $black;
  overflow-wrap: break-word
}
h2 span {
  position: relative;
  line-break: wrap;
}
</style>
