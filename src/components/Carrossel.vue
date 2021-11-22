<template>
  <section class="carrossel">
    
    <div class="carrossel-inicio">
      <router-link to="/racing">
        <img src="../assets/imagem-principal.png" alt="Imagem Principal">
      </router-link>
    </div>

    <div class="carrossel-inicio">
      <router-link to="/motorizada">
        <img src="../assets/motorizada.png" alt="Imagem Principal">
      </router-link>
    </div>

    <div class="carrossel-inicio">
      <router-link to="/retro">
        <img src="../assets/retro.png" alt="Imagem Principal">
      </router-link>
    </div>

    <div class="container">
      <div class="info-ecommerce">
        <div>
          <font-awesome-icon icon="truck" size="3x"/>

          <p>Entregamos para todo o Brasil.</p>
        </div>

        <div>
          <font-awesome-icon icon="credit-card" size="3x"/>

          <p>Parcelamos em 12x sem juros.</p>
        </div>

        <div>
          <font-awesome-icon icon="headset" size="3x"/>

          <p>Suporte 24 horas.</p>
        </div>

        <div>
          <font-awesome-icon icon="money-bill-wave" size="3x"/>

          <p>Pagamento seguro</p>
        </div>
      </div>
    </div>

  </section>
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
    carrosselImagem(n) {
      this.slideIndex += n

      const imagensHome = document.querySelectorAll('.carrossel-inicio')

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

    this.carrosselImagem(0)

      setInterval(() => {
        if(this.$route.name == 'Home') {
          this.carrosselImagem(1)
        } else {
          this.slideIndex = 0
        }
      }, 3000)

  }
}

</script>

<style>

/*SLIDE */

.carrossel {
  margin-top: 100px;
  margin-bottom: 60px;
}

.carrossel-inicio {
  display: none;
  cursor: pointer;
}

.carrossel-inicio img{
  width: 100%;
  max-height: 100%;
}

/* INFO ECOMMERCE */
.info-ecommerce {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 20px;
}

.info-ecommerce p {
  margin-top: 10px;
  color: #222;
}

.info-ecommerce {
  text-align: center;
  color: #FFBA00;
}

.info-ecommerce div:hover {
  color: #222;
  transition: .3s;
}

@media (max-width: 700px) {
  .info-ecommerce {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  .info-ecommerce div:nth-child(3), .info-ecommerce div:nth-child(4) {
    margin-top: 20px;
  }

  .info-ecommerce p {
    font-size: 14px;
  }
  .carrossel-inicio img{
    margin-top: 20px;
    max-width: 100%;
    height: 200px;
  }
}


</style>
