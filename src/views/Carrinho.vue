<template>
    <section class="carrinho">
        <h1 class="titulo-principal">CARRINHO</h1>
        <div v-if="produtos" class="container">
            <div v-for="(produto, index) in produtos" :key="produto+index" class="item-carrinho">

                <router-link :to="{ name: 'produto', params: { id: produto.id_produto }}">
                    <img class="carrinho-img" :src="produto.imagem_produto" alt="Imagem produto">
                </router-link>

                    <div class="carrinho-info-produto">
                        <h2 class="nome-produto">{{produto.nome_produto}}</h2>
                        <p>Quantidade: <span class="quantidade-produto">{{quantidade}}</span></p>
                        <p>
                            <span v-if="quantidade < produto.quantidade_estoque" class="aumentar-quantidade" @click="quantidade++">+</span>
                            <span class="diminuir-quantidade" @click="quantidade--">-</span>
                        </p>
                    </div>

                <div class="preco-unitario">
                    <h2>Preço unitário</h2>
                    <p>{{produto.valor_produto | numeroPreco}}</p>
                </div>

                <div class="preco-total">
                    <h2>Preço total</h2>
                    <p>{{produto.valor_produto * quantidade | numeroPreco}}</p>
                </div>

                <p class="apagar-do-carrinho" @click="apagarProdutoCarrinho(produto.id_produto)">X</p>

            </div>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            produtos: [],
            quantidade: 1
        }
    },

    methods: {
        buscarProdutos() {
            var produtos = this.$store.state.idProdutosCarrinho

            produtos.forEach(id => {
                fetch(`https://resteapicommercelucas.herokuapp.com/produto/${id}`)
                .then(req => req.json())
                .then(res => {
                    this.produtos.push(res)
                })
            });

        },

        apagarProdutoCarrinho(idProduto) {
            this.$store.dispatch('decrementarCarrinho', idProduto)
            this.buscarProdutos()
        }
    },

    created() {
        this.buscarProdutos()
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
    margin-top: 80px;
}

.aumentar-quantidade, .diminuir-quantidade {
    background-color: #CC2131;
    font-size: 18px;
    padding: 5px 10px;
    margin-right: 20px;
    cursor: pointer;
    color: #fff;
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