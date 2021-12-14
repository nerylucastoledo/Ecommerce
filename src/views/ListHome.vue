<template>
  <section>
      
    <div v-if="!loading">
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
                            src="../assets/racing-2.webp" 
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
                            src="../assets/retro-foto.webp" 
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
                            src="../assets/motorizada-foto.webp" 
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

  data() {
      return {
          loading: false
      }
  },

  components: {
    UltimosLancamentos,
    ListItem,
    ContentInicial,
    Loading,
    PopUpCupom
  },


  methods: {
        async getProdutoRacing() {
            await this.chamarApi('Racing')
            this.loading = true
        },

        getProdutoRetro() {
            this.chamarApi('Retro')
        },

        getProdutoMotorizada() {
            this.chamarApi('Motorizada')
        },

        chamarApi(categoria) {
            return new Promise(resolve => {
                fetch(`https://restapiecomerce.herokuapp.com/produto/?categoria=${categoria}`)
                .then(req => req.json())
                .then(res => {
                    this.$store.state.listaLancamentos.push(res.reverse()[0])
                    resolve('resolvido')
                })
            });
        },
    },

    created() {
        document.title =  'Home - LucasBiker'
        this.$store.state.listaLancamentos = []
        this.getProdutoRacing()
        this.getProdutoRetro()
        this.getProdutoMotorizada()
    }

}

</script>

<style>

.racing, .retro, .motorizada {
  margin-top: 60px;
}

.color-red {
    margin-top: 160px;
}

</style>
