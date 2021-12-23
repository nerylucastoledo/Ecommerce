<template>
    <section>
        <div class="container">
            <h1 class="titulo">LANÇAMENTOS</h1>

            <div class="item-bicicleta" v-if="lista_lancamentos">
                <div 
                    v-for="(bicicleta, index) in lista_lancamentos"
                    :key="bicicleta+index"
                >
                    <div class="item">
                        <router-link :to="{name: 'produto', params: {id: bicicleta.id_produto}}">
                            <div class="zoom">
                                <img id="imagem-bicicleta" :src="bicicleta.imagem_produto" alt="Bike">

                                <span class="desconto">
                                    - {{calcularDesconto(bicicleta.preco_antigo, bicicleta.valor_produto)}}%
                                </span>
                            </div>

                            <div class="info-item">
                                <h2 class="nome-bicicleta">{{bicicleta.nome_produto}}</h2>

                                <p class="preco-antigo-bicicleta">{{bicicleta.preco_antigo | numeroPreco}}</p>

                                <p class="valor-bicicleta">{{bicicleta.valor_produto | numeroPreco}}</p>

                                <p class="parcela-bicicleta">ou 12x de {{bicicleta.valor_produto / 12 | numeroPreco}}</p>

                                <button class="comprar-bicicleta">Comprar</button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
    data() {
        return {
            lista_lancamentos: null
        }
    },

    methods: {
        calcularDesconto(valorAntigo, valorProduto) {
            return ((valorAntigo - valorProduto) * 100 / valorAntigo).toFixed(0)
        }
    },

    created() {
        this.lista_lancamentos = this.$store.state.listaLancamentos
    }
}
</script>