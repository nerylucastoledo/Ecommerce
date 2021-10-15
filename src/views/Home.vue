<template>
  <div class="home">
    <div class="info-home">

      <div class="carrosel-inicio">
        <img src="../assets/imagem-principal.png" alt="Imagem Principal">
      </div>

      <div class="carrosel-inicio">
        <img src="../assets/motorizada.png" alt="Imagem Principal">
      </div>

      <div class="carrosel-inicio">
        <img src="../assets/retro.png" alt="Imagem Principal">
      </div>

      <div class="info-empresa">
        <div class="container">

          <div class="info-empresa-items">

            <div>
              <img src="@/assets/icon-caminhao.png" alt="Caminhao entrega">
              <p>Entregamos para todo o Brasil.</p>
            </div>

            <div>
              <img src="@/assets/icon-cartao.png" alt="Cartao">
              <p>Parcelamos em 6x sem juros.</p>
            </div>

            <div>
              <img id="img-caloi" src="@/assets/icon-caloi.png" alt="Caloi">
              <p>Nosso parceiro oficial</p>
          </div>
  
          </div>

        </div>
      </div>

    </div>

    <section>
      <UltimosLancamentos/>
    </section>

    <section>
      <ListRacing/>
    </section>

    <section>
      <ListRetro/>
    </section>

    <section>
      <ListMotorizada/>
    </section>

  </div>
</template>

<script>

import { mapGetters } from "vuex";
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
    ListMotorizada
  },

  data() {
    return {
      slideIndex: 0
    }
  },

  computed: {
    ...mapGetters({
      user: "user"
    })
  },

  methods: {
    carroselImagem(n) {
      this.slideIndex += n

      const imagensHome = document.querySelectorAll('.carrosel-inicio')

      if(this.slideIndex == -1) {
        this.slideIndex = imagensHome.length - 1
        imagensHome[this.slideIndex].style.display = 'block'
        imagensHome[0].style.display = 'none'

      }

      if(this.slideIndex == imagensHome.length) {
        this.slideIndex = 0
        imagensHome[this.slideIndex].style.display = 'block'
        imagensHome[imagensHome.length - 1].style.display = 'none'

      }

      if(n == 1 || n == 0) {
        imagensHome[this.slideIndex].style.display = 'block'

        if(this.slideIndex - 1 != -1) {
          imagensHome[this.slideIndex - 1].style.display = 'none'

        }
      }

      if(n == -1 || n == 0) {
        imagensHome[this.slideIndex].style.display = 'block'

        if(this.slideIndex + 1 != 3) {
          imagensHome[this.slideIndex + 1].style.display = 'none'

        }
      }
    },
  },
  
  created() {
    setTimeout(() => {
      this.carroselImagem(0)
    }, 50)

    setInterval(() => {
      this.carroselImagem(1)
    }, 3000)
  }
}

</script>

<style>
.home {
  margin-top: 100px;
}

/*SLIDE */

.botao-mudar-slide {
  z-index: 2;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 100px;
  font-size: 64px;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.botaodireira {
  left: auto;
  right: 100px;
}

.carrosel-inicio {
  display: none;
}

.info-home {
  position: relative;
}

.info-home img{
  width: 100%;
  max-height: 600px;
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

.lucasbiker-home:last-child {
  border-bottom: none;
  margin: 0px;
}

.lucasbiker-home h1 {
  margin-bottom: 60px;
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
}

</style>
