<template>
  <section class="login">
    
      <h1 class="titulo-login">Crie sua conta</h1>

      <form action="#" @submit.prevent="submit">
        <label for="name">Nome</label>
        <input 
          id="name" 
          type="name" 
          name="name" 
          required 
          autofocus
          v-model="form.nome"
        >

        <label for="email">E-mail</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          autocomplete="current-email" 
          required 
          autofocus 
          v-model="form.email"
        >

        <label for="password">Senha</label>
        <input 
          id="password" 
          type="password" 
          name="password" 
          autocomplete="current-password" 
          required 
          v-model="form.password"
        >

        <input class="btn btn-login" type="submit" value="Criar Conta">
      </form>

      <router-link to="/login" class="acessar-conta">Já tem uma conta? Faça login</router-link>

    </section>
</template>

<script>

import firebase from "firebase";

export default {

  data() {
    return {
      form: {
        nome: "",
        email: "",
        senha: ""
      },
      error: null
    };
  },

  methods: {
    submit() {
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {

        firebase.auth().currentUser.updateProfile({displayName: this.form.nome})

        this.$store.dispatch("fetchUser", data)

        .then(() => {
          setTimeout(() => {
            this.$router.replace({ name: "Home" });
          }, 500)
        });
      })
      .catch(err => {
        this.error = err.message;
      });
    }
  }
};
</script>

<style>

.login {
  max-width: 600px;
  margin: 160px auto 0;
  padding: 0 20px;
  margin-bottom: 60px;
}

.titulo-login {
  text-align: center;
  font-size: 42px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #FFBA00;
}

form {
  display: grid;
}

form input{
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  margin-bottom: 15px;
  width: 100%;
}
form input:hover, form input:focus {
    outline: none;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    border-color: #FFBA00;
}

.btn {
  width: 100%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.acessar-conta {
  color: #FFBA00;
  display: block;
  text-align: center;
  margin: 20px 0px;
}

.acessar-conta:hover {
  text-decoration: underline;
}

</style>