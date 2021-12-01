<template>
    <section class="atualizar">
        <div class="sidebar">
            <BarraLateral/>
        </div>
        
        <div v-if="todos_produtos" class="atualizar-items container">
            <div v-for="produto in todos_produtos" :key="produto.id_produto">
                <div class="item" @click='atualizarDados(produto)'>
                    <img :src="produto.imagem_produto" :alt="produto.nome_produto + 'imagem'">
                    <p>{{produto.nome_produto}}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import BarraLateral from '../components/BarraLateral.vue'

export default {

    components: {
        BarraLateral,
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

</style>