<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="section-container-fluid contact my-4">
        <b-row align-h="center" align-v="center">
          <b-col cols="12">
            <b-row align-h="center">
              <b-col cols="12" class="text-center pt-4">
                <h2>
                  <font-awesome-icon
                    :icon="['fas', 'at']"
                    class="title-fa"
                    id='at'
                  />
                </h2>
                <h2>
                  Contact
                </h2>
              </b-col>
            </b-row>
            <b-row align-h="center" align-v="center">
              <b-col cols="12" md="7">
                <b-row>
                  <b-col cols="12" class="text-center p-4">
                    <img
                    src="../../../assets/AS_Logo_dirisi.png"
                    width="200" height="200" title="AS Logo"
                    class="d-inline-block align-top logo contact-logo"
                    alt="logo" loading="lazy">
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" md="5">
                <b-row class="text-center p-2 contact-content" align-h="center" align-v="center">
                  <b-col cols="4" :class="[this.mobile ? 'text-center' : 'text-right']">
                    <b-col>
                      <font-awesome-icon
                        :icon="['fas', 'paper-plane']"
                        class="contact-fa fa-3x mail"
                        id='paper-plane'
                      />
                    </b-col>
                    <b-col class="ico-info">
                      Mail
                    </b-col>
                  </b-col>
                  <b-col cols="8" :class="[this.mobile ? 'text-center' : 'text-left']">
                    <a href="mailto:alexsvry@gmail.com">alexsvry@gmail.com</a>
                  </b-col>
                </b-row>
                <b-row class="text-center p-2 contact-content" align-h="center" align-v="center">
                  <b-col cols="4" :class="[this.mobile ? 'text-center' : 'text-right']">
                    <b-col>
                      <font-awesome-icon
                        :icon="['fab', 'linkedin']"
                        class="contact-fa fa-3x linkedin"
                        id='linkedin'
                      />
                    </b-col>
                    <b-col class="ico-info">
                      LinkedIn
                    </b-col>
                  </b-col>
                  <b-col cols="8" :class="[this.mobile ? 'text-center' : 'text-left']">
                    <a href="http://www.linkedin.com/in/alexandre-savary/" target="_blank">Alexandre SAVARY</a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    mobile: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
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
.linkedin:hover {
  color: $linked-in;
}
.mail:hover {
  color: $green-80;
}
.ico-info {
  font-size: 11px;
}
</style>
