<template>
    <section class="conteudo-frete">
        <!---CONTINUAR DAQUI--->
        <div class="frete">
            <div>
                <label for="frete">CEP:</label>
            </div>
            <div>
                <input type="text" name="frete" class="input-frete">
                <button class="btn-frete">Ok</button>
            </div>
        </div>
        <div class="valor-frete">
            <div>
                <p class="texto-valor">Valor Frete:</p>
            </div>
            <div>
                <p class="valor">R$ 24,99</p>
            </div>
        </div>
        <div class="valor-frete">
            <div>
                <p class="texto-valor">Valor Produtos:</p>
            </div>
            <div>
                <p class="valor">{{valorProdutos | numeroPreco}}</p>
            </div>
        </div>
        <div class="valor-final">
            <div>
                <p class="texto-valor">Valor Final:</p>
            </div>
            <div>
                <p class="valor">R$30.957,99</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

    props: ['valorProdutos']
    
}
</script>


<style>

.conteudo-frete {
    background-color: #F3F2F2;
    padding: 20px;
    float: right;
    margin-bottom: 60px;
    width: 300px;
}

.frete, .valor-final, .valor-frete, .valor-produtos {
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
    padding: 10px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
    font-size: 1rem;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    margin-bottom: 15px;
    border-radius: 10px;
    max-width: 100px;
}

input-frete:hover,
input:focus {
    outline: none;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    border-color: #87f;
}

.btn-frete {
    background-color: #CC2131;
    border: none;
    color: #fff;
    border-radius: 5px;
    margin-left: 10px;
    padding: 10px;
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

/*
http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=10&nCdFormato=2&nVlComprimento=20&nVlAltura=200&nVlLargura=200&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=10&StrRetorno=xml&nIndicaCalculo=3
*/

</style>