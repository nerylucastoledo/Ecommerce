<template>
  <section class="login">

        <h1 class="titulo-login">Crie sua conta</h1>

        <form action="#" @submit.prevent="submit">
            <label for="name">Nome</label>
            <input  id="name" type="name" name="name" value required autofocus v-model="form.nome"/>

            <label for="email">E-mail</label>
            <input id="email" type="email" name="email" value autocomplete="username" required autofocus v-model="form.email"/>

            <label for="password">Senha</label>
            <input id="password" type="password" name="password" autocomplete="current-password" required v-model="form.password"/>

          <div>
            <button type="submit" class="btn">Criar Conta</button>
          </div>
        </form>

        <router-link to="/login" class="perdeu">Já tem uma conta? Faça login</router-link>

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
    max-width: 500px;
    margin: 160px auto 0;
    padding: 0 20px;
    margin-bottom: 60px;
}

.titulo-login {
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    margin-bottom: 20px;
    color: #CC2131;
}

form {
    display: grid;
}

.btn {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.perdeu {
    color: #CC2131;
    display: block;
    text-align: center;
    margin: 20px 0px;
}

.perdeu:hover {
    text-decoration: underline;
}

</style>