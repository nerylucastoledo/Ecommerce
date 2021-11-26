<template>
    <section class="dashboard">
        <div class="sidebar">
            <BarraLateral/>
        </div>

        <div class="dashboard-content">
            <h1>Dashboard</h1>
            
            <div class="dados">
                <div>
                    <h2>Hoje</h2>

                    <p>{{valor_vendas_hoje | numeroPreco}}</p>
                </div>

                <div>
                    <h2>Essa semana</h2>

                    <p>{{valor_vendas_semana | numeroPreco}}</p>
                </div>

                <div>
                    <h2>Esse mês</h2>

                    <p>{{valor_vendas_mes | numeroPreco}}</p>
                </div>
            </div>

            <div class="dados-vendas">
                <div>
                    <h2>Últimas Vendas</h2>
                    
                    <div class="filtro">
                        <div>
                            <input 
                                name="filtrar"
                                type="text" 
                                placeholder="Pesquisar comprador"
                            >

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
                            <th>Produto</th>
                            <th>Cidade</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Pedido</th>
                        </tr>

                        <tr v-for="(venda, index) in vendas" :key=" venda+index">
                            <td class="ordem">{{venda.id_compra}}</td>
                            <td>{{venda.nome_comprador}}</td>
                            <td>{{venda.nome_produto}}</td>
                            <td>{{venda.cidade_comprador}}</td>
                            <td>{{venda.valor_pago | numeroPreco}}</td>
                            <td class="confirmado" v-if="venda.status_venda === 'Confirmado'">{{venda.status_venda}}</td>
                            <td class="recusado" v-else-if="venda.status_venda === 'Recusado'">{{venda.status_venda}}</td>
                            <td class="processamento" v-else-if="venda.status_venda === 'Processamento'">{{venda.status_venda}}</td>
                            <td class="entregue" v-else-if="venda.status_venda === 'Entregue'">Entregue</td>
                            <td v-if="venda.status_venda === 'Processamento'">
                                <button class="confirmar-venda" @click="atualizarStatus(venda, 'Confirmado')">
                                    <font-awesome-icon icon="check" size="1x"/>
                                </button>
                                <button class="recusar-venda" @click="atualizarStatus(venda, 'Recusado')">
                                    <font-awesome-icon icon="times" size="1x"/>
                                </button>
                            </td>
                            <td v-else-if="venda.status_venda !== 'Processamento' && venda.status_venda !== 'Entregue'">
                                <button class="confirmar-venda" @click="atualizarStatus(venda, 'Entregue')">
                                    <font-awesome-icon icon="truck-moving" size="1x"/>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="metas">
                    <div class="dia">
                        <DashboardPorcentagem :series="series_dia" teste="Dia">
                            <h2>% Vendas do dia</h2>
                        </DashboardPorcentagem>
                    </div>

                    <div class="semana">
                        <DashboardPorcentagem :series="seriesSemana" teste="Semana">
                            <h2>% Vendas da semana</h2>
                        </DashboardPorcentagem>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>

import DashboardPorcentagem from '../components/DashboardPorcentagem.vue'
import BarraLateral from '../components/BarraLateral.vue'


export default {

    components: {
        DashboardPorcentagem,
        BarraLateral
    },
    
    data() {
        return {
            vendas: null,
            valor_vendas_hoje: 0,
            valor_vendas_semana: 0,
            valor_vendas_mes: 0,
            filtro_status: "",
            date: new Date(),
            series_dia: [],
            seriesSemana: [],
            seriesMes: []
        }
    },

    computed: {
        dataCompleta: function () {
            var dia = String(this.date.getDate()).padStart(2, '0');
            var mes = String(this.date.getMonth() + 1).padStart(2, '0');
            var ano = this.date.getFullYear();

            var date = ano + '-' + mes + '-' + dia

            return date
        }
    },

    methods: {
        atualizarStatus(linha, status) {
            const formData = new FormData()

            linha.status_venda = status
            console.log(linha)

            formData.append('cpf_comprador', linha.cpf_comprador)
            formData.append('cep_comprador', linha.cep_comprador)
            formData.append('cidade_comprador', linha.cidade_comprador)
            formData.append('bairro_comprador', linha.bairro_comprador)
            formData.append('rua_comprador', linha.rua_comprador)
            formData.append('numero_rua_comprador', linha.numero_rua_comprador)
            formData.append('valor_pago', linha.valor_pago)
            formData.append('qntd_parcela', linha.qntd_parcela)
            formData.append('quantidade', linha.quantidade)
            formData.append('id_produto_comprado', linha.id_produto_comprado)
            formData.append('email_comprador', linha.email_comprador)
            formData.append('data_venda', linha.data_venda)
            formData.append('status_venda', status)
            formData.append('nome_produto', linha.nome_produto)
            formData.append('id_compra', linha.id_compra)

            fetch(`https://restapiecomerce.herokuapp.com/venda/${linha.id_compra}/`, {
                method: 'PUT',
                body: formData
            })
        },

        pegarVendasFeitas() {
            fetch('https://restapiecomerce.herokuapp.com/venda/')
            .then(req => req.json())
            .then(res => {
                this.vendas = res
                this.vendasDoDia(res)
                this.vendasDaSemana(res)
                res.forEach((venda) => {
                    this.valor_vendas_mes += venda.valor_pago
                })
            })
        },

        vendasDoDia(quantidade) {
            var date = this.dataCompleta.slice(8,10)

            const resultado = this.formatarDadosVendas(quantidade, date, 8, 10, 0)

            resultado.listaSeries.forEach((item) => {
                this.series_dia.push(item)
            })

            this.valor_vendas_hoje = resultado.valor_ganho
        },

        vendasDaSemana(quantidade) {
            var date = this.dataCompleta.slice(8,10)

            const resultado = this.formatarDadosVendas(quantidade, date, 8, 10, 7)

            resultado.listaSeries.forEach((item) => {
                this.seriesSemana.push(item)
            })

            this.valor_vendas_semana = resultado.valor_ganho

        },

        formatarDadosVendas(quantidade, data, num_iniial, num_final, qntd_dias,) {

            var date = data
            var list_series = []
            var valor_arrecadado = 0
            var mes_corrente = parseInt(this.dataCompleta.slice(5, 7))

            quantidade.forEach((venda) => {

                var data_venda = venda.data_venda.slice(num_iniial, num_final)
                var diferença_de_dias = parseInt(date) - parseInt(data_venda)
                var mes_da_venda = parseInt(venda.data_venda.slice(5, 7))

                if(mes_corrente === mes_da_venda && diferença_de_dias <= qntd_dias && diferença_de_dias >= 0) {
                    const exists = list_series.filter(elemento => elemento.name === venda.nome_produto)

                    if(exists.length) {
                        exists[0].data[0] = exists[0].data[0] + 1

                    } else {
                        var series_body = {
                            name: `${venda.nome_produto}`,
                            data: [venda.quantidade]
                        }

                        list_series.push(series_body)
                    }

                    valor_arrecadado += venda.valor_pago
                }
            })

            var retorno = {
                valor_ganho: valor_arrecadado,
                listaSeries: list_series
            }

            return retorno
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

.confirmado, .processamento, .recusado {
    color: rgb(247, 239, 239);
    border-radius: 4px;
}

.confirmado {
    background-color: #a4ecc2;
}

.processamento {
    background-color: rgb(103, 151, 170)
}

.recusado {
    background-color: coral;;
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