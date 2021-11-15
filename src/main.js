import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUser, 
  faShoppingCart, 
  faTimes, 
  faCheck, 
  faChartBar, 
  faMoneyBillAlt, 
  faCubes, 
  faTruckMoving, 
  faShoppingBag, 
  faSignOutAlt, 
  faTruck, 
  faCreditCard, 
  faHeadset, 
  faMoneyBillWave,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts)

Vue.config.productionTip = false

library.add([
  faUser, 
  faCubes, 
  faCheck, 
  faTimes, 
  faChartBar, 
  faMoneyBillAlt, 
  faShoppingCart, 
  faTruckMoving, 
  faShoppingBag, 
  faSignOutAlt, 
  faTruck, 
  faCreditCard, 
  faHeadset, 
  faMoneyBillWave,
  faSearch
])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter("numeroPreco", valor => {
  valor = Number(valor)
  if(!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  } else {
    return ""
  }
})

const firebaseConfig = {
  apiKey: "AIzaSyCQpCwOx80RJqeniw97quGzaoqeHZG0AWg",
  authDomain: "ecommerce-lucas.firebaseapp.com",
  projectId: "ecommerce-lucas",
  storageBucket: "ecommerce-lucas.appspot.com",
  messagingSenderId: "349354161964",
  appId: "1:349354161964:web:2c4f366f688d75d6b89e89",
  measurementId: "G-9PH4WQV2VK",
  databaseURL: 'https://ecommerce-lucas-default-rtdb.firebaseio.com/'
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
