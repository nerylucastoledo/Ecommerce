<template>
    <section class="atualizar">
        <div class="sidebar">
            <HeaderDashboard/>
        </div>
        
        <div v-if="todosOsProdutos" class="atualizar-items container">
            <div v-for="produto in todosOsProdutos" :key="produto.id_produto">
                <div class="item">
                    <div @click='atualizarItem(produto)'>
                        <img :src="produto.imagem_produto" :alt="produto.nome_produto + 'imagem'">

                        <p>{{produto.nome_produto}}</p>
                    </div>
                    <p class="fechar" @click="deletarItem(produto.nome_produto, produto.id_produto)">
                        X
                    </p>
                </div>
            </div>
        </div>

        <div class="formulario container">
            <div>
                <p class="fechar" @click="fecharModalFormulario">X</p>
                <FormItem>
                    <div>
                        <button class="btn btn-login" type="submit" @click.prevent="atualizarDados">Atualizar Item</button>
                    </div>
                </FormItem>
            </div>
        </div>

    </section>
</template>

<script>

import HeaderDashboard from '../components/HeaderDashboard.vue'
import FormItem from '../components/FormItem.vue'
import { api } from '../service'

export default {

    components: {
        HeaderDashboard,
        FormItem
    },

    data() {
        return {
            todosOsProdutos: null,
        }
    },

    methods: {
        pegarTodasBicicletas() {
            api.get('produto/')
            .then(res => {
                this.todosOsProdutos = res.data
            })
        },

        atualizarItem(item) {
            document.querySelector('.formulario').style.display = 'block'
            window.scrollTo({ top: 0, behavior: "smooth" })
            this.$root.$emit('FormItem', item)
        },

        atualizarDados() {
            this.$root.$emit('atualizarDados');
        },

        deletarItem(nome_produto, id_produto) {
            const confirmar_delete = confirm(`Tem certeza que deseja excluir ${nome_produto}`)
            
            if(confirmar_delete) {
                api.delete(`produto/${id_produto}`)
                .then(() => {
                    this.pegarTodasBicicletas()
                })
            }
        },

        fecharModalFormulario() {
            document.querySelector('.formulario').style.display = 'none'
        },

    },

    created() {
        this.pegarTodasBicicletas()
        document.title =  'Dashboard (Atualizar) - LucasBiker'
    }
    
}
</script>

<style scoped>

.atualizar-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.atualizar-items > div {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}

.atualizar-items img {
    width: 100%;
    object-fit: cover;
    height: 250px;
}

.item {
    cursor: pointer;
}

.formulario {
    display: none;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
}

.formulario::before {
    content: "";
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.8)
}

.formulario > div {
    position: relative;
    top: 15%;
    padding: 20px 10px 5px;
    max-width: 500px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 10px;
}

.fechar {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 16px;
    color: #fff;
    background-color: red;
    padding: 2px 5px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;
}

@media (max-width: 540px) {
    .fechar {
        top: 0px;
        right: 5px;
    }
}

</style>