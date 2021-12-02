<template>
    <section class="carrinho">

        <h1 class="titulo-pages">CARRINHO</h1>

        <div class="container" v-if="carrinho.items.length > 0">
            <div 
                class="carrinho-item" 
                v-for="({produto}, index) in carrinho.items" 
                :key="produto+index"
            >
                <router-link :to="{ name: 'produto', params: { id: produto.id_produto }}">
                    <img :src="produto.imagem_produto" alt="Imagem produto">
                </router-link>
                <div>
                    <h2 class="nome-produto">{{produto.nome_produto}}</h2>
                    <p class="quantidade">
                        Quantidade: 
                        <strong>{{carrinho.items[index].quantidade}}</strong>
                    </p>
                </div>
                
                <div>
                    <h2>Preço unitário</h2>

                    <p class="valor-produto">{{produto.valor_produto | numeroPreco}}</p>
                </div>

                <div>
                    <h2>Preço total</h2>

                    <p class="preco-total preco-total-carrinho">{{produto.valor_produto * carrinho.items[index].quantidade | numeroPreco}}</p>
                </div>

                <p class="apagar-do-carrinho" @click="apagarItemCarrinho(produto)">X</p>
            </div>

            <div>
                <CalcularFrete :valorProdutos="valorProdutosTotal"></CalcularFrete>
            </div>
        </div>

        <div v-else>
            <p class="nenhum-item">Carrinho vazio! :(</p>
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
            this.carrinho.items = this.carrinho.items.filter(i => i.produto.id_produto !== item.id_produto)
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
        document.title =  'Carrinho - LucasBiker'
    }

}
</script>

<style>

.carrinho {
    margin-top: 160px;
}

.carrinho-item {
    display: grid;
    grid-gap: 20px;
    padding: 10px 0px;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: relative;
    margin-bottom: 60px;
}

.carrinho-item img {
    max-width: 100%;
    max-height: 150px;
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

.quantidade, .valor-produto, .preco-total-carrinho {
    position: absolute;
    bottom: 20px;
    font-size: 18px;
    font-weight: bold;
}

.valor-produto, .preco-total {
    font-size: 18px;
    margin-left: 20px;
    color: #222;
}

.nenhum-item {
    text-align: center;
    font-size: 24px;
    color: #FFBA00;
}

@media (max-width: 840px) {
    .carrinho-item {
        grid-template-columns: 1fr 1fr;
    }

    .carrinho-item img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    .quantidade, .valor-produto, .preco-total {
        position: relative;
        bottom: 0px;
    }

    .quantidade {
        margin-top: 20px;
    }

    .valor-produto, .preco-total {
        margin-top: 20px;
        font-size: 18px;
    }

}

@media (max-width: 530px) {
    .carrinho-item {
        display: block;
        padding-bottom: 25px;
        font-size: 18px;
    }

    .carrinho-item div:nth-child(2) h2 {
        font-size: 34px;
    }

    .carrinho-item div:nth-child(3) h2, .carrinho-item div:nth-child(4) h2 {
        font-size: 18px;
    }

    .carrinho-item  img {
        margin-bottom: 20px;
    }

    .carrinho-item div:nth-child(3), .carrinho-item div:nth-child(4) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px;
    }

    .apagar-do-carrinho {
        position: absolute;
        right: 5px;
        top: 10px;
    }

    .valor-produto, .preco-total {
        bottom: 10px;
    }

    .quantidade{
        font-size: 24px;
    }
}

@media (max-width: 440px) {
    .quantidade {
        font-size: 16px;
    }
    
    .carrinho-item div:nth-child(3) h2, .carrinho-item div:nth-child(4) h2{
        font-size: 16px;
    }

    .valor-produto {
        font-size: 16px;
    }
}

</style>