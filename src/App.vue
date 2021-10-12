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
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  font-family: 'Montserrat';
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0px 20px;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

.btn-comprar {
  background-color: #CC2131;
  width: 180px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
}

label {
  margin-bottom: 5px;
}

input, textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

input:hover, input:focus, textarea:hover, textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #CC2131;
}

  .btn {
    display: block;
    padding: 10px 30px;
    background: #CC2131;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    cursor: pointer;
  }

</style>
