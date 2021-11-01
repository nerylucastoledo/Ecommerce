<template>
  <section class="home">
    
    <Carrossel/>

    <div>
      <UltimosLancamentos/>
    </div>

    <div class="racing">
      <ListRacing>
        <h1 class="titulo">RACING</h1>
        <div class="imagem-item-home">
          <router-link to="/racing">
            <img id="imagem-card-categoria" src="../assets/racing-2.png" alt="Racing">
            <p class="texto-imagem-home">Venha viver experiências únicas com nossas racing.</p>
          </router-link>
        </div>
      </ListRacing>

      <router-link class="btn-produtos" to="/racing">Ver produtos</router-link>
    </div>

    <div class="retro">
      <listRetro>
        <h1 class="titulo">RETRÔ</h1>
        <div class="imagem-item-home">
          <router-link to="/retro">
            <img id="imagem-card-categoria" src="../assets/retro-foto.jpg" alt="Bicileta Retrô">
            <p class="texto-imagem-home">As retrô nunca irão sair de moda.</p>
          </router-link>
        </div>
      </listRetro>

      <router-link class="btn-produtos" to="/retro">Ver produtos</router-link>
    </div>

    <div class="motorizada">
      <listMotorizada>
        <h1 class="titulo">MOTORIZADA</h1>
        <div class="imagem-item-home">
          <router-link to="/motorizada">
            <img id="imagem-card-categoria" src="../assets/motorizada-foto.jpg" alt="Bicileta Motorizada">
            <p class="texto-imagem-home">Se você gosta de velocidade, aqui você irá encontrar a melhor.</p>
          </router-link>
        </div>
      </listMotorizada>

      <router-link class="btn-produtos" to="/motorizada">Ver produtos</router-link>
    </div>

  </section>
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
