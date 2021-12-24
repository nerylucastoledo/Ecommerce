<template>
    <section class="concluir-pedido container">
        <h1 class="titulo">Concluindo seu pedido</h1>

        <form class="form" action="#" @submit.prevent="submit">
            <h1 class="titulo-formulario">Dados do cliente</h1>
            
            <div>
                <div>
                    <label for="name">Nome completo</label>
                    <input 
                        id="name" 
                        type="text" 
                        name="name" 
                        required 
                        autofocus 
                        v-model="formCliente.name"
                    >
                </div>

                <div>
                    <label for="dataNascimento">Nascimento</label>
                    <input 
                        id="dataNascimento" 
                        type="date" 
                        name="dataNascimento" 
                        required 
                        v-model="formCliente.dataNascimento"
                    >
                </div>
            </div>

           <div>
                <div>
                    <label for="email">Email</label>
                    <input 
                        id="email" 
                        type="e-mail" 
                        name="email" 
                        autocomplete="email" 
                        required 
                        v-model="formCliente.email"
                    >
                </div>

                <div>
                    <label for="cpf">Cpf</label>
                    <input 
                        id="cpf" 
                        type="number" 
                        name="cpf" 
                        required 
                        v-model="formCliente.cpf"
                    >
                </div>
            </div>

            <div>
                <div>
                    <label for="telefone">Telefone</label>
                    <input 
                        id="telefone" 
                        type="number" 
                        name="telefone" 
                        required 
                        v-model="formCliente.telefone"
                    >
                </div>

                <div>
                    <label for="idade">Idade</label>
                    <input 
                        id="idade" 
                        type="number" 
                        name="idade" 
                        required 
                        v-model="formCliente.idade"
                    >
                </div>
            </div>

            <h1 class="titulo-formulario">Endereço de entrega</h1>
            
            <div>
                <div>
                    <label for="cep">Cep</label>
                    <input 
                        id="cep" 
                        type="number" 
                        name="cep" 
                        required 
                        autofocus 
                        v-model="formCliente.cep"
                        @keyup="puxarEndereco(formCliente.cep)"
                    >
                </div>

                <div>
                    <label for="estado">Estado</label>
                    <input 
                        id="estado" 
                        type="text" 
                        name="estado"
                        required 
                        v-model="formCliente.estado"
                    >
                </div>
            </div>

            <div>
                <div>
                    <label for="cidade">Cidade</label>
                    <input 
                        id="cidade" 
                        type="text" 
                        name="cidade" 
                        required 
                        v-model="formCliente.cidade"
                    >
                </div>

                <div>
                    <label for="bairro">Bairro</label>
                    <input 
                        id="bairro" 
                        type="text" 
                        name="bairro" 
                        required 
                        v-model="formCliente.bairro"
                    >
                </div>
            </div>

            <div>
                <div>
                    <label for="rua">Rua</label>
                    <input 
                        id="rua" 
                        type="text" 
                        name="rua" 
                        required 
                        v-model="formCliente.rua"
                    >
                </div>

                <div>
                    <label for="numero">Número</label>
                    <input 
                        id="numero" 
                        type="number" 
                        name="numero" 
                        required 
                        v-model="formCliente.numero"
                    >
                </div>
            </div>

            <div>
                <button type="submit" class="btn btn-pedido">Continuar pedido</button>
            </div>

        </form>

        <div class="formulario-entrega">
            <form action="#" class="form">

                <h1 class="titulo-formulario">Dados de pagamento</h1>

                <div class="entrega-pagamento">
                    <div>
                        <label for="formaDePagar">Forma de pagamento</label>
                        <select 
                            name="formaDePagar" 
                            required 
                            v-model="formEntregaPagamento.formaPagamento"
                        >
                            <option selected value="credito">Cartão de crédito</option>
                            <option value="boleto">Boleto bancário</option>
                        </select>
                    </div>
                </div>

                <div v-if="formEntregaPagamento.formaPagamento == 'credito'">
                    <div>
                        <label class="label-cartao" for="numeroCartao">Número do cartão</label>

                        <span v-if="cartaoValido" class="valido">
                            <font-awesome-icon icon="check" size="1x"/>
                        </span>

                        <span v-else class="invalido">
                            <font-awesome-icon icon="times" size="1x"/>
                        </span>

                        <input 
                            id="numeroCartao" 
                            type="number" 
                            name="numeroCartao"
                            required
                            v-model="formEntregaPagamento.numeroCartao"
                            @keyup="verificarCartao(formEntregaPagamento.numeroCartao)"
                        >
                    </div>


                    <div>
                        <label class="label-cartao" for="nomeSobrenome">Nome e sobrenome</label>

                        <span v-if="nomeValido" class="valido">
                            <font-awesome-icon icon="check" size="1x"/>
                        </span>

                        <span v-else class="invalido">
                            <font-awesome-icon icon="times" size="1x"/>
                        </span>

                        <input 
                            id="nomeSobrenome" 
                            type="nomeSobrenome"
                            name="text" 
                            required 
                            v-model="formEntregaPagamento.nomeSobrenome"
                            @keyup="verificarNome(formEntregaPagamento.nomeSobrenome)"
                        >
                    </div>
                </div>

                <div v-if="formEntregaPagamento.formaPagamento == 'credito'">
                    <div>
                        <label class="label-cartao" for="dataVencimento">Data de vencimento:</label>

                        <span v-if="formEntregaPagamento.dataVencimento" class="valido">
                            <font-awesome-icon icon="check" size="1x"/>
                        </span>

                        <span v-else class="invalido">
                            <font-awesome-icon icon="times" size="1x"/>
                        </span>

                        <input 
                            id="dataVencimento" 
                            type="date" 
                            name="dataVencimento"
                            required 
                            v-model="formEntregaPagamento.dataVencimento"
                        >
                    </div>

                    <div>
                        <label class="label-cartao" for="codigoSeguranca">Código de segurança</label>

                        <span v-if="formEntregaPagamento.codigoSeguranca.length > 2" class="valido">
                            <font-awesome-icon icon="check" size="1x"/>
                        </span>

                        <span v-else class="invalido">
                            <font-awesome-icon icon="times" size="1x"/>
                        </span>

                        <input 
                            id="codigoSeguranca" 
                            type="number" 
                            name="codigoSeguranca" 
                            required
                            v-model="formEntregaPagamento.codigoSeguranca"
                        >
                    </div>
                </div>

            </form>

            <div>

                <h1 class="titulo">Resumo do pedido</h1>
                <div v-if="compra.items">
                    <div 
                        class="carrinho-item" 
                        v-for="(produto, index) in compra.items" 
                        :key="produto+index"
                    >
                        <router-link :to="{ name: 'produto', params: { id: produto.produto.id_produto }}">
                            <img 
                                :src="produto.produto.imagem_produto" 
                                :alt="produto.produto.nome_produto"
                            >
                        </router-link>

                        <div>
                            <h2 class="nome-produto">{{produto.produto.nome_produto}}</h2>
                            <p class="quantidade">
                                Quantidade: 
                                <strong>{{produto.quantidade}}</strong>
                            </p>
                        </div>

                        <div>
                            <h2>Preço unitário</h2>

                            <p class="valor-produto">{{produto.produto.valor_produto | numeroPreco}}</p>
                        </div>

                        <div>
                            <h2>Preço total</h2>

                            <p class="preco-total preco-total-carrinho">{{produto.produto.valor_produto * produto.quantidade | numeroPreco}}</p>
                        </div>
                    </div>

                    <div>
                        <p class="valor-final">Valor Final + Frete: 
                            <span>{{compra.valorFinal | numeroPreco}}</span>
                        </p>

                        <p v-if="mensagemDeErro" class="mensagem-erro-cartao">{{mensagemDeErro}}</p>
                        
                        <button
                            class="btn btn-pedido"
                            type="submit" 
                            @click.prevent="confirmarPedido"
                        >
                            Confirmar compra
                        </button>
                    </div>

                </div>

            </div>
        </div>

       <PedidoFeito v-if="pedidoFeito === true">
            <p>PARABÉNS!! Seu pedido foi feito. ;)</p>
            <br>
            <p>Agora é so aguardar.</p>
       </PedidoFeito>

       <PedidoRecusado v-else-if="pedidoFeito === false">
            <p>Pedido recusado, dados incorretos</p>
            <br>
            <p>Tente novamente</p>
       </PedidoRecusado>

    </section>
