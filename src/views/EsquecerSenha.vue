<template>
  <section class="login">
    
    <h1 class="titulo-login">Esqueci minha senha</h1>

    <p class="erro-usuario" v-if="error">{{error}}</p>

    <div v-if="!emailSending">
      <form action="#" @submit.prevent="submit">
        <label for="email">Seu e-mail</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          autocomplete="current-email" 
          required 
          autofocus 
          v-model="form.email"
        >

        <div>
          <button type="submit" class="btn btn-login">Enviar</button>
        </div>
      </form>

      <router-link to="/login" class="acessar-conta">Já tem uma conta? Faça login</router-link>
    </div>

    <div class="email-enviado" v-else>
      <p>E-mail enviado! Verifique seu e-mail e spam.</p>

      <router-link to="/login" class="btn-ok">Ok</router-link>
    </div>

  </section>
</template>


<script>

import firebase from "firebase";

export default {

  data() {
    return {
      form: {
        email: "",
      },
      error: null,
      emailSending: false,
    };
  },

  methods: {
    submit() {
      this.error = null;
      firebase.auth().sendPasswordResetEmail(this.form.email)
        .then(() => {
          this.emailSending = true;
        })
        .catch(() => {
          this.emailSending = false;
          this.error = "Email não encontrado.";
        });
        }
  }
};
</script>

<style scoped>

.titulo-login {
  margin-bottom: 60px;
  font-size: 32px;
}

#email {
  margin-bottom: 20px;
}

.email-enviado {
  text-align: center;
  color: green;
  font-weight: bold;
}

.email-enviado p {
  margin-bottom: 40px;
}

.btn-ok {
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
}

</style>