<template>
    <section>
        <div class="container">

            <slot></slot>

            <div class="item-bicicleta" v-if="listaProdutos">
                <div 
                    v-for="(bicicleta, index) in listaProdutos" 
                    :key="bicicleta+index"
                >
                    <div class="item">
                        <div class="zoom">
                            <img id="imagem-bicicleta" :src="bicicleta.imagem_produto" alt="Bike">

                            <span class="desconto">- {{calcularDesconto(bicicleta.preco_antigo, bicicleta.valor_produto)}}%</span>
                        </div>

                        <div class="info-item">
                            <h2 class="nome-bicicleta">{{bicicleta.nome_produto}}</h2>

                            <p class="preco-antigo-bicicleta">{{bicicleta.preco_antigo | numeroPreco}}</p>

                            <p class="valor-bicicleta">{{bicicleta.valor_produto | numeroPreco}}</p>

                            <p class="parcela-bicicleta">ou 12x de {{bicicleta.valor_produto / 12 | numeroPreco}}</p>

                            <router-link :to="{name: 'produto', params: {id: bicicleta.id_produto}}">
                                <button class="comprar-bicicleta">Comprar</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { api } from '../service'

export default {

    props: [
        "lista"
    ],

    data() {
        return {
            listaProdutos: null
        }
    },

    methods: {
        getProduto() {
            api.get(`produto/?categoria=${this.lista}`)
            .then(res => {
                this.listaProdutos = res.data
            })
        },
        
        calcularDesconto(valorAntigo, valorProduto) {
            return ((valorAntigo - valorProduto) * 100 / valorAntigo).toFixed(0)
        }
    },

    created() {
        this.getProduto()
    }
}
</script>

<style>

</style>