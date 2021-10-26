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


                <ul>

                    <li v-if="user.loggedIn">
                        <router-link class="pedidos" to="/concluir-pedido">
                            <span>Pedidos</span>
                            <font-awesome-icon icon="shopping-bag" size="2x"/>
                        </router-link>
                    </li>

                    <li v-if="user.loggedIn">
                        <router-link class="carrinho" to="/carrinho">
                            <span>Carrinho</span>
                            <font-awesome-icon icon="shopping-cart" size="2x"/>
                            <span class="quantidade-carrinho">{{ carrinhoQuantidade }}</span>
                        </router-link>
                    </li>

                    <li v-if="user.loggedIn">
                        <span class="sair-login" @click="signOut">
                            <span class="nome-usuario">Olá, {{user.data.displayName.split(' ')[0]}}</span>
                            <font-awesome-icon icon="sign-out-alt" size="2x"/>
                        </span>
                    </li>

                    <li v-else>
                        <router-link to="/register">
                            <font-awesome-icon icon="user" size="2x"/>
                        </router-link>
                    </li>

                </ul>

            </div>
        </nav>
    </header>
</template>

<script>

import { mapGetters } from "vuex";
import firebase from "firebase";

export default {

    data() {
        return {
            carrinho: {
                items: []
            }
        }
    },

    computed: {
        ...mapGetters({
            user: "user"
        }),
        carrinhoQuantidade() {
            let total = 0

            for(let i = 0; i < this.carrinho.items.length; i++) {
                total += this.carrinho.items[i].quantidade
            }

            return total
        }
    },

    methods: {
        abrirMenu() {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('ativo')
        },

        signOut() {
            firebase.auth().signOut().then(() => {
                if(this.$route.name != 'Home') {
                    this.$router.replace({
                        name: "Home"
                    });
                    this.$store.dispatch('zerarCarrinho')

                } else {
                    this.$store.dispatch('zerarCarrinho')
                    
                }
            });
        },

    },

    mounted() {
        this.carrinho = this.$store.state.carrinho
    },

};

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

.menu a {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #000000;
}

.carrinho {
    position: relative;
    margin-left: 20px;
    font-weight: bold;
}

.quantidade-carrinho {
    position: absolute;
    top: -14px;
    right: 0px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}

.nome-usuario {
    color: #000;
    margin-right: 10px;
}

.sair-login {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
}

.pedidos span {
    margin-right: 10px;
    font-weight: bold;
}

.menu ul li {
    list-style: none;
}

.menu ul {
    display: flex;
    justify-content: space-between;
}

@media (max-width: 620px) {

    .ativo {
        display: none;
    }

    .menu {
        position: absolute;
        right: 0px;
        top: 100px;
        background-color: #F3F2F2;
        width: 100%;
    }

    .menu ul {
        display: block;
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
        padding: 15px 36px;
        display: flex;
        justify-content: center;
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
        color: #000;
    }

    .sair-login {
        display: flex;
        justify-content: center;
        padding: 15px 0px;
        margin-left: 0px;
    }

    .sair-login:hover {
        background-color: #ddd;
    }

}

</style>