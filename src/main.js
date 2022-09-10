import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//my base Style
import "./Style/Style.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
//SOLID
import {
  faHouseChimney,
  faUser,
  faBriefcase,
  faNewspaper,
  faEnvelope,
  faCode,
  faCloudArrowDown,
  faFaceFrown,
  faLocationDot,
  faPhone,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

//REGULARS
import { faSun } from "@fortawesome/free-regular-svg-icons";

//BRANDS
import {
  faGithub,
  faFacebookF,
  faWhatsapp,
  faTelegram,
  faTwitter,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faHouseChimney,
  faUser,
  faBriefcase,
  faNewspaper,
  faEnvelope,
  faCode,
  faCloudArrowDown,
  faGithub,
  faFaceFrown,
  faLocationDot,
  faPhone,
  faLanguage,
  faFacebookF,
  faTelegram,
  faTwitter,
  faGithubSquare,
  faSun,
  faWhatsapp
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
