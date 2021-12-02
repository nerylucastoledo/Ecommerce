<template>
  <section>

    <div v-if="loading">
        <Loading/>
    </div>

    <div v-else>
        <ContentInicial/>

        <div>
            <PopUpCupom/>
        </div>

        <div key="ultimos-lancamentos" id="ultimos-lancamentos">
            <UltimosLancamentos/>
        </div>

        <div class="racing" key="racing">
            <ListItem lista="Racing">
                <h1 class="titulo">RACING</h1>

                <div class="imagem-item-home">
                    <router-link to="/racing">
                        <img 
                            id="imagem-card-categoria" 
                            src="../assets/racing-2.png" 
                            alt="Racing"
                        >

                        <p class="texto-imagem-home">Venha viver experiências únicas com nossas racing.</p>
                    </router-link>
                </div>
            </ListItem>

            <router-link class="btn-produtos" to="/racing">Ver produtos</router-link>
        </div>

        <div class="retro" key="retro">
            <ListItem lista="Retro">
                <h1 class="titulo">RETRÔ</h1>

                <div class="imagem-item-home">
                    <router-link to="/retro">
                        <img 
                            id="imagem-card-categoria" 
                            src="../assets/retro-foto.jpg" 
                            alt="Bicileta Retrô"
                        >

                        <p class="texto-imagem-home">As retrô nunca irão sair de moda.</p>
                    </router-link>
                </div>
            </ListItem>

        <router-link class="btn-produtos" to="/retro">Ver produtos</router-link>
        </div>

        <div class="motorizada" key="motorizada">
            <ListItem lista="Motorizada">
                <h1 class="titulo">MOTORIZADA</h1>

                <div class="imagem-item-home">
                    <router-link to="/motorizada">
                        <img 
                            id="imagem-card-categoria" 
                            src="../assets/motorizada-foto.jpg" 
                            alt="Bicileta Motorizada"
                        >

                        <p class="texto-imagem-home">Se você gosta de velocidade, aqui você irá encontrar a melhor.</p>
                    </router-link>
                </div>
            </ListItem>

            <router-link class="btn-produtos" to="/motorizada">Ver produtos</router-link>
        </div>
    </div>
  </section>
  
</template>

<script>

import ContentInicial from '../components/ContentInicial.vue'
import UltimosLancamentos from '../components/UltimosLancamentos.vue'
import ListItem from '../components/ListItem.vue'
import Loading from '../components/Loading.vue'
import PopUpCupom from '../components/PopUpCupom.vue'

export default {
  name: 'Home',

  data(){
      return {
          loading: 1
      }
  },

  components: {
    UltimosLancamentos,
    ListItem,
    ContentInicial,
    Loading,
    PopUpCupom
  },

  created() {
    document.title =  'Home - LucasBiker'

    setTimeout(() => {
        this.loading = 0
    }, 2000);
  }

}

</script>

<style>

.racing, .retro, .motorizada {
  margin-top: 60px;
}

</style>