</template>

<script>

import PedidoFeito from '../components/PedidoFeito.vue'
import PedidoRecusado from '../components/PedidoRecusado.vue'
import { api } from '../service'

export default {
    name: 'concluirpedido',
    components: {
        PedidoFeito,
        PedidoRecusado
    },
    data() {
        return {
            formCliente: {
                name: "",
                dataNascimento: "",
                email: "",
                cpf: "",
                telefone: "",
                idade: "",
                cep: "",
                estado: "",
                cidade: "",
                bairro: "",
                rua: "",
                numero: "",
            },
            formEntregaPagamento: {
                formaEntrega: "",
                formaPagamento: "",
                nomeSobrenome: "",
                numeroCartao: "",
                dataVencimento: "",
                codigoSeguranca: "",
            },
            compra: null,
            pedidoFeito: null,
            cartaoValido: false,
            nomeValido: false,
            mensagemDeErro: null
        };
    },

    methods: {
        puxarEndereco(cep) {
            if(cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(req => req.json())
                .then(res => {
                    this.formCliente.estado = res.uf
                    this.formCliente.cidade = res.localidade
                    this.formCliente.bairro = res.bairro
                    this.formCliente.rua = res.logradouro
                })
            }
        },

        verificarCartao(numero) {
            const enterCard = require("cardvalidatorfabi")
            const cartaoValido = enterCard.cardValidator(numero)
            if(cartaoValido === true) {
                this.cartaoValido = true
            } else {
                this.cartaoValido = false
            }
        },

        verificarNome(nome) {
            var nomeSobrenome = nome.split(' ')

            if(nomeSobrenome.length > 1 && nomeSobrenome[1].length > 0) {
                this.nomeValido = true
            } else {
                this.nomeValido = false
            }
        },
        
        submit() {
            document.querySelector('.btn-pedido').style.display = 'none'
            document.querySelector('.formulario-entrega').style.display = 'block'
        },

        confirmarPedido() {
            var dataValida = this.formEntregaPagamento.dataVencimento
            var codigoValido = this.formEntregaPagamento.codigoSeguranca

            if (this.cartaoValido && this.nomeValido && dataValida && codigoValido || this.formEntregaPagamento.formaPagamento === 'boleto') {
                const formData = new FormData()
                let date = new Date()

                const produtos = JSON.parse(localStorage.getItem('comprar'))
                produtos.items.forEach((produto) => {
                    formData.append('nome_comprador', this.formCliente.name)
                    formData.append('cpf_comprador', this.formCliente.cpf)
                    formData.append('cep_comprador', this.formCliente.cep)
                    formData.append('cidade_comprador', this.formCliente.cidade)
                    formData.append('bairro_comprador', this.formCliente.bairro)
                    formData.append('rua_comprador', this.formCliente.rua)
                    formData.append('numero_rua_comprador', this.formCliente.numero)
                    formData.append('valor_pago', parseInt(this.compra.valorFinal))
                    formData.append('qntd_parcela', 2)
                    formData.append('quantidade', produto.quantidade)
                    formData.append('id_produto_comprado', produto.produto.id_produto)
                    formData.append('email_comprador', this.$store.state.user.data.email)
                    formData.append('data_venda', date.toISOString().slice(0,10))
                    formData.append('status_venda', 'Processamento')
                    formData.append('nome_produto', produto.produto.nome_produto)

                    api.post('venda/', formData)
                    .then(() => {
                        this.pedidoFeito = true;
                        this.$store.commit('ZERAR_CARRINHO')

                        setTimeout(() => {
                            this.pedidoFeito = false;
                            this.$router.push("/meus-pedidos");
                        }, 1000);

                    }).catch(() => {
                        this.pedidoFeito = false;

                        setTimeout(() => {
                            this.pedidoFeito = null;
                        }, 1000);
                        this.mensagemDeErro = null
                    })
                })
            } else {
                this.mensagemDeErro = 'Dados do cartão inválidos'
            }
            
        },
    },

    created() {
        this.compra = JSON.parse(localStorage.getItem('comprar'))
        document.title =  'Concluir Pedido - LucasBiker'
    }
}
</script>

