<template>
    <section class="meus-pedidos">
        <h1 class="titulo-pages">Meus Pedidos</h1>

        <div v-if="loading">
            <Loading/>
        </div>

        <div v-else>
            <div class="container" v-if="pedidos.length">   
                <div 
                    class="produto-item"
                    v-for="(pedido, index) in pedidos"
                    :key="pedido.id_produto_comprado + index"
                >
                    <div class="produto-info">
                        <h2>{{pedido.nome_produto}}</h2>
                        
                        <div>
                            <p>
                                Valor pago: 
                                <strong>{{pedido.valor_pago | numeroPreco}}</strong>
                            </p>
                        </div>
                    </div>

                    <div class="produto-entrega">

                        <p class="dia-pra-chegar" v-if="typeof dataQueChegara(pedido.data_venda) === 'string'">
                            Previsão:
                            {{dataQueChegara(pedido.data_venda)}}
                        </p>

                        <p class="status-pedido">
                            Status:
                            <span :class="pedido.status_venda.toLowerCase()">
                                <strong>{{pedido.status_venda}}</strong>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div v-else>
                <p class="nenhum-item">Carrinho vazio! :(</p>
            </div>
        </div>
        
    </section>
</template>

<script>

import Loading from '../components/Loading.vue'
import { api } from '../service'

export default {

    data() {
        return {
            loading: true,
            pedidos: [],
            pedidoFeito: true,
            processamento: false,
            entregue: false,
            cancelado: false
        }
    },

    components: {
        Loading
    },
    
    methods: {
        async pegarComprasDoUsuario() {
            const emailUsuario = this.$store.state.user.data.email
            
            await api.get(`venda/?email=${emailUsuario}`)
            .then(res => {
                res.data.forEach(element => this.pedidos.push(element));
            })
            this.loading = false
        },

        dataQueChegara(dado) {
            console.log(dado)
            var dia = dado.slice(8, 10)
            var mes = dado.slice(5, 7)
            var ano = dado.slice(0, 4)

            var diaQueChegara = parseInt(dia) + 7

            if(parseInt(diaQueChegara) > 31) {
                mes = parseInt(mes) + 1
                diaQueChegara = diaQueChegara - 31
            }

            if(mes >= 13) {
                mes = 1
                ano = parseInt(ano) + 1
            }
            
            var dataFormatada = new Date(ano, mes - 1, diaQueChegara.toString());

            if(new Date() > dataFormatada) {
                return 'Pedido atrasado'
            }

            return diaQueChegara.toString() + "-" + mes + "-" + ano
        }
    },

    mounted() {
        this.pegarComprasDoUsuario()
    },

    created() {
        document.title =  'Meus pedidos'
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
    flex-wrap: wrap;
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

.entregue {
    color: rgb(166, 218, 125)
}

.confirmado {
    color: rgb(56, 207, 187)
}

.processamento {
    color: rgb(103, 151, 170)
}

.cancelado {
    color: coral;
}

@media (max-width: 880px) {

    .produto-item {
        display: block;
    }

    .produto-item .produto-info {
        display: block;
    }

    .produto-item img {
        width: 100%;
        height: 200px;
        display: block;
        margin: 0 auto;
        object-fit: contain;
    }

    .produto-info h2 {
        margin-left: 0px;
        text-align: center;
        margin: 20px 0px;
    }

    .titulo-pages {
        font-size: 32px;
    }

    p {
        margin-left: 0px;
    }

    .produto-info p {
        position: inherit;
        text-align: center;
        margin: 30px 0px;
    }
}

</style>