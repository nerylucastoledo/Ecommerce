<template>
    <section class="valor-frete">
        <slot></slot>
        <label for="frete">Frete:</label>
        <input type="text" name="frete">
        <button>Ok</button>
        <p>Valor Final:</p>
    </section>
</template>

<script>
export default {

    
}
</script>


<style>

.valor-frete {
    background-color: #F3F2F2;
    padding: 20px;
    float: right;
    margin-bottom: 60px;
}

/*
http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=70002900&sCepDestino=04547000&nVlPeso=10&nCdFormato=2&nVlComprimento=20&nVlAltura=200&nVlLargura=200&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=10&StrRetorno=xml&nIndicaCalculo=3
*/

</style>