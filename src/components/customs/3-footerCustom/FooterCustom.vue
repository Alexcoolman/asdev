<template>
<footer class="footer">
    <b-container fluid>
      © A*S 2020
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'footerCustom',
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  text-align: center;
  line-height: 62px;
  background-color: $black;
  border-top: 1px solid $green;
  -webkit-filter: drop-shadow($green-shadow);
  filter: drop-shadow($green-shadow);
}
</style>
