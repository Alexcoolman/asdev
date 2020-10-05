<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container class="contact my-4">
        <b-row align-h="center">
          <b-col cols="12" class="text-center pt-4">
            <h2>
              <span>Contact</span>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="py-5 pl-4">
            <div class="contact-content">
              <font-awesome-icon
                :icon="['fas', 'paper-plane']"
                class="contact-fa"
                id='paper-plane'
              />
              Mail: <a href="mailto:a*s@as.com">a*s@as.com</a>
            </div>
            <div class="contact-content">
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="contact-fa"
                id='linkedin'
              />
              LinkedIn: <a href="http://www.linkedin.com/in/alexandre-savary/" target="_blank">Alexandre SAVARY</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped lang="scss">
.contact {
  border: 1px solid $green;
  box-shadow: 0 0 30px 0 $green-50;
  color: $green;
  background: $black;
  background-color: $black;
  overflow-wrap: break-word;
}
h2 span {
  position: relative;
  line-break: wrap;
}
.contact-fa {
  color: $green;
}
a {
  text-decoration: none;
  color: $green-50;
  cursor: pointer;
}
a:hover {
  color:transparent;
  background-clip: text;
  background-image: -webkit-radial-gradient(circle, rgba(98,255,98,1) 0%, rgba(255,0,0,1) 100%);
  background-image:    -moz-radial-gradient(circle, rgba(98,255,98,1) 0%, rgba(255,0,0,1) 100%);
  background-image:     -ms-radial-gradient(circle, rgba(98,255,98,1) 0%, rgba(255,0,0,1) 100%);
  background-image:      -o-radial-gradient(circle, rgba(98,255,98,1) 0%, rgba(255,0,0,1) 100%);
  background-image:         radial-gradient(circle, rgba(98,255,98,1) 0%, rgba(255,0,0,1) 100%);
}
</style>
