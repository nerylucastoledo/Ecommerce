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
                        type="email" 
                        name="email" 
                        autocomplete="current-email" 
                        required 
                        v-model="formCliente.email"
                    >
                </div>

                <div>
                    <label for="cpf">Cpf</label>
                    <input 
                        id="cpf" 
                        type="text" 
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
                        type="text" 
                        cep="cep" 
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
                        <label for="formaDeEntregar">Forma de entrega</label>
                        <select 
                            name="formaDeEntregar" 
                            required 
                            v-model="formEntregaPagamento.formaEntrega"
                        >
                            <option value="pac">Correio: Pac</option>
                            <option value="sedex">Correio: Sedex</option>
                        </select>
                    </div>

                    <div>
                        <label for="formaDePagar">Forma de pagamento</label>
                        <select 
                            name="formaDePagar" 
                            required 
                            v-model="formEntregaPagamento.formaPagamento"
                        >
                            <option value="credito">Cartão de crédito</option>
                            <option value="boleto">Boleto bancário</option>
                        </select>
                    </div>
                </div>

                <div v-if="formEntregaPagamento.formaPagamento !== 'boleto'">
                    <div>
                        <label for="numeroCartao">Número do cartão</label>
                        <input 
                            id="numeroCartao" 
                            type="numeroCartao" 
                            name="numeroCartao" 
                            required 
                            v-model="formEntregaPagamento.numeroCartao"
                        >
                    </div>

                    <div>
                        <label for="nomeSobrenome">Nome e sobrenome</label>
                        <input 
                            id="nomeSobrenome" 
                            type="nomeSobrenome"
                            name="nomeSobrenome" 
                            required 
                            v-model="formEntregaPagamento.nomeSobrenome"
                        >
                    </div>
                </div>

                <div v-if="formEntregaPagamento.formaPagamento !== 'boleto'">
                    <div>
                        <label for="dataVencimento">Data de vencimento:</label>
                        <input 
                            id="dataVencimento" 
                            type="dataVencimento" 
                            name="dataVencimento" 
                            required 
                            v-model="formEntregaPagamento.dataVencimento"
                        >
                    </div>

                    <div>
                        <label for="codigoSeguranca">Código de segurança</label>
                        <input 
                            id="codigoSeguranca" 
                            type="codigoSeguranca" 
                            name="codigoSeguranca" 
                            required 
                            v-model="formEntregaPagamento.codigoSeguranca"
                        >
                    </div>
                </div>

            </form>

            <div class="resumo-pedido">

                <h1 class="titulo">Resumo do pedido</h1>
                <div v-if="compra.items">
                    <div 
                        class="item-carrinho" 
                        v-for="(produto, index) in compra.items" 
                        :key="produto+index"
                    >
                        <router-link :to="{ name: 'produto', params: { id: produto.produto.id_produto }}">
                            <img 
                                class="carrinho-img" 
                                :src="produto.produto.imagem_produto" 
                                :alt="produto.produto.nome_produto"
                            >
                        </router-link>

                        <div class="carrinho-info-produto">
                            <h2 class="nome-produto">{{produto.produto.nome_produto}}</h2>

                            <p class="quantidade">
                                Quantidade: 
                                <span class="quantidade-produto">{{produto.quantidade}}</span>
                            </p>
                        </div>

                        <div class="preco-unitario">
                            <h2>Preço unitário</h2>

                            <p>{{produto.produto.valor_produto | numeroPreco}}</p>
                        </div>

                        <div class="preco-total">
                            <h2>Preço total</h2>

                            <p>{{produto.produto.valor_produto * produto.quantidade | numeroPreco}}</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <p class="valor-final">Valor Final + Frete: 
                        <span>{{compra.valor_final | numeroPreco}}</span>
                    </p>

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

       <PedidoFeito v-if="pedidoFeito">
            <p>PARABÉNS!! Seu pedido foi feito. ;)</p>
            <br>
            <p>Agora é so aguardar.</p>
       </PedidoFeito>

    </section>
</template>

<script>

import PedidoFeito from '../components/PedidoFeito.vue'

export default {
    name: 'concluirpedido',
    components: {
        PedidoFeito,
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
            pedidoFeito: null
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
        
        submit() {
            document.querySelector('.btn-pedido').style.display = 'none'
            document.querySelector('.formulario-entrega').style.display = 'block'
        },

        confirmarPedido() {
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
                formData.append('valor_pago', parseInt(this.compra.valor_final))
                formData.append('qntd_parcela', 2)
                formData.append('quantidade', produto.quantidade)
                formData.append('id_produto_comprado', produto.produto.id_produto)
                formData.append('email_comprador', this.$store.state.user.data.email)
                formData.append('data_venda', date.toISOString().slice(0,10))
                formData.append('status_venda', 'Processamento')
                formData.append('nome_produto', produto.produto.nome_produto)

                fetch('https://restapiecomerce.herokuapp.com/venda/', {
                    method: 'POST',
                    body: formData
                }).then(() => {
                    this.pedidoFeito = true;
                    this.$store.commit('ZERAR_CARRINHO')
                    setTimeout(() => {
                        this.pedidoFeito = false;
                        this.$router.push("/");
                    }, 1000);
                })
            })
            
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
    margin-bottom: 0px;
}

.concluir-pedido {
    margin-top: 160px;
}

.titulo-formulario {
    margin-bottom: 40px;
    margin-top: 60px;
}

.form {
    margin-bottom: 60px;
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
/* RESUMO DO PEDIDO */
.resumo-pedido {
    margin-bottom: 60px;
}

.resumo-pedido h1 {
    margin-bottom: 40px;
}

.nome-produto {
    text-align: initial;
}

.item-carrinho {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    padding: 20px 0px;
    position: relative;
    text-align: center;
    background-color: #F3F2F2;
}

.carrinho-img {
    height: 200px;
    width: 350px;
}

.carrinho-info-produto {
    margin-left: 20px;
}

h2 {
    font-size: 30px;
}

.quantidade-produto {
    color: #ada9a9;
}

.carrinho-info-produto p{
    font-size: 18px;
    color: #000;
    margin-top: 20px;
}

.carrinho-info-produto p:nth-child(2){
    margin-top: 125px;
}

.preco-unitario p, .preco-total p {
    color: #747070;
    font-weight: bold;
    font-size: 18px;
    margin-top: 130px;
}

.valor-final {
    display: block;
    font-weight: bold;
    font-size: 24px;
    text-align: right;
}

@media (max-width: 440px) {
    .form > div {
        display: block;
    }

    .form > div div {
        width: 100%;
    }
}

</style>