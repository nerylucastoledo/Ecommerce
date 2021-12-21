<template>
    <section>

        <div v-if="loading" class="loading">
            <Loading/>
        </div>

        <div v-else>
            <div class="sidebar">
                <HeaderDashboard/>
            </div>

            <div class="dashboard container">
                <div class="dados">
                    <DadosDashbaord 
                        :valoresVendasHoje="valor_vendas_hoje" 
                        :valoresVendasSemana="valor_vendas_semana" 
                        :valoresVendasMes="valor_vendas_mes">
                    </DadosDashbaord>
                </div>

                <div class="tabela" style="overflow-x:auto;">
                    <h1 class="titulo-dashoard">Vendas</h1>
                    
                    <table>
                        <tr>
                            <th>ID venda</th>
                            <th>Comprador</th>
                            <th>Produto</th>
                            <th>Cidade</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Pedido</th>
                        </tr>

                        <tr v-for="(venda, index) in vendas" :key=" venda+index">
                            <td class="ordem">
                                <a :href="`https://restapiecomerce.herokuapp.com/venda/${venda.id_compra}`">
                                    {{venda.id_compra.slice(0, 8)}}
                                </a>
                            </td>

                            <td>{{formatarNomeComprador(venda.nome_comprador)}}</td>

                            <td>{{venda.nome_produto}}</td>

                            <td>{{venda.cidade_comprador}}</td>

                            <td>{{venda.valor_pago | numeroPreco}}</td>

                            <td :class="venda.status_venda.toLowerCase()">
                                {{statusDaVenda(venda.status_venda)}}
                            </td>

                            <td v-if="venda.status_venda === 'Processamento'">
                                <button class="confirmar-venda" @click="atualizarStatus(venda, 'Confirmado')">
                                    <font-awesome-icon icon="check" size="1x"/>
                                </button>

                                <button class="recusar-venda" @click="atualizarStatus(venda, 'Recusado')">
                                    <font-awesome-icon icon="times" size="1x"/>
                                </button>
                            </td>

                            <td v-else-if="venda.status_venda !== 'Recusado' && venda.status_venda !== 'Entregue'">
                                <button class="confirmar-venda" @click="atualizarStatus(venda, 'Entregue')">
                                    <font-awesome-icon icon="truck-moving" size="1x"/>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="metas">
                    <h2>Gráficos</h2>

                    <div class="dia">
                        <DashboardPorcentagem :series="series_dia" categoria="Dia">
                            <h2>% Vendas do dia</h2>
                        </DashboardPorcentagem>
                    </div>

                    <div class="semana">
                        <DashboardPorcentagem :series="seriesSemana" categoria="Semana">
                            <h2>% Vendas da semana</h2>
                        </DashboardPorcentagem>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import DadosDashbaord from '../components/DadosDashboard.vue'
import DashboardPorcentagem from '../components/DashboardPorcentagem.vue'
import Loading from '../components/Loading.vue'
import HeaderDashboard from '../components/HeaderDashboard.vue'

import { api } from '../service'

export default {
    name: 'Dashboard',

    components: {
        DashboardPorcentagem,
        DadosDashbaord,
        HeaderDashboard,
        Loading
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
            seriesMes: [],
            loading: true
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

            api.put(`venda/${linha.id_compra}/`, formData)
        },

        async pegarVendasFeitas() {
            await api.get('venda/')
            .then(res => {
                this.vendas = res.data
                this.vendasDoDia(res.data)
                this.vendasDaSemana(res.data)
                res.data.forEach((venda) => {
                    this.valor_vendas_mes += venda.valor_pago
                })
            })
            this.loading = false
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
        },

        statusDaVenda(status) {
            return status
        },

        formatarNomeComprador(nome) {
            var nome_formatado = nome.split(' ')
            var sobrenome = nome_formatado[1]
            if(sobrenome) {
                return  nome_formatado[0] + ' ' + sobrenome
            } else {
                return nome_formatado[0]
            }
        }
        
    },

    created() {
        this.pegarVendasFeitas()
    }

}
</script>

<style scoped>

section {
    background-color: #f5f7fb;
    padding-bottom: 60px;
    text-align: center;
}

.metas div, table {
    background-color: #fff;
}

/* TABELA */
.tabela {
    margin: 60px auto 30px;
}

.tabela h1 {
    font-size: 42px;
    margin-bottom: 40px;
}

table {
    border-radius: 10px;
    padding: 10px;
    margin: 0 auto;
}

td, th {
  border-bottom: 1px solid #dddddd;
  padding: 10px;
}

.ordem a{
    color: #6589e4;
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
    margin-right: 5px;
}

.recusar-venda {
    background-color: coral;
}

/* GRAFICO */

.metas div {
    padding: 10px;
}

.metas h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 42px;
}

.loading {
    margin: 0 auto 60px;
}

@media (max-width: 760px) {
    .dashboard {
        margin-top: 20px;
    }

}

@media (max-width: 640px) {
    .tabela h1, .metas h2 {
        font-size: 2rem;
    }

    td, th {
        font-size: 14px;
    }
}

</style>