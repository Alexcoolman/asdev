<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="section-container-fluid presentation mb-4">
        <b-row cols="1"
        class="full-content-presentation text-center" align-h="center" align-v="center">
          <b-col>
            <h2>
              <span>Hello</span><span> World!</span><span>👋</span>
            </h2>
          </b-col>
          <b-col>
            <h2>
              <span>Alexandre</span><span>,</span>
            </h2>
          </b-col>
          <b-col>
            <h2>
              <span>WEB</span><span> Développeur</span>
            </h2>
          </b-col>
          <b-col>
            <h2>
              <span>👨🏻‍💻</span>
            </h2>
          </b-col>
          <b-col>
            <div class='mouse-scroll'></div>
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
export default {
  name: 'presentation',
};
</script>

<style lang="scss">
.full-content-presentation {
  min-height: calc(100vh - 150px);
}
.mouse-scroll {
  position: relative;
  left: 50%;
}
.mouse-scroll:before {
  position: absolute;
  left: 50%;
}
.mouse-scroll {
  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 80%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px $green-80;
  border-radius: 25px;
}
.mouse-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: $green;
  margin-left: -4px;
  top: 54px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-46px);
  }
}
.text-black {
  color: $black;
}
</style>