<style scoped>
.titulo {
    font-size: 42px;
    margin-bottom: 30px;
}

.concluir-pedido {
    margin-top: 160px;
}

.titulo-formulario {
    margin-bottom: 40px;
    margin-top: 60px;
}


.form {
    margin-top: -60px;
    margin-bottom: 40px;
}

.form label {
    font-size: 18px;
}

.form > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.form > div div {
    width: 45%;
}

.entrega-pagamento {
    margin-bottom: 20px;
}

.entrega-pagamento div label {
    display: block;
}

.entrega-pagamento select {
    font-size: 18px;
}

.formulario-entrega {
    display: none;
}

.btn-pedido {
    margin-right: 0px;
    margin-top: 40px;
    padding: 20px;
    background-color: #FFBA00;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

select {
    height: 40px;
    margin-bottom: 20px;
    font-size: 18px;
}

.valido {
    color: green;
}

.invalido {
    color: red;
}

.mensagem-erro-cartao {
    color: red;
    text-align: right;
    margin-top: 20px;
}

.label-cartao {
    margin-right: 10px;
}

/* RESUMO DO PEDIDO */

.carrinho-item {
    margin-top: 40px;
    background-color: #f1efef;
    padding: 20px 0;
}

.valor-final {
    text-align: right;
    font-weight: bold;
    font-size: 2rem;
}

@media (max-width: 440px) {
    .form > div {
        display: block;
    }

    .form > div div {
        width: 100%;
    }
}

@media (max-width: 530px) {
    .carrinho-item {
        padding: 20px;
    }

    .titulo {
        font-size: 2rem;
    }
    
    .titulo::before {
        display: none;
    }

    .valor-final {
        font-size: 24px;
    }
}

</style>
