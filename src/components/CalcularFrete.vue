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

        <div v-if="valorCupom">
            <p class="texto-valor">Desconto:</p>

            <p class="valor">- {{valorCupom}}%</p>
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
            
            <p v-if="valorCupom" class="valor">{{valorProdutos - (valorProdutos / valorCupom) + valorFrete | numeroPreco}}</p>
            <p v-else class="valor">{{valorProdutos + valorFrete | numeroPreco}}</p>
        </div>

        <div>
            <button class="comprar-bicicleta btn-finalizar" @click="comprar">Finalizar compra</button>
        </div>
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
        }
    },

    methods: {

        calcularFrete() {
            this.valorFrete = 46,99
        },

        calcularCupom(text_cupom) {
            if(text_cupom.toLowerCase() === 'bike10') {
                this.valorCupom = 10
            }
        },

        comprar() {
            var carrinho = JSON.parse(localStorage.getItem('carrinho'))
            carrinho.valor_final = this.valorProdutos - (this.valorProdutos / this.valorCupom) + this.valorFrete
            localStorage.setItem('comprar', JSON.stringify(carrinho))
            this.$router.push("concluir-pedido");
        }

    },
    /*
    http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=37553559&sCepDestino=${cepDestinho}&nVlPeso=10&nCdFormato=2&nVlComprimento=20&nVlAltura=200&nVlLargura=200&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=10&StrRetorno=xml&nIndicaCalculo=3
    */
}
</script>


<style>

.conteudo-frete {
    background-color: #F3F2F2;
    padding: 20px;
    float: right;
    margin-bottom: 60px;
    width: 350px;
}

.conteudo-frete > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0px;
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
    float: right;
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

</style>