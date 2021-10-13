<template>
    <section class="lucasbiker-home">
        <div class="container">

            <h1 class="titulo-principal">RACING</h1>

            <img id="img-categoria-home" src="../assets/racing.png" alt="Racing">

            <div class="lucasbiker-home-items" v-if="listaRacing">
                <div v-for="(bicicleta, index) in listaRacing" :key="bicicleta+index">
                <img src="@/assets/bike.png" alt="Bike">
                <h2 class="item-nome">{{bicicleta.nome_produto}}</h2>
                <p class="item-valor-antigo">R$ {{bicicleta.preco_antigo}}</p>
                <p class="item-valor">R$ {{bicicleta.valor_produto}}</p>
                <p class="item-parcelado">ou 6x de R$453,33</p>
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
            listaRacing: null
        }
    },

    methods: {
        getProduto() {
            fetch('http://127.0.0.1:8000/produto/')
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