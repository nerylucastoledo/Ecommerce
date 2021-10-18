<template>
    <div class="info-carrossel">

      <div class="carrosel-inicio">
        <router-link to="/racing"><img src="../assets/imagem-principal.png" alt="Imagem Principal"></router-link>
      </div>

      <div class="carrosel-inicio">
        <router-link to="/motorizada"><img src="../assets/motorizada.png" alt="Imagem Principal"></router-link>
      </div>

      <div class="carrosel-inicio">
        <router-link to="/retro"><img src="../assets/retro.png" alt="Imagem Principal"></router-link>
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

</template>

<script>

export default {
  name: 'Home',

  data() {
    return {
      slideIndex: 0
    }
  },

  methods: {
    carroselImagem(n) {
      this.slideIndex += n

      const imagensHome = document.querySelectorAll('.carrosel-inicio')

      if(imagensHome.length > 0) {
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
      }
    },
  },
  
  mounted() {

    this.carroselImagem(0)

      setInterval(() => {
        if(this.$route.name == 'Home') {
          this.carroselImagem(1)
        } else {
          this.slideIndex = 0
        }
      }, 3000)

  }
}

</script>

<style>

/*SLIDE */

.carrosel-inicio {
  display: none;
  cursor: pointer;
}

.info-carrossel {
  position: relative;
}

.info-carrossel img{
  width: 100%;
  max-height: 600px;
}

</style>
