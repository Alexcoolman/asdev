<template>
  <div class="medias">
    <div class="bulle">
      <img src="../../../../assets/fb.svg" alt="Logo facebook" class="logo-medias">
    </div>
    <div class="bulle">
      <img src="../../../../assets/insta.svg" alt="Logo instagram" class="logo-medias">
    </div>
    <div class="bulle">
      <img src="../../../../assets/yt.svg" alt="Logo youtube" class="logo-medias">
    </div>
    <div class="bulle">
      <img src="../../../../assets/github.svg" alt="Logo github" class="logo-medias">
    </div>
  </div>
</template>

<script>
export default {
  name: 'medias',
};
</script>

<style scoped lang="scss">
.medias {
  list-style-type: none;
}
.bulle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid $green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  background: $green;
  cursor: pointer;
  position: relative;
}
.logo-medias {
  width: 40px;
  height: 40px;
}
</style>
