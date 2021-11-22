<template>
    <section class="cadastrar-item">
        <div class="sidebar">
            <BarraLateral/>
        </div>
        
        <div v-if="todos_produtos" class="atualizar-items container">
            <div v-for="produto in todos_produtos" :key="produto.id_produto">
                <div class="item" @click="atualizarBicicleta(produto)">
                    <img :src="produto.imagem_produto" :alt="produto.nome_produto + 'imagem'">
                    <p>{{produto.nome_produto}}</p>
                </div>
            </div>
        </div>

        <div class="modal-form formulario">
            <FormItem/>
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
            alterado: null
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
    },

    created() {
        this.pegarTodasBicicletas()
    }
    
}
</script>

<style scoped>

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

.modal-form {
    display: none;
    z-index: 1;
}

</style>