import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapSigns,
  faTools,
  faCode,
  faAt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
  faVuejs,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faFontAwesome,
  faNodeJs,
  faGrunt,
  faGit,
  faNpm,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faApple,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add Solid & Brands to Font Awesome
library.add(
  // FA Solid
  faMapSigns,
  faTools,
  faCode,
  faAt,
  faPaperPlane,
  // FA Brand
  faVuejs,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faFontAwesome,
  faNodeJs,
  faGrunt,
  faGit,
  faNpm,
  faMedium,
  faStackOverflow,
  faLinkedin,
  faApple,
  faWindows,
);

// Add Font Awesome to Vue
Vue.component('font-awesome-icon', FontAwesomeIcon);
