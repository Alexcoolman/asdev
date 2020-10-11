<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="section-container-fluid tools-use text-center my-4">
        <b-row align-h="center" align-v="center">
          <b-col cols="12" class="pt-4">
            <h2>
              <span>
                <font-awesome-icon
                  :icon="['fas', 'tools']"
                  class="title-fa"
                  id='tools'
                />
              </span>
              <span> Mes</span>
              <span> Outils</span>
              <span> de</span>
              <span> travail</span>
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
import ToolsList from '@/components/containers/3-tools-use/toolsList/ToolsList.vue';

export default {
  name: 'ToolsUse',
  components: {
    ToolsList,
  },
};
</script>

<style lang="scss">
</style>
