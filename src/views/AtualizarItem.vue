<template>
    <section class="cadastrar-item">
        <div class="sidebar">
            <BarraLateral/>
        </div>
        
        <div v-if="todos_produtos" class="container atualizar-items">
            <div v-for="produto in todos_produtos" :key="produto.id_produto">
                <div class="item" @click="atualizarBicicleta(produto)">
                    <img :src="produto.imagem_produto" :alt="produto.nome_produto + 'imagem'">
                    <p>{{produto.nome_produto}}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import BarraLateral from '../components/BarraLateral.vue'

export default {

    components: {
        BarraLateral
    },

    data() {
        return {
            todos_produtos: null,
            form: {
                categoria: null,
                nome_produto: null,
                cor_produto: null,
                quantidade_estoque: null,
                valor_produto: null,
                preco_antigo: null,
                imagem_produto: null,
                avaliacoes: []
            }
        }
    },

    methods: {
        atualizarBicicleta() {
            const file = this.$refs.imagem_produto.files[0];
            const form = new FormData();

            form.append("categoria", this.form.categoria);
            form.append("nome_produto", this.form.nome_produto);
            form.append("cor_produto", this.form.cor_produto);
            form.append("quantidade_estoque", this.form.quantidade_estoque);
            form.append("valor_produto", parseInt(this.form.valor_produto));
            form.append("preco_antigo", parseInt(this.form.preco_antigo));
            form.append("avaliacoes", JSON.stringify(this.form.avaliacoes));
            form.append("imagem_produto", file);

            fetch('https://restapiecomerce.herokuapp.com/produto/', {
                method: 'POST',
                body: form
            }).then(() => {
                this.$router.push({name: 'Dashboard'})
            })
        },

        pegarTodasBicicletas() {
            fetch('https://restapiecomerce.herokuapp.com/produto/')
            .then(req => req.json())
            .then(res => {
                this.todos_produtos = res
            })
        }
    },

    created() {
        this.pegarTodasBicicletas()
    }
    
}
</script>

<style scoped>

.atualizar-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.atualizar-items > div {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}

.atualizar-items img {
    max-width: 350px;
    height: 250px;
}

.item {
    cursor: pointer;
}

</style>