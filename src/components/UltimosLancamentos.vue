<template>
    <section>
        <div class="container">

            <h1 class="titulo-principal">ÚLTIMOS LANÇAMENTOS</h1>

            <div class="lucasbiker-home-items" v-if="listaLancamentos">
                <div v-for="(bicicleta, index) in listaLancamentos" :key="bicicleta+index">
                    <img :src="bicicleta.imagem_produto" alt="Bike">
                    <h2 class="item-nome">{{bicicleta.nome_produto}}</h2>
                    <p class="item-valor-antigo">R$ {{bicicleta.preco_antigo}}</p>
                    <p class="item-valor">{{bicicleta.valor_produto | numeroPreco}}</p>
                    <p class="item-parcelado">ou 6x de {{bicicleta.valor_produto / 6 | numeroPreco}}</p>
                    <router-link class="btn-comprar" :to="{name: 'produto', params: {id: bicicleta.id_produto}}">
                        <button class="btn-comprar">Comprar</button>
                    </router-link>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script>
export default {

    data() {
        return {
            listaLancamentos: []
        }
    },

    methods: {
        getProdutoRacing() {
            fetch('https://resteapicommercelucas.herokuapp.com/produto/?categoria=Racing')
            .then(req => req.json())
            .then(res => {
                this.listaLancamentos.push(res.reverse()[0])
            })
        },
        getProdutoRetro() {
            fetch('https://resteapicommercelucas.herokuapp.com/produto/?categoria=Retro')
            .then(req => req.json())
            .then(res => {
                this.listaLancamentos.push(res.reverse()[0])
            })
        },
        getProdutoMotorizada() {
            fetch('https://resteapicommercelucas.herokuapp.com/produto/?categoria=Motorizada')
            .then(req => req.json())
            .then(res => {
                this.listaLancamentos.push(res.reverse()[0])
            })
        },
    },

    created() {
        this.getProdutoRacing()
        this.getProdutoRetro()
        this.getProdutoMotorizada()
    }
}
</script>

<style>

</style>