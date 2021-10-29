<template>
  <div class="home">
    
    <Carrossel/>

    <section>
      <UltimosLancamentos/>
    </section>

    <section class="racing">
      <ListRacing>
        <h1 class="titulo">RACING</h1>
        <img src="../assets/racing.png" alt="Racing">
      </ListRacing>

      <router-link class="btn-produtos" to="/racing">Ver produtos</router-link>
    </section>

    <section class="retro">
      <ListRetro>
        <h1 class="titulo">RETRÔ</h1>
        <img src="../assets/retro-2.png" alt="Retrô">
      </ListRetro>

      <router-link class="btn-produtos" to="/retro">Ver produtos</router-link>
    </section>

    <section class="motorizada">
      <ListMotorizada>
        <h1 class="titulo">MOTORIZADA</h1>
        <img src="../assets/motorizada-2.png" alt="Motorizada">
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

.racing, .retro, .motorizada {
  margin-top: 60px;
}

</style>
