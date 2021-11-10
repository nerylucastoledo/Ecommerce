<template>
    <section>
        <div class="container">

            <slot></slot>
            
            <div class="item-bicicleta" v-if="listaRacing">
                <div 
                    v-for="(bicicleta, index) in listaRacing" 
                    :key="bicicleta+index"
                >
                    <div class="item">
                        <div class="zoom">
                            <img id="imagem-bicicleta" :src="bicicleta.imagem_produto" alt="Bike">

                            <span class="desconto">- {{((bicicleta.preco_antigo - bicicleta.valor_produto) *100 / bicicleta.preco_antigo).toFixed(0)}}%</span>
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
export default {

    data() {
        return {
            listaRacing: null
        }
    },

    methods: {
        getProduto() {
            fetch('https://restapiecomerce.herokuapp.com/produto/?categoria=Racing')
            .then(req => req.json())
            .then(res => {
                this.listaRacing = res
            })
        }
    },

    created() {
        this.getProduto()
    }
}
</script>

<style>

</style>