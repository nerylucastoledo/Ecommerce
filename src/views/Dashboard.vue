<template>
    <section class="dashboard">
        <div class="sidebar">
            <ul>
                <li>
                    <span>
                        <font-awesome-icon icon="cubes" size="1x"/>
                    </span>
                    <p>Painel</p>
                </li>

                <li>
                    <span>
                        <font-awesome-icon icon="money-bill-alt" size="1x"/>
                    </span>
                    <p>Vendas</p>
                </li>

                <li>
                    <span>
                        <font-awesome-icon icon="chart-bar" size="1x"/>
                    </span>
                    <p>Gráficos</p>
                </li>
            </ul>
        </div>

        <div class="dashboard-content">
            <h1>Dashboard</h1>
            
            <div class="dados">
                <div>
                    <h2>Hoje</h2>
                    <p>{{3999 | numeroPreco}}</p>
                </div>

                <div>
                    <h2>Essa semana</h2>
                    <p>{{12998 | numeroPreco}}</p>
                </div>

                <div>
                    <h2>Esse mês</h2>
                    <p>{{32898 | numeroPreco}}</p>
                </div>
            </div>

            <div class="dados-vendas">
                <div>
                    <h2>Últimas Vendas</h2>
                    
                    <div class="filtro">
                        <div>
                            <input type="text" name="filtrar" placeholder="Pesquisar comprador">

                            <span>
                                <font-awesome-icon icon="search" size="1x"/>
                            </span>
                        </div>

                        <div class="status-pedido">
                            <p>Todas</p>
                            <p>Aberta</p>
                            <p>Finalizada</p>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <th>Ordem da venda</th>
                            <th>Comprador</th>
                            <th>Cidade</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Pedido</th>
                        </tr>
                        <tr v-for="(venda, index) in vendas" :key=" venda+index">
                            <td class="ordem">{{venda.id_compra}}</td>
                            <td>Lucas Nery</td>
                            <td>{{venda.cidade_comprador}}</td>
                            <td>{{venda.valor_pago | numeroPreco}}</td>
                            <td class="status">Pedido Realizado</td>
                            <td>
                                <button class="confirmar-venda">
                                    <font-awesome-icon icon="check" size="1x"/>
                                </button>
                                <button class="recusar-venda">
                                    <font-awesome-icon icon="times" size="1x"/>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="metas">
                    <div class="dia">
                        <h2>Vendas do dia</h2>
                        <div id="chart">
                            <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>

                    <div class="semana">
                        <h2>Meta para a semana</h2>
                    </div>

                    <div class="mes">
                        <h2>Meta para o mês</h2>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    
    data() {
        return {
            vendas: null,
            filtro_status: "",
            series: [],
            chartOptions: {
                chart: {
                type: 'bar',
                stacked: true,
                stackType: '100%'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['Hoje'],
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "x"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
            },
        }
    },

    methods: {
        pegarVendasFeitas() {
            fetch('https://restapiecomerce.herokuapp.com/venda/')
            .then(req => req.json())
            .then(res => {
                this.vendas = res
                this.vendasDoDia(res)
                this.vendasDaSemana(res)
                this.vendasDoMes(res)
            })
        },

        vendasDoDia(quantidade) {
            let date = new Date()
            date = date.toISOString().slice(0,10)

            quantidade.forEach((venda) => {
                if(venda.data_venda === date) {
                    var series_body = {
                        name: `${venda.cidade_comprador}`,
                        data: [venda.quantidade]
                    }
                    this.series.push(series_body)
                }
            })
        },

        vendasDaSemana(quantidade) {
            console.log(quantidade)
        },

        vendasDoMes(quantidade) {
            console.log(quantidade)
        }
    },

    created() {
        this.pegarVendasFeitas()
    }

}
</script>

<style scoped>

.dashboard {
    display: flex;
    background-color: #f5f7fb;
    height: 100%;
}

.dashboard-content {
    width: 100%;
}

.dashboard-content h1 {
    text-align: center;
    font-size: 42px;
}

.sidebar {
    margin-top: 100px;
    background-color: #fff;
    width: 200px;
    text-align: center;
    margin-right: 40px;
}

.sidebar li {
    font-size: 18px;
    padding: 15px 0px;
    border-radius: 10px;
}

.sidebar p {
    display: inline-block;
    margin-left: 10px;
}

.sidebar li:hover {
    background-color: #f5f7fb;
    transition: .3s;
    color: #FFBA00;
}

.dashboard-content {
    margin-top: 160px;
}

.dados {
    margin-top: 60px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
}

.dados > div {
    width: 100%;
    background-color: #fff;
    margin-right: 30px;
    border-radius: 10px;
    text-align: center;
}

.dados h2 {
    margin-top: 30px;
}

.dados > div:nth-child(1) {
    background-color: #0064de;
    color: #fff;
}

.dados > div:nth-child(2) {
    background-color: #12b457;
    color: #fff;
}

.dados > div:nth-child(3) {
    background-color: #7b2cdc;
    color: #fff;
}

.dados p {
    margin: 30px 0;
    font-size: 24px;
}

/* FILTRO */

.filtro {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}

input {
    border: none;
    border-bottom: 1px solid #6589e4;
    width: 200px;
    font-size: 16px;
}

.status-pedido p {
    display: inline-block;
    color: #abb8ca;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
}

.status-pedido p:hover {
    background-color: #6589e4;
    color: #fff;
}

.status-pedido p {
    margin: 0 10px;
}

/* DADOS VENDAS */

.dados-vendas {
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #49648d;
    font-weight: bold;
}

.dados-vendas > div:nth-child(1) {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
}

.dados-vendas > div:nth-child(2) {
    width: 400px;
    margin-left: 30px;
}

table {
    margin-top: 40px;
    border-collapse: collapse;
}

td, th {
  border-bottom: 1px solid #dddddd;
  padding: 10px;
}

.status {
    background-color: #e8f9ef;
    color: #56d388;
    border-radius: 4px;
}

.ordem {
    color: #6589e4;
}


/* BOTAO VENDA */
.confirmar-venda, .recusar-venda {
    border: none;
    color: #fff;
    padding: 5px;
    cursor: pointer;
    max-height: 24px;
    border-radius: 4px;
}

.confirmar-venda {
    background-color: #56d388;
    margin-right: 10px;
}

.recusar-venda {
    background-color: coral;
}

/* METAS */

.metas {
    margin-right: 30px;
}

.metas h2 {
    margin-bottom: 30px;
}

.metas > div {
    margin-bottom: 30px;
    background-color: #fff;
    padding: 30px 0;
}


</style>