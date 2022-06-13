import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faAngleDown,
  faAngleUp,
  faClock,
  faEnvelope,
  faBullhorn,
  faSignIn,
  faMicrochip,
  faStarHalfStroke,
  faAward,
  faQuestionCircle,
  faMessage,
  faBars,
  faCircleInfo,
  faPeopleGroup,
  faListOl,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';
import { faWeixin, faQq, faWeibo } from '@fortawesome/free-brands-svg-icons';

library.add([
  faAngleDown,
  faAngleUp,
  faClock,
  faEnvelope,
  faBullhorn,
  faSignIn,
  faMicrochip,
  faStarHalfStroke,
  faAward,
  faQuestionCircle,
  faMessage,
  faBars,
  faCircleInfo,
  faPeopleGroup,
  faListOl,
  faTrophy,
  faWeixin,
  faQq,
  faWeibo
]);

Vue.component('font-awesome-icon', FontAwesomeIcon);
