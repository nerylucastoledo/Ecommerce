<template>
    <section class="carrinho">

        <h1 class="titulo-principal">CARRINHO</h1>

        <div class="container" v-if="carrinho.items.length > 0">
            <div class="item-carrinho" v-for="(produto, index) in carrinho.items" :key="produto+index">
                <router-link :to="{ name: 'produto', params: { id: produto.produto.id_produto }}">
                    <img class="carrinho-img" :src="produto.produto.imagem_produto" alt="Imagem produto">
                </router-link>

                <div class="carrinho-info-produto">
                    <h2 class="nome-produto">{{produto.produto.nome_produto}}</h2>
                    <p>Quantidade: <span class="quantidade-produto">{{produto.quantidade}}</span></p>
                </div>
                <div class="preco-unitario">
                    <h2>Preço unitário</h2>
                    <p>{{produto.produto.valor_produto | numeroPreco}}</p>
                </div>

                <div class="preco-total">
                    <h2>Preço total</h2>
                    <p>{{produto.produto.valor_produto * produto.quantidade | numeroPreco}}</p>
                </div>

                <p class="apagar-do-carrinho" @click="apagarItemCarrinho(produto)">X</p>

            </div>

            <div>
                <CalcularFrete :valorProdutos="valorProdutosTotal"></CalcularFrete>
            </div>
        </div>
        <div v-else>
            <p class="nenhum-item">Nenhum item no carrinho. :(</p>
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

</style>