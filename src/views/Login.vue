<template>
  <section class="login">
    
    <h1 class="titulo-login">Login</h1>

    <p class="erro-usuario" v-if="error">{{error}}</p>

    <form action="#" @submit.prevent="submit">
      <label for="current-email">Email</label>
      <input 
        id="current-email" 
        type="email" 
        name="email" 
        autocomplete="username" 
        required 
        autofocus 
        v-model="form.email"
      >

      <label for="password">Password</label>
      <input 
        id="password" 
        type="password" 
        name="password" 
        autocomplete="current-password" 
        required 
        v-model="form.password"
      >

      <div>
          <button class="btn btn-login" type="submit">Login</button>
      </div>
    </form>

    <router-link class="acessar-conta" to="/register">Não tem conta? Crie uma</router-link>

    <router-link class="acessar-conta" to="/esqueci-senha">Esqueceu a senha?</router-link>

  </section>
</template>

<script>

import firebase from "firebase";

export default {

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },

  methods: {
    submit() {
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(() => {
        this.$router.replace({ name: "Home" });
      })
      .catch(() => {
        this.error = 'Usuário não encontrado!';
      });
    }
  }
  
};
</script>

<style>
.erro-usuario {
  text-align: center;
  margin-bottom: 20px;
  background-color: red;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
}
</style>