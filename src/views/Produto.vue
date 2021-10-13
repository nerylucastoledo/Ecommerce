<template>
    <div class="produto">
        <div class="conteudo-produto">
            <div class="avaliacoes">
                <div>
                    <img :src="imagem" alt="Moto Motorizada">
                    <h3 class="titulo-avaliacoes">Avaliações</h3>
                    <div v-if="avaliacoes">
                        <div class="avaliacao" v-for="(avaliacao, index) in avaliacoes" :key="avaliacao+index">
                            <p class="qntd-estrelas-comentario">☆☆☆☆ {{avaliacao.qntd_estrelas}}</p>
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
                <p class="qntd-estrelas">☆☆☆☆</p>
                <h2 class="valor-produto">R${{produto.valor_produto}}</h2>
                <p class="categoria-e-preco">ou 6x de R$1.719,99</p>
                <p class="cor-produto">Cor: {{produto.cor_produto}}</p>

                <p v-if="quantidade_no_estoque > 0" class="estoque">
                    Disponível em estoque
                </p>
                <p v-else class="estoque">
                    Sem estoque
                </p>

                <p class="quantidade">Quantidade <span class="qntd-estoque">({{quantidade_no_estoque}} disponível)</span></p>

                <button class="btn-comprar btn">Comprar agora</button>

                <button class="btn-carrinho btn">Adicionar ao carrinho</button>


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
            quantidade_no_estoque: 0,
            avaliacoes: null,
            imagem: null
        }
    },

    methods: {
        getProduto() {
            fetch(`http://127.0.0.1:8000/produto/?id=${this.id}`)
            .then(req => req.json())
            .then(res => {
                this.produto = res[0]
                this.quantidade_no_estoque = res[0].quantidade_estoque
                this.avaliacoes = res[0].avaliacoes
                this.imagem = res[0].imagem_produto
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
    max-width: 100%;
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
    margin-bottom: 20px;
}

.valor-produto {
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

/* AVALIACOES */

.avaliacoes {
    max-width: 600px;
}

.avaliacao {
    border-bottom: 1px solid #000;
}

.titulo-avaliacoes {
    margin-top: 40px;
    margin-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
}

.qntd-estrelas-comentario {
    text-align: right;
    color: #CC2131;
    font-size: 24px;
    margin-bottom: 10px;
}

.comentario {
    background-color: #C4C4C4;
    border-radius: 10px;
    padding: 10px 10px;
    margin-bottom: 20px;
}

.nome-avaliador {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

</style>