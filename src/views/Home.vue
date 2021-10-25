<template>
  <div class="home">
    
    <Carrossel/>

    <section class="lucasbiker-home">
      <UltimosLancamentos/>
    </section>

    <section class="lucasbiker-home">
      <ListRacing>
        <h1 class="titulo-principal">RACING</h1>
        <img id="img-categoria-home" src="../assets/racing.png" alt="Racing">
      </ListRacing>

      <router-link class="btn-produtos" to="/racing">Ver produtos</router-link>
    </section>

    <section class="lucasbiker-home">
      <ListRetro>
        <h1 class="titulo-principal">RETRÔ</h1>
        <img id="img-categoria-home" src="../assets/retro-2.png" alt="Retrô">
      </ListRetro>

      <router-link class="btn-produtos" to="/retro">Ver produtos</router-link>
    </section>

    <section class="lucasbiker-home">
      <ListMotorizada>
        <h1 class="titulo-principal">MOTORIZADA</h1>
        <img id="img-categoria-home" src="../assets/motorizada-2.png" alt="Motorizada">
      </ListMotorizada>

      <router-link class="btn-produtos" to="/motorizada">Ver produtos</router-link>
    </section>

  </div>
</template>

<script>

import Carrossel from '../components/Carrossel.vue'
import ListRacing from '../components/ListRacing.vue'
import UltimosLancamentos from '../components/UltimosLancamentos.vue'
import ListRetro from '../components/ListRetro.vue'
import ListMotorizada from '../components/ListMotorizada.vue'

export default {
  name: 'Home',

  components: {
    ListRacing,
    UltimosLancamentos,
    ListRetro,
    ListMotorizada,
    Carrossel
  },

}

</script>

<style>

.home {
  margin-top: 100px;
}

/* conteudo principal */

.titulo-principal {
  font-style: italic;
  margin-top: 60px;
  font-size: 42px;
}

.lucasbiker-home {
  border-bottom: 1px solid #000;
  margin: 60px 0;
}

.lucasbiker-home a {
  margin-bottom: 60px;
}

.lucasbiker-home:last-child {
  border-bottom: none;
  margin: 0px;
}

.lucasbiker-home-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.lucasbiker-home-items div {
  background-color: #F3F2F2;
  padding: 20px;
  text-align: center;
  margin: 60px auto 60px;
}

.lucasbiker-home-items div img {
  width: 300px;
  height: 200px;
}

.item-nome {
  margin-top: 20px;
  font-size: 26px;
}

.item-valor-antigo {
  font-size: 18px;
  margin-top: 20px;
  text-decoration: line-through;
  color: #747070;
}

.item-valor {
  font-size: 26px;
  color: #CC2131;
  font-weight: bold;
  margin-top: 10px;
}

.item-parcelado {
  font-size: 16px;
  color: #747070;
  margin-bottom: 20px;
}

.info-empresa {
  margin-top: -10px;
  padding: 20px 0px;
  background-color: #F5EFEF;
}

.info-empresa-items {
  display: flex;
  justify-content: space-between;
}

.info-empresa img {
  max-width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto 10px;
}

#img-caloi {
  max-width: 180px;
}

#img-categoria-home {
  max-width: 100%;
  margin-top: 60px;
}

.btn-produtos {
  display: block;
  padding: 15px 10px;
  background: transparent;
  border-radius: 10px;
  color: #CC2131;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #CC2131;
}

.btn-produtos:hover {
  background: #CC2131;
  color: #fff;
  border: 1px solid #CC2131;
}

</style>
