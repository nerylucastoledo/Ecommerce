<template>
    <div class="container dados-conteudo">
        <div>
            <h2>Hoje</h2>

            <p>{{valoresVendasHoje | numeroPreco}}</p>
        </div>

        <div>
            <h2>Semana</h2>

            <p>{{valoresVendasSemana | numeroPreco}}</p>
        </div>

        <div>
            <h2>Mês</h2>

            <p>{{valoresVendasMes | numeroPreco}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "valoresVendasHoje",
        "valoresVendasSemana",
        "valoresVendasMes"
    ],

}
</script>

<style>

/* VENDAS */

.dados-conteudo {
    margin-top: 60px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
    color: #fff;
}

.dados-conteudo > div {
    width: 100%;
    border-radius: 10px;
}

.dados-conteudo > div:nth-child(2), .dados-conteudo > div:nth-child(1) {
    margin-right: 30px;
}

.dados-conteudo h2 {
    padding-top: 10px;
}

.dados-conteudo > div:nth-child(1) {
    background-color: #0064de;
}

.dados-conteudo > div:nth-child(2) {
    background-color: #12b457;
}

.dados-conteudo > div:nth-child(3) {
    background-color: #7b2cdc;
}

.dados-conteudo p {
    margin: 20px 0;
    font-size: 24px;
}

@media (max-width: 640px) {
    .dados p {
        font-size: 16px;
        padding-bottom: 10px;
    }

    .dados-conteudo {
        display: block;
    }
}

</style>