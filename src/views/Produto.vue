<template>
    <section class="conteudo-produto">
        <div class="container" v-if="!loading">
            <div class="produto" v-if="produto">
                <div>
                    <div>
                        <img :src="produto.imagem_produto" :alt="produto.nome_produto">
                    </div>
                </div>

                <div class="info-produto">
                    <div>
                        <h1 class="nome-produto">{{produto.nome_produto}}</h1>

                        <p class="uso-produto">Nova</p>

                        <span
                            class="estrelas-produto" 
                            v-for="(estrela, index) in qntd_estrelas_do_produto" 
                            :key="estrela+index" 
                        >
                            {{estrelas_preenchidas}}
                        </span>

                        <span
                            class="estrelas-produto" 
                            v-for="estrela in estrelas_restantes"  
                            :key="estrela+'estrela'" 
                        >
                            {{estrela_vazia}}
                        </span>
                    </div>

                    <div>
                        <h2 class="valor-bicicleta">{{produto.valor_produto | numeroPreco}}</h2>

                        <p class="parcela-bicicleta">ou 12x de {{valorParcelado | numeroPreco}}</p>

                        <p class="cor-produto">Cor: {{produto.cor_produto}}</p>
                    </div>

                    <div>
                        <p class="estoque" v-if="produto.quantidade_estoque > 0">
                            Disponível em estoque
                        </p>
                        
                        <p class="estoque" v-else>
                            Sem estoque
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>Quantidade </strong>

                            <span class="qntd-estoque">({{produto.quantidade_estoque}} disponível)</span>
                        </p>
                    </div>

                    <div class="input-quantidade">
                        <label for="qnt-comprar">Comprar: </label>

                        <input
                            class="input"
                            id="qnt-comprar"
                            type="number"
                            name="qnt-comprar"
                            min="1" 
                            v-model="quantidade"
                            :max="produto.quantidade_estoque"
                        >
                    </div>

                    <div>
                        <button 
                            class="comprar-bicicleta" 
                            @click="comprarProduto"
                        >
                            Comprar agora
                        </button>

                        <button 
                            class="adicionar-carrinho-bicicleta comprar-bicicleta" 
                            @click="adicionarAoCarrinho()"
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>

                <div class="avaliacoes">
                    <h1 class="titulo-avaliacao">Avaliações</h1>

                    <div v-if="avaliacoes.length">
                        <div 
                            v-for="(avaliacao, index) in avaliacoes" 
                            :key="avaliacao+index"
                        >
                            <span 
                                class="qntd-estrelas" 
                                v-for="(estrela, index) in avaliacao.qntd_estrelas" 
                                :key="index"
                            >
                                {{estrelas_preenchidas}}
                            </span>
                        
                            <div>
                                <h2 class="nome-avaliador">{{avaliacao.nome_avaliador}}</h2>
                                <p class="comentario-avaliador">{{avaliacao.comentario}}</p>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <p class="nenhuma-avaliacao">Nenhuma avaliação ainda</p>
                    </div>
                </div>
            </div>

            <div v-else>
                <p>Nenhum produto encontrado!</p>
            </div>

        </div>
    </section>
</template>

<script>

export default {
    name: 'Produto',

    props: ["id"],

    data() {
        return {
            produto: null,
            avaliacoes: null,
            estrelas_preenchidas: "★",
            estrela_vazia: "☆",
            qntd_estrelas_do_produto: 0,
            estrelas_restantes: 0,
            quantidade: 1,
            loading: 1,
            valor_final: 0
        }
    },

    computed: {
        valorParcelado() {
            return this.produto.valor_produto / 12
        }
    },

    methods: {
        getProduto() {
            fetch(`https://restapiecomerce.herokuapp.com/produto/?id=${this.id}`)
            .then(req => req.json())
            .then(res => {
                this.produto = res[0]
                this.valor_final = res[0].valor_produto
                this.avaliacoes = res[0].avaliacoes
                if(res[0].avaliacoes.length) {
                    this.verificarAQuantidadeDeEstrelas(res[0].avaliacoes, res[0].avaliacoes.length)
                }

                document.title = `${res[0].nome_produto} - LucasBiker`
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
        },

        comprarProduto() {
            const produtoComprar = {
                items: [{
                    produto: this.produto,
                    quantidade: 1
                }],
                valor_final: this.valor_final
            }

            localStorage.setItem('comprar', JSON.stringify(produtoComprar))

            this.$router.push({name: 'concluirpedido'})
        }

    },

    mounted() {
        setTimeout(() => {
            this.loading = 0
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
    padding: 20px 20px 0;
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

.nenhuma-avaliacao {
    text-align: center;
}

.comentario-avaliador {
    margin-top: 10px;
    max-width: 90%;
    margin-bottom: 30px;
}

.comentario-avaliador::after {
    content: "";
    display: block;
    box-shadow: 0 2px rgb(30 60 90 / 10%);
    width: 100%;
    height: 1px;
    margin-top: 10px;
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

    .produto > div:nth-child(2) {
        max-height: 100%;
    }
}

@media (max-width: 760px) {
    .produto img {
        width: 100%;
        object-fit: cover;
        height: 250px;
    }
}

@media (max-width: 440px) {
    .produto img {
        width: 100%;
        object-fit: cover;
        height: 200px;
    }

    .comprar-bicicleta {
        font-size: 14px;
    }

    .cor-produto {
        font-size: 16px;
    }

    .qntd-estoque {
        font-size: 16px;
    }

    .input-quantidade input {
        padding: 0px;
    }
}

</style>