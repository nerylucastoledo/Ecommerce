<template>
    <section class="atualizar">
        <div class="sidebar">
            <BarraLateral/>
        </div>
        
        <div v-if="todos_produtos" class="atualizar-items container">
            <div v-for="produto in todos_produtos" :key="produto.id_produto">
                <div class="item" @click='atualizarItem(produto)'>
                    <img :src="produto.imagem_produto" :alt="produto.nome_produto + 'imagem'">
                    <p>{{produto.nome_produto}}</p>
                </div>
            </div>
        </div>

        <div class="formulario">
            <div>
                <p @click="fecharModalFormulario">X</p>
                <FormItem>
                    <div>
                        <button class="btn btn-login" type="submit" @click.prevent="atualizarDados">Atualizar Item</button>
                    </div>
                </FormItem>
            </div>
        </div>

    </section>
</template>

<script>

import BarraLateral from '../components/BarraLateral.vue'
import FormItem from '../components/FormItem.vue'

export default {

    components: {
        BarraLateral,
        FormItem
    },

    data() {
        return {
            todos_produtos: null,
        }
    },

    methods: {
        pegarTodasBicicletas() {
            fetch('https://restapiecomerce.herokuapp.com/produto/')
            .then(req => req.json())
            .then(res => {
                this.todos_produtos = res
            })
        },

        atualizarItem(item) {
            document.querySelector('.formulario').style.display = 'block'
            this.$root.$emit('FormItem', item)
        },

        atualizarDados() {
            this.$root.$emit('atualizarDados');
        },

        fecharModalFormulario() {
            document.querySelector('.formulario').style.display = 'none'
        }
    },

    created() {
        this.pegarTodasBicicletas()
    }
    
}
</script>

<style scoped>

.atualizar {
    display: grid;
    grid-template-columns: 1fr 6fr;
}

.atualizar-items {
    margin: 100px 0 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.atualizar-items > div {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}

.atualizar-items img {
    max-width: 350px;
    height: 250px;
}

.item {
    cursor: pointer;
}

.formulario-item {
    max-width: 400px;
}

.formulario {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);;
    padding: 20px 10px 10px;
    border-radius: 4px;
    z-index: 2;
}

.formulario > div {
    position: relative;
    top: 15%;
    padding: 20px 10px 5px;
    max-width: 500px;
    margin: 0px auto;
    background-color: #fff;
}

.formulario > div p {
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 18px;
    color: #fff;
    background-color: red;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
}

</style>