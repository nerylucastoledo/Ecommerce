<template>
    <header>
        <nav class="container header-principal">
            <router-link to="/">
                <img 
                    id="logo" 
                    src="@/assets/logo-bike.webp" 
                    alt="LucasBiker"
                >
            </router-link>

            <div class="menu-mobile" @click="abrirMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <div class="menu-alt">
                <ul class="menu-meio">
                    <li>
                        <router-link to="/racing">Racing</router-link>
                    </li>

                    <li>
                        <router-link to="/retro">Retrô</router-link>
                    </li>

                    <li>
                        <router-link to="/motorizada">Motorizada</router-link>
                    </li>
                </ul>
            </div>

            <div class="menu ativo">
                <ul v-if="user.loggedIn" @click="abrirMenu">
                    <li>
                        <router-link to="/meus-pedidos" title="Seus Pedidos">
                            <font-awesome-icon icon="truck-moving" size="2x"/>
                        </router-link>
                    </li>

                    <li class="carrinho-header">
                        <router-link to="/carrinho" title="Carrinho">
                            <font-awesome-icon icon="shopping-cart" size="2x"/>
                            <span>{{ carrinhoQuantidade }}</span>
                        </router-link>
                    </li>

                    <li>
                        <span class="sair-login-mobile" @click="signOut" title="Sair">
                            <font-awesome-icon icon="sign-out-alt" size="2x"/>
                        </span>
                    </li>
                </ul>

                <ul v-else>
                    <li @click="abrirMenu">
                        <router-link to="/login">
                            <button class="btn-login">Entrar <font-awesome-icon icon="user" size="3px"/></button>
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
    position: fixed;
    width: 100%;
    background-color: #fff;
    height: 100px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    z-index: 3;
}

.header-principal {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu ul{
    display: flex;
}

.menu ul li {
    margin-left: 20px;
}

.menu ul li a, .menu ul li span{
    color: #222;
    cursor: pointer;
}

.menu ul li a:hover, .menu ul li span:hover {
    color: #FFBA00;
    transition: .3s;
}

.menu-meio li a{
    color: #222;
}

#logo {
    margin-top: 10px;
    width: 80px;
    height: 80px;
}

.menu-meio {
    display: flex;
}

.menu-meio li {
    margin: 0px 20px;
    font-size: 18px;
}

.menu-meio li a {
    font-weight: bold;
    text-transform: uppercase;
}

.menu-meio li a:hover {
    color: #FFBA00;
    transition: .3s;
    border-bottom: 1px solid #FFBA00;
}

.btn-login {
    background-color: #FFBA00;
    border: none;
    height: 100%;
    border-radius: 4px;
    color: #fff;
    padding: 10px 10px;
    font-size: 18px;
    cursor: pointer;
}

.carrinho-header {
    position: relative;
}

.carrinho-header span {
    position: absolute;
    top: -14px;
    right: 3px;
    color: #FFBA00 !important;
}

@media (max-width: 760px) {

    header {
        height: 80px;
    }

    #logo {
        margin-top: 10px;
        height: 60px;
        width: 50px;
    }

    .ativo {
        display: none;
    }

    .menu {
        position: absolute;
        right: 0px;
        top: 120px;
        background-color: #FFBA00;
        width: 100%;
    }

    .menu ul {
        display: flex;
        justify-content: space-around;
    }

    .menu ul li {
        margin-left: 0px;
    }

    .menu ul li a:hover, .menu ul li span:hover {
        color: #fff;
        transition: .3s;
    }

    .menu-mobile {
        display: inline-block;
        cursor: pointer;
    }

    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #FFBA00;
        margin: 6px 0;
    }

    .btn-login {
        border: 2px solid #fff;
    }

    .menu a {
        padding: 15px 0px;
        display: flex;
        justify-content: center;
    }

    .carrinho-header span {
        position: relative;
        top: -14px;
        color: #fff !important;
    }

    .sair-login-mobile {
        display: flex;
        justify-content: center;
        padding: 15px 0px;
        margin-left: 0px;
    }

    .menu-alt {
        display: flex;
        position: absolute;
        top: 80px;
        background-color: #FFBA00;
        width: 100%;
        left: 0;
    }

    .menu-meio {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 10px;
    }

    .menu-meio li a {
        color: #fff;
    }

    .menu-meio li a:hover {
        color: #222;
        border-bottom-color: #222;
    }

}

@media (max-width: 440px) {

    .menu-meio li a {
        font-size: 16px;
    }
}

</style>