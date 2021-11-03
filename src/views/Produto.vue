<template>
    <div class="conteudo-produto">
        <div v-if="loading" class="container produto">

            <div>
                <div>
                    <img :src="produto.imagem_produto">
                </div>
            </div>

            <div v-if="produto" class="info-produto">

                <div>
                    <p class="uso-produto">Nova</p>
                    <h1 class="nome-produto">{{produto.nome_produto}}</h1>

                    <span
                        v-for="(estrela, index) in qntd_estrelas_do_produto" 
                        :key="estrela+index"
                        class="estrelas-produto">
                        {{estrelas}}
                    </span>

                    <span
                        v-for="estrela in estrelas_restantes" 
                        :key="estrela+'estrela'"
                        class="estrelas-produto">
                        {{estrela_vazia}}
                    </span>
                </div>

                <div>
                    <h2 class="valor-bicicleta">{{produto.valor_produto | numeroPreco}}</h2>
                    <p class="parcela-bicicleta">ou 12x de {{produto.valor_produto / 12 | numeroPreco}}</p>
                    <p class="cor-produto">Cor: {{produto.cor_produto}}</p>
                </div>

                <div>
                    <p v-if="produto.quantidade_estoque > 0" class="estoque">
                        Disponível em estoque
                    </p>
                    <p v-else class="estoque">
                        Sem estoque
                    </p>
                </div>

                <div>
                    <p class="estoque">
                        Quantidade
                        <span class="qntd-estoque">({{produto.quantidade_estoque}} disponível)</span>
                    </p>
                </div>

                <div class="input-quantidade">
                    <label for="qnt-comprar">Comprar: </label>
                    <input type="number" class="input" id="qnt-comprar" name="qnt-comprar" min="1" :max="produto.quantidade_estoque" v-model="quantidade">
                </div>

               <div>
                    <button class="comprar-bicicleta">Comprar agora</button>
                    <button class="adicionar-carrinho-bicicleta comprar-bicicleta" @click="adicionarAoCarrinho()">Adicionar ao carrinho</button>
               </div>

            </div>

            <div v-if="avaliacoes" class="avaliacoes">
                <h1 class="titulo-avaliacao">Avaliações</h1>
                <div 
                    v-for="(avaliacao, index) in avaliacoes" 
                    :key="avaliacao+index">

                    <span 
                        v-for="estrela, index in avaliacao.qntd_estrelas" 
                        :key="index"
                        class="qntd-estrelas">
                        {{estrelas}}
                    </span>
                

                    <div>
                        <h2 class="nome-avaliador">{{avaliacao.nome_avaliador}}</h2>
                        <p class="comentario-avaliador">{{avaliacao.comentario}}</p>
                    </div>

                </div>
            </div>

            <div v-else>
                <p>Nenhuma avaliação disponível.</p>
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

.conteudo-produto {
    background-color: rgba(0,0,0,.1);
    padding-top: 100px;
    padding-bottom: 60px;
    margin-bottom: -60px;
}

.produto {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #fff;
    padding-top: 20px;
}

.produto > div:nth-child(2) {
    padding: 10px 30px;
    border: 1px solid rgba(0,0,0,.1);
    max-height: 550px;
}

.produto img {
    display: block;
    width: 95%;
    height: 500px;
    object-fit: cover;
    border-radius: 4px;
}

.avaliacoes {
    padding-bottom: 20px;
}

.avaliacoes > div {
    box-shadow: 0 2px rgba(30, 60, 90, 0.1);
    border-radius: 4px;
    padding: 5px;
    margin-bottom: 30px;
}

.qntd-estrelas {
    color: #FFBA00;
    float: right;
    font-size: 18px;
    margin-right: 5px;
}

.titulo-avaliacao {
    text-align: center;
    margin: 40px 0px;
    color: #FFBA00;
}

.comentario-avaliador {
    margin-top: 10px;
    max-width: 90%;
}

.uso-produto {
    color: #908f8f;
    margin-bottom: 10px;
}

.nome-produto {
    font-weight: bold;
    margin-bottom: 10px;
}

.estrelas-produto {
    font-weight: bold;
    font-size: 24px;
    color: #FFBA00;
}

.valor-bicicleta {
    margin-top: 20px;
    margin-bottom: 10px;
}

.cor-produto {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 18px;
}

.estoque {
    font-weight: bold;
    margin-bottom: 5px;
}

.qntd-estoque {
    font-weight: bold;
    font-size: 18px;
    color: #908f8f;
}

.input-quantidade {
    font-size: 18px;
}

.input-quantidade input{
    margin: 20px 0;
    border: 1px solid #FFBA00;
    text-align: center;
    padding: 5px;
    font-weight: bold;
    font-size: 18px;
}

.comprar-bicicleta {
    width: 100%;
    padding: 15px 0;
}

.comprar-bicicleta:hover {
    transform: none;
}

.adicionar-carrinho-bicicleta {
    background-color: #e7bb42;
}

@media (max-width: 1200px) {
    .produto {
        display: flex;
        flex-direction: column;
    }
    
    .produto img {
        width: 100%;
        object-fit: cover;
    }

    .info-produto {
        margin-top: 60px;
    }

    .comprar-bicicleta {
        display: block;
        margin-right: auto;
        margin-left: auto;
        max-width: 80%;
    }
}

</style>