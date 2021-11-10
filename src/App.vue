<template>
  <div id="app">
    <Header/>
    <main id="main">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {

  components: {
    Header,
    Footer
  },

  beforeCreate() {
    this.$store.commit('INICIALIZAR_STORAGE')
  }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

/* GERAL */

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

* {
  box-sizing: border-box;
  font-family: 'Montserrat'
}

body, ul, li, h1, h2, p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0px 20px;
}

.titulo-pages {
    font-size: 42px;
    text-align: center;
    margin-bottom: 60px;
}

/* CARD ITEMS */
.titulo {
    font-size: 42px;
    font-style: italic;
    color: #222;
}

.titulo::before {
    display: inline-block;
    content: "";
    width: 100px;
    height: 2px;
    background-color: #FFBA00;
    text-align: center;
    margin-bottom: 15px;
    margin-right: 20px;
}

.item-bicicleta {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.item {
    border-radius: 4px;
    position: relative;
    text-align: center;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    box-sizing: border-box;
    padding: 10px;
    border-radius: 4px;
    margin-top: 40px;
    flex: 1;
}

.zoom {
    overflow: hidden;
    max-width: 400px;
    position: relative;
}

.zoom img {
    display: block;
    margin: 0 auto 20px;
    border-radius: 4px;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    height: 250px;
    width: 100%;
    object-fit: cover;
}

.zoom:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.nome-bicicleta {
    font-size: 30px;
}

.preco-antigo-bicicleta {
    margin: 10px 0px 10px;
    font-size: 16px;
    color: #908f8f;
    text-decoration: line-through;
}

.valor-bicicleta {
    color: #FFBA00;
    font-weight: bold;
    font-size: 24px;
}

.parcela-bicicleta {
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 20px;
    font-weight: bold;
}

.comprar-bicicleta {
    background-color: #FFBA00;
    width: 220px;
    border: none;
    color: #fff;
    padding: 10px 0px;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
}

.comprar-bicicleta:hover {
    transition: .3s;
    transform: scale(1.1);
    color: #222;
}

.desconto {
    position: absolute;
    color: #fff;
    top: 0px;
    left: 0px;
    border-radius: 4px;
    padding: 5px;
    z-index: 2;
    background-color: #FFBA00;
}

.btn-produtos {
    background-color: transparent;
    margin: 60px auto 0;
    display: block;
    text-align: center;
    border: none;
    border-radius: 4px;
    color: #222;
    padding: 15px 0px;
    font-size: 18px;
    cursor: pointer;
    max-width: 240px;
    border: 1px solid #FFBA00;
}

.btn-produtos:hover {
  transition: .3s;
  background-color: #FFBA00;
  color: #fff;
}

.imagem-item-home {
    position: relative;
    overflow: hidden;
}

.texto-imagem-home {
    position: absolute;
    top: 200px;
    left: 80px;
    font-size: 24px;
    color: #fff;
    text-shadow: 0px 0px 5px black;
    max-width: 500px;
    text-align: center;
    font-weight: bold;
}

#imagem-card-categoria {
    object-fit: cover;
    width: 100%;
    height: 350px;
    filter: brightness(60%);
    margin-bottom: 20px;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    border-radius: 4px;
    margin-top: 60px;
}

/* PAGINA CATEGORIA DAS BICICLETAS */
.bicicletas-pagina {
    margin-top: 160px;
    margin-bottom: 20px;
}

/* TRANSICAO */
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition:  all 0.3s;
}

@media (max-width: 700px) {
  .texto-imagem-home {
    left: 20px;
  }
}

@media (max-width: 440px) {
    #imagem-card-categoria {
      height: 150px;
    }
    .texto-imagem-home {
      top: 120px;
      left: 10px;
      right: 10px;
      font-size: 16px;
    }
    .zoom img {
      height: 200px;
    }
    .titulo::before {
      width: 100%;
    }
    .titulo {
      font-size: 32px;
    }
}

</style>
