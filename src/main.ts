import "./assets/main.css";
import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiLinkedin, BiGithub, BiMailbox } from "oh-vue-icons/icons";

const app = createApp(App);

addIcons(BiLinkedin, BiGithub, BiMailbox);

app.component("v-icon", OhVueIcon);
app.mount("#app");
