<template>
    <section class="carrinho">

        <h1 class="titulo-carrinho">CARRINHO</h1>

        <div class="container" v-if="carrinho.items.length > 0">
            <div class="carrinho-item" v-for="(produto, index) in carrinho.items" :key="produto+index">
                <router-link :to="{ name: 'produto', params: { id: produto.produto.id_produto }}">
                    <img :src="produto.produto.imagem_produto" alt="Imagem produto">
                </router-link>

                <div>
                    <h2 class="nome-produto">{{produto.produto.nome_produto}}</h2>
                    <p class="quantidade">Quantidade: <strong>{{produto.quantidade}}</strong></p>
                </div>
                <div>
                    <h2>Preço unitário</h2>
                    <p class="valor-produto">{{produto.produto.valor_produto | numeroPreco}}</p>
                </div>

                <div>
                    <h2>Preço total</h2>
                    <p class="preco-total">{{produto.produto.valor_produto * produto.quantidade | numeroPreco}}</p>
                </div>

                <p class="apagar-do-carrinho" @click="apagarItemCarrinho(produto)">X</p>

            </div>

            <div>
                <CalcularFrete :valorProdutos="valorProdutosTotal"></CalcularFrete>
            </div>
        </div>
        <div v-else>
            <p>Nenhum item no carrinho. :(</p>
        </div>
    </section>
</template>

<script>

import CalcularFrete from '../components/CalcularFrete'

export default {

    components: {
        CalcularFrete
    },

    data() {
        return {
            valorProdutosTotal: 0,
            carrinho: {
                items: []
            }
        }
    },

    methods: {

        atualizarCarrinho() {
            localStorage.setItem('carrinho', JSON.stringify(this.$store.state.carrinho))
            this.atualizarValores()
        },

        apagarItemCarrinho(item) {
            this.carrinho.items = this.carrinho.items.filter(i => i.produto.id_produto !== item.produto.id_produto)
            this.atualizarCarrinho()
        },

        atualizarValores() {
            this.valorProdutosTotal = 0
            this.carrinho.items.forEach((item) => {
                this.valorProdutosTotal += item.produto.valor_produto * item.quantidade
            })
        }

    },

    mounted() {
        this.carrinho = this.$store.state.carrinho
        this.atualizarValores()
    }

}
</script>

<style scoped>

.carrinho {
    margin-top: 160px;
}

.titulo-carrinho {
    font-size: 42px;
    text-align: center;
    margin-bottom: 60px;
}

.carrinho-item {
    display: grid;
    grid-gap: 20px;
    padding: 10px 0px;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    position: relative;
    margin-bottom: 60px;
}

.carrinho-item img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
}

.apagar-do-carrinho {
    position: absolute;
    right: 5px;
    z-index: 2;
    font-size: 34px;
    color: crimson;
    cursor: pointer;
}

.nome-produto {
    color: #FFBA00;
}

.quantidade, .valor-produto, .preco-total {
    position: absolute;
    bottom: 20px;
    font-size: 18px;
}

.valor-produto, .preco-total {
    font-weight: bold;
    font-size: 18px;
    margin-left: 20px;
}

</style>