// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"


import "phoenix_html"

import axios from 'axios'
window.axios = axios;
axios.defaults.headers.common['Accept'] = 'application/json'
let token = document.head.querySelector('meta[name="csrf_token"]');
if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.log('CSRF not found')
}


import Vue from "vue";
import App from "./App";
import Message from './components/Message'

Vue.component('message', Message);

new Vue({
    render: h => h(App)
}).$mount("#app")
