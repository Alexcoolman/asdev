<template>
  <b-row align-h="around">
    <b-col cols="11">
      <b-container fluid class="contact my-4">
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
              <b-row align-v="center" class="text-center">
                <b-col cols="5" sm="6">
                  <b-col cols="12">
                    <font-awesome-icon
                      :icon="['fas', 'paper-plane']"
                      class="contact-fa fa-3x mail"
                      id='paper-plane'
                    />
                  </b-col>
                  <b-col cols="12">
                    Mail
                  </b-col>
                </b-col>
                <b-col cols="7" sm="6">
                  <a href="mailto:alexsvry@gmail.com">alexsvry@gmail.com</a>
                </b-col>
              </b-row>
            </div>
            <div class="contact-content">
              <b-row align-v="center" class="text-center">
                <b-col cols="5" sm="6">
                  <b-col cols="12">
                    <font-awesome-icon
                      :icon="['fab', 'linkedin']"
                      class="contact-fa fa-3x linkedin"
                      id='linkedin'
                    />
                  </b-col>
                  <b-col cols="12">
                    LinkedIn
                  </b-col>
                </b-col>
                <b-col cols="7" sm="6">
                  <a href="http://www.linkedin.com/in/alexandre-savary/" target="_blank">Alexandre SAVARY</a>
                </b-col>
              </b-row>
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

<style lang="scss">
.contact {
  border: 1px solid $green;
  box-shadow: 0 0 30px 0 $green-50;
  border-radius: 15px;
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
.linkedin:hover {
  color: $linked-in;
}
.mail:hover {
  color: $green-80;
}
</style>
