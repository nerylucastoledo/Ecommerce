<template>
    <section>
        <div class="container">

            <h1 class="titulo">LANÇAMENTOS</h1>

            <div class="item-bicicleta" v-if="listaLancamentos">
                <div 
                    v-for="(bicicleta, index) in listaLancamentos"
                    :key="bicicleta+index"
                >
                    <div class="item">
                        <div class="zoom">
                            <img id="imagem-bicicleta" :src="bicicleta.imagem_produto" alt="Bike">

                            <span class="desconto">- {{((bicicleta.preco_antigo - bicicleta.valor_produto) * 100 / bicicleta.preco_antigo).toFixed(0)}}%</span>
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
            listaLancamentos: [],
        }
    },

    methods: {
        getProdutoRacing() {
            fetch('https://restapiecomerce.herokuapp.com/produto/?categoria=Racing')
            .then(req => req.json())
            .then(res => {
                this.listaLancamentos.push(res.reverse()[0])
            })
        },
        getProdutoRetro() {
            fetch('https://restapiecomerce.herokuapp.com/produto/?categoria=Retro')
            .then(req => req.json())
            .then(res => {
                this.listaLancamentos.push(res.reverse()[0])
            })
        },
        getProdutoMotorizada() {
            fetch('https://restapiecomerce.herokuapp.com/produto/?categoria=Motorizada')
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