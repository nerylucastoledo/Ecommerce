<template>
    <div class="produto">
        <div class="conteudo-produto">

            <div class="avaliacoes">
                <div>

                    <img :src="imagem" alt="Moto Motorizada">
                    <h3 class="titulo-avaliacoes">Avaliações</h3>

                    <div v-if="avaliacoes">
                        <div 
                            class="avaliacao" 
                            v-for="(avaliacao, index) in avaliacoes" 
                            :key="avaliacao+index">
                            
                            <span
                                class="qntd-estrelas-comentario"
                                v-for="(estrela, index) in avaliacao.qntd_estrelas" 
                                :key="estrela+index">
                                {{estrelas}}
                            </span>

                            <div class="comentario">
                                <p class="nome-avaliador">{{avaliacao.nome_avaliador}}</p>
                                <p class="conteudo-comentario">{{avaliacao.comentario}}</p>
                            </div>

                        </div>
                    </div>

                    <div v-else>
                        <p>Nenhuma avaliação disponível.</p>
                    </div>

                </div>
            </div>

            <div class="info-produto" v-if="produto">

                <p class="categoria-e-preco">Nova</p>
                <h1 class="nome-produto">{{produto.nome_produto}}</h1>

                <span
                    class="qntd-estrelas"
                    v-for="(estrela, index) in qntd_estrelas_do_produto" 
                    :key="estrela+index">
                    {{estrelas}}
                </span>

                <span
                    class="qntd-estrelas"
                    v-for="estrela in estrelas_restantes" 
                    :key="estrela+'estrela'">
                    {{estrela_vazia}}
                </span>

                <h2 class="valor-produto">R${{produto.valor_produto}}</h2>
                <p class="categoria-e-preco">ou 6x de {{produto.valor_produto / 6 | numeroPreco}}</p>
                <p class="cor-produto">Cor: {{produto.cor_produto}}</p>

                <p class="estoque" v-if="quantidade_no_estoque > 0">
                    Disponível em estoque
                </p>
                <p class="estoque" v-else>
                    Sem estoque
                </p>

                <p class="quantidade">
                    Quantidade
                    <span class="qntd-estoque">({{quantidade_no_estoque}} disponível)</span>
                </p>

                <div>
                    <input type="number" class="input" min="1" :max="quantidade_no_estoque" v-model="quantidade">
                </div>

                <button class="btn-comprar btn">Comprar agora</button>
                <button class="btn-carrinho btn" @click="adicionarAoCarrinho()">Adicionar ao carrinho</button>

            </div>

        </div>
    </div>
</template>

<script>

import { toast } from 'bulma-toast'

export default {
    name: 'Produto',

    props: ["id"],

    data() {
        return {
            produto: null,
            quantidade_no_estoque: 0,
            avaliacoes: null,
            imagem: null,
            estrelas: "★",
            estrela_vazia: "☆",
            qntd_estrelas_do_produto: 0,
            estrelas_restantes: 0,
            quantidade: 1
        }
    },

    methods: {
        getProduto() {
            fetch(`https://resteapicommercelucas.herokuapp.com/produto/?id=${this.id}`)
            .then(req => req.json())
            .then(res => {
                this.produto = res[0]
                this.quantidade_no_estoque = res[0].quantidade_estoque
                this.avaliacoes = res[0].avaliacoes
                this.imagem = res[0].imagem_produto
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
                quantidade: this.quantidade
            }
            this.$store.commit('ADICIONAR_AO_CARRINHO', item)
            toast({
                message: 'Produto Adicionar ao carrinho!',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: 'top-right',
            })
        }

    },

    created() {
        this.getProduto()
    }
}
</script>

<style scoped>

.produto {
    margin-top: 160px;
    background-color: #F3F2F2;
    padding: 20px 10px;
    margin-bottom: 60px;
}

.conteudo-produto img {
    width: 100%;
    max-height: 300px;
    border-radius: 5px;
}

.conteudo-produto {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

/* INFORMACOES DO PRODUTO */

.info-produto {
    background-color: #F5EFEF;
    box-sizing: border-box;
    padding: 0px 20px;
    width: 600px;
    margin-left: 10px;
}

.categoria-e-preco {
    font-size: 16px;
    font-style: italic;
    color: #A69999;
}

.nome-produto {
    font-size: 30px;
    color: #000;

}

.qntd-estrelas {
    color: #CC2131;
    font-size: 32px;
    margin-right: -10px;
}

.valor-produto {
    margin-top: 20px;
    font-size: 30px;
}

.cor-produto {
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: bold;
}

.estoque {
    font-weight: bold;
    margin-bottom: 20px;
}

.qntd-estoque {
    color: #747070;
    font-weight: bold;
}

.quantidade {
    color: #000;
    font-weight: bold;
}

.btn-comprar  {
    margin-top: 40px;
    font-size: 18px;
    border-radius: 10px;
}

.btn-carrinho {
    background-color: #D16972;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    border-radius: 10px;
    height: 50px;
}

.input {
    max-width: 40px;
    margin-top: 10px;
}

/* AVALIACOES */

.avaliacoes {
    max-width: 600px;
}

.titulo-avaliacoes {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
}

.qntd-estrelas-comentario {
    float: right;
    color: #CC2131;
    font-size: 24px;
    margin-bottom: 10px;
}

.comentario {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 10px 15px;
    margin-bottom: 20px;
    font-weight: 550;
}

.nome-avaliador {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

</style>