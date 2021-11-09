<template>
    <section class="meus-pedidos">

        <h1 class="titulo-pages">Meus Pedidos</h1>

        <div class="container" v-if="pedidos">
            
            <div class="produto-item" v-for="(produto, index) in produtos" :key="produto+index">
                <div class="produto-info">
                    <router-link :to="{ name: 'produto', params: { id: produto.id_produto }}">
                        <img :src="produto.imagem_produto" alt="Imagem produto">
                    </router-link>
                    <div>
                        <h2>{{produto.nome_produto}}</h2>
                        <p>Valor pago: <strong>{{pedidos[index].valor_pago | numeroPreco}}</strong></p>
                        
                    </div>
                </div>

                <div class="produto-entrega">
                    <p class="dia-pra-chegar">Chegará até o dia 14/09</p>
                    <p class="status-pedido">
                        Status:
                        <span class="pedido-realizado" v-if="pedidoFeito"><strong>Pedido realizado</strong></span>
                        <span class="processamento" v-else-if="processamento"><strong>Em processamento</strong></span>
                        <span class="entregue" v-else-if="entregue"><strong>Entregue</strong></span>
                        <span class="cancelado" v-else><strong>Cancelado</strong></span>
                    </p>
                </div>
            </div>

        </div>
        <div v-else>
            <p class="nenhum-item">Carrinho vazio! :(</p>
        </div>

    </section>
</template>

<script>

export default {

    data() {
        return {
            pedidos: null,
            produtos: [],
            pedidoFeito: true,
            processamento: false,
            entregue: false,
            cancelado: false
        }
    },
    
    methods: {
        produtosComprados() {
            fetch(`https://restapiecomerce.herokuapp.com/venda/?cpf=111.965.416-55`)
            .then(req => req.json())
            .then(res => {
                res.forEach(item => {
                    this.pegarProdutoComprado(item.id_produto_comprado)
                });
                this.pedidos = res
            })
        },

        pegarProdutoComprado(id) {
            fetch(`https://restapiecomerce.herokuapp.com/produto/${id}`)
            .then(req => req.json())
            .then(res => {
                this.produtos.push(res)
            })
        }
    },

    created() {
        this.produtosComprados()
    }

}
</script>

<style scoped>

.meus-pedidos {
    padding-top: 160px;
    background-color: #fff;
}

.produto-item {
    background-color: rgb(241, 239, 239);
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.produto-item:last-child {
    margin-bottom: 0px;
}

.produto-item img {
    width: 250px;
    height: 150px;
    border-radius: 4px;
    object-fit: cover;
}

.produto-item .produto-info {
    display: flex;
}

.produto-info h2, p{
    margin-left: 40px;
}

.produto-info p {
    position: absolute;
    bottom: 40px;
    font-size: 18px;
}

.produto-entrega {
    text-align: center;
}

.dia-pra-chegar {
    color: rgb(145, 144, 142);
    font-weight: bold;
    font-size: 24px;
}

.status-pedido {
    margin-top: 20px;
    font-size: 18px;
}

.pedido-realizado {
    color: rgb(103, 151, 170)
}

.entregue {
    color: rgb(166, 218, 125)
}

.processamento {
    color: rgb(190, 178, 3);
}

.cancelado {
    color: coral;
}

</style>