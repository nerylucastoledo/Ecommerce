<template>
    <div>
        <div v-if="loading">

            <div>
                <div>
                    <img :src="produto.imagem_produto">
                    <h3>Avaliações</h3>

                    <div v-if="avaliacoes">
                        <div 
                            v-for="(avaliacao, index) in avaliacoes" 
                            :key="avaliacao+index">
                            
                            <span
                                v-for="(estrela, index) in avaliacao.qntd_estrelas" 
                                :key="estrela+index">
                                {{estrelas}}
                            </span>

                            <div>
                                <p>{{avaliacao.nome_avaliador}}</p>
                                <p>{{avaliacao.comentario}}</p>
                            </div>

                        </div>
                    </div>

                    <div v-else>
                        <p>Nenhuma avaliação disponível.</p>
                    </div>

                </div>
            </div>

            <div v-if="produto">

                <div>
                    <p>Nova</p>
                    <h1>{{produto.nome_produto}}</h1>

                    <span
                        v-for="(estrela, index) in qntd_estrelas_do_produto" 
                        :key="estrela+index">
                        {{estrelas}}
                    </span>

                    <span
                        v-for="estrela in estrelas_restantes" 
                        :key="estrela+'estrela'">
                        {{estrela_vazia}}
                    </span>
                </div>

                <div>
                    <h2>R${{produto.valor_produto}}</h2>
                    <p>ou 6x de {{produto.valor_produto / 6 | numeroPreco}}</p>
                    <p>Cor: {{produto.cor_produto}}</p>
                </div>

                <div>
                    <p v-if="produto.quantidade_estoque > 0">
                        Disponível em estoque
                    </p>
                    <p v-else>
                        Sem estoque
                    </p>
                </div>

                <div>
                    <p class="quantidade">
                        Quantidade
                        <span class="qntd-estoque">({{produto.quantidade_estoque}} disponível)</span>
                    </p>
                </div>

                <div>
                    <input type="number" class="input" min="1" :max="produto.quantidade_estoque" v-model="quantidade">
                </div>

               <div>
                    <button class="btn-comprar btn">Comprar agora</button>
                    <button class="btn-carrinho btn" @click="adicionarAoCarrinho()">Adicionar ao carrinho</button>
               </div>

            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'Produto',

    props: ["id"],

    data() {
        return {
            produto: null,
            avaliacoes: null,
            estrelas: "★",
            estrela_vazia: "☆",
            qntd_estrelas_do_produto: 0,
            estrelas_restantes: 0,
            quantidade: 1,
            loading: 0
        }
    },

    methods: {
        getProduto() {
            fetch(`https://resteapicommercelucas.herokuapp.com/produto/?id=${this.id}`)
            .then(req => req.json())
            .then(res => {
                this.produto = res[0]
                this.avaliacoes = res[0].avaliacoes
                this.verificarAQuantidadeDeEstrelas(res[0].avaliacoes, res[0].avaliacoes.length)
                
            })
        },

        verificarAQuantidadeDeEstrelas(avaliacoes, qntd_comentario) {
            var quantidade = 0

            avaliacoes.forEach(element => {
                quantidade += element.qntd_estrelas
            });

            this.qntd_estrelas_do_produto = Math.trunc(quantidade / qntd_comentario)
            this.estrelas_restantes = 5 - this.qntd_estrelas_do_produto

        },

        adicionarAoCarrinho() {
            if (isNaN(this.quantidade) || this.quantidade < 1) {
                this.quantidade = 1
            }
            const item = {
                produto: this.produto,
                quantidade: parseInt(this.quantidade)
            }
            this.$store.commit('ADICIONAR_AO_CARRINHO', item)
        }

    },

    mounted() {
        setTimeout(() => {
            this.loading = 1
        }, 300)
        this.getProduto()
    }
}
</script>

<style scoped>

</style>