<template>
    <header>
        <nav class="container">
            <router-link to="/" class="logo">
                <img src="@/assets/logo-bike.png" alt="LucasBiker">
            </router-link>

            <div class="menu-mobile" @click="abrirMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div class="menu ativo">
                <template v-if="user.loggedIn">
                    <span class="nome-usuario">Olá, {{user.data.displayName.split(' ')[0]}}</span>
                </template>

                <router-link v-else class="btn-login" to="/register">
                    <img src="@/assets/iconLogin.png" alt="Icon Login">
                </router-link>
                <router-link class="carrinho" to="/carrinho">
                    <img src="@/assets/carrinho.png" alt="Carrinho">
                    <span class="quantidade-carrinho">1</span>
                </router-link>
            </div>
        </nav>

        {{user}}
    </header>
</template>

<script>

import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
    name: 'Header',

    computed: {
        ...mapGetters({
        user: "user"
        })
    },


    methods: {
        abrirMenu() {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('ativo')
        },

        signOut() {
            firebase
            .auth()
            .signOut()
            .then(() => {
            this.$router.replace({
                name: "home"
            });
            });
        }
    },
}
</script>

<style>

.ativo {
    display: block;
}

.menu-mobile {
    display: none;
}

header {
    height: 100px;
    background-color: #CC2131;
    position: fixed;
    width: 100%;
    z-index: 1;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    margin-top: 10px;
}

.menu {
    display: flex;
    align-items: center;
}

.menu a {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #000000;
}

.menu img {
    margin-right: 20px;
}

.carrinho {
    margin-left: 40px;
    position: relative;
}

.quantidade-carrinho {
    position: absolute;
    top: 0px;
    right: 5px;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    padding: 3px;
    font-size: 14px;
}

.nome-usuario {
    color: #fff;
}

@media (max-width: 500px) {

    .ativo {
        display: none;
    }

    .menu {
        position: absolute;
        right: 0px;
        top: 100px;
        background-color: #F3F2F2
    }

    .menu-mobile {
        display: inline-block;
        cursor: pointer;
    }

    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #F3F2F2;
        margin: 6px 0;
    }

    .menu a {
        padding: 14px 36px;
    }

    .menu a:hover {
        background-color: #ddd;
    }

    .carrinho {
        margin: 0px;
    }

    .quantidade-carrinho {
        position: relative;
        top: -20px;
    }

}

</style>