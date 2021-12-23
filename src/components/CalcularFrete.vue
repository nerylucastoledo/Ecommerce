<template>
    <section class="conteudo-frete">
        <div>
            <div>
                <label for="cupom">Cupom:</label>
            </div>

            <div>
                <input type="text" name="cupom" v-model="cupom" class="input-frete">

                <button class="btn-frete" @click="calcularCupom(cupom)">Ok</button>
            </div>
        </div>
        
        <div>
            <div>
                <label for="frete">CEP:</label>
            </div>

            <div>
                <input type="text" name="frete" v-model="frete" class="input-frete">

                <button class="btn-frete" @click="calcularFrete(frete)">Ok</button>
            </div>
        </div>

        <div v-if="valorCupom || cupomErrado">
            <p class="texto-valor">Desconto:</p>
            
            <p v-if="cupomErrado" class="cupom-errado">{{cupomErrado}}</p>
            
            <p v-else class="valor">- {{valorCupom}}%</p>
        </div>

        <div v-if="valorFrete">
            <p class="texto-valor">Valor Frete:</p>

            <p class="valor">+ {{valorFrete | numeroPreco}}</p>
        </div>

        <div>
            <p class="texto-valor">Valor Produtos:</p>

            <p class="valor">{{valorProdutos | numeroPreco}}</p>
        </div>

        <div>
            <p class="texto-valor">Valor Final:</p>
            
            <p v-if="valorCupom" class="valor">{{calcularValorComCupom(valorProdutos, valorCupom, valorFrete) | numeroPreco}}</p>
            
            <p v-else class="valor">{{valorProdutos + valorFrete | numeroPreco}}</p>
        </div>

        <div>
            <button class="comprar-bicicleta btn-finalizar" @click="comprar">Finalizar compra</button>
        </div>

        <p class="cupom-errado mensagem-erro" v-if="mensagemErro">
            {{mensagemErro}}
        </p>
    </section>
</template>

<script>

export default {

    props: ['valorProdutos'],

    data() {
        return {
            frete: null,
            valorFrete: 0,
            cupom: null,
            valorCupom: 0,
            cupomErrado: null,
            mensagemErro: 0
        }
    },

    methods: {

        calcularFrete() {
            this.valorFrete = 46,99
            this.mensagemErro = null
        },

        calcularCupom(text_cupom) {
            if(text_cupom.toLowerCase() === 'bike10') {
                this.valorCupom = 10
                this.cupomErrado = null

            } else {
                this.valorCupom = 0
                this.cupomErrado = 'Cupom incorreto'
            }
        },

        comprar() {
            if(this.valorFrete) {
                var carrinho = JSON.parse(localStorage.getItem('carrinho'))
                
                if(this.valorCupom) {
                    carrinho.valor_final = this.valorProdutos - (this.valorProdutos / this.valorCupom) + this.valorFrete

                } else {
                    carrinho.valor_final = this.valorProdutos + this.valorFrete
                }

                localStorage.setItem('comprar', JSON.stringify(carrinho))
                this.$router.push("concluir-pedido");

            } else {
                this.mensagemErro = 'Digite o seu cep'
            }
        },

        calcularValorComCupom(valorDoProduto, valorCupom, valorDoFrente) {
            return valorDoProduto - (valorDoProduto / valorCupom) + valorDoFrente
        }

    },
}
</script>


<style>

.conteudo-frete {
    background-color: #F3F2F2;
    padding: 20px;
    float: right;
    width: 350px;
}

.conteudo-frete > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
}

.conteudo-frete label {
    font-weight: bold;
    font-size: 18px;
}

.input-frete {
    border-radius: 4px;
    border: 1px solid white;
    padding: 8px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
    font-size: 1rem;
    font-family: 'Montserrat';
    margin-bottom: 15px;
    border-radius: 10px;
    max-width: 150px;
}

.btn-frete {
    background-color: #FFBA00;
    border: none;
    color: #fff;
    border-radius: 5px;
    margin-left: 10px;
    padding: 15px;
    cursor: pointer;
}

.valor {
    font-weight: bold;
    color: #747070;
    font-size: 18px;
}

.texto-valor {
    font-weight: bold;
    font-size: 18px;
}

.btn-finalizar {
    display: block;
    margin: 0 auto;
}

.cupom-errado {
    color: coral;
}

.mensagem-erro {
    text-align: center;
    font-size: 18px;
}

@media (max-width: 530px) {
    .conteudo-frete {
        max-width: 100%;
    }

    .texto-valor {
        font-size: 18px;
    }

    .input-frete {
        max-width: 120px;
    }
}

@media (max-width: 440px) {
    .input-frete {
        max-width: 100px;
    }

    .texto-valor, .valor {
        font-size: 16px;
    }

    .comprar-bicicleta {
        font-size: 16px;
    }
}

</style>
