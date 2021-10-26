<template>
    <section class="carrinho">

        <h1 class="titulo-principal">CARRINHO</h1>

        <div class="container" v-if="carrinho.items">
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
        },
        apagarItemCarrinho(item) {
            this.carrinho.items = this.carrinho.items.filter(i => i.produto.id_produto !== item.produto.id_produto)
            this.atualizarCarrinho()
        },

    },

    mounted() {
        this.carrinho = this.$store.state.carrinho
        this.carrinho.items.forEach((item) => {
            this.valorProdutosTotal += item.produto.valor_produto * item.quantidade
        })
    }

}
</script>

<style scoped>

.carrinho {
    margin-top: 160px;
}

.titulo-principal {
    text-align: center;
    margin-bottom: 60px;
}

.nome-produto {
    text-align: initial;
}

.item-carrinho {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    padding: 20px 0px;
    position: relative;
    text-align: center;
}

.carrinho-img {
    max-width: 350px;
    height: 200px;
}

.carrinho-info-produto {
    margin-left: 20px;
}

h2 {
    font-size: 30px;
}

.quantidade-produto {
    color: #ada9a9;
}

.carrinho-info-produto p{
    font-size: 18px;
    color: #000;
    margin-top: 20px;
}

.carrinho-info-produto p:nth-child(2){
    margin-top: 125px;
}

.preco-unitario p, .preco-total p {
    color: #747070;
    font-weight: bold;
    font-size: 18px;
    margin-top: 130px;
}

.preco-unitario h2, .preco-total h2 {
    font-size: 24px;
}

.preco-unitario, .preco-total {
    position: relative;
}

.apagar-do-carrinho {
    color: red;
    font-size: 30px;
    position: absolute;
    right: 0px;
    cursor: pointer;
}

</style>