<template>
  <div class="login">
        <h1 class="titulo-login">Login</h1>
        <p class="erro-usuario" v-if="error">{{error}}</p>
        <form action="#" @submit.prevent="submit">
            <label for="email">Email</label>
            <input
            id="email"
            type="email"
            class="form-control"
            name="email"
            value
            required
            autofocus
            v-model="form.email"
            />

            <label for="password">Password</label>
            <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="form.password"
            />

            <div>
                <button type="submit" class="btn">Login</button>
            </div>
        </form>
    </div>
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          console.log(data)
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