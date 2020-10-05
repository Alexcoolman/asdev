import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faFontAwesome,
  faNodeJs,
  faGit,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add Solid & Brands to Font Awesome
library.add(
  // FA Solid
  faPaperPlane,
  // FA Brand
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faFontAwesome,
  faNodeJs,
  faGit,
  faLinkedin,
);

// Add Font Awesome to Vue
Vue.component('font-awesome-icon', FontAwesomeIcon);
