import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCQpCwOx80RJqeniw97quGzaoqeHZG0AWg",
  authDomain: "ecommerce-lucas.firebaseapp.com",
  projectId: "ecommerce-lucas",
  storageBucket: "ecommerce-lucas.appspot.com",
  messagingSenderId: "349354161964",
  appId: "1:349354161964:web:2c4f366f688d75d6b89e89",
  measurementId: "G-9PH4WQV2VK"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
