<template>
    <form action="#" @submit.prevent="cadastrarBicicleta" class="container">
        <label for="categoria">Categoria</label>
        <select name="categoria" id="categoria" v-model="form.categoria">
            <option value="Racing">Racing</option>
            <option value="Retro">Retro</option>
            <option value="Motorizada">Motorizada</option>
        </select>

        <label for="nome_produto">Nome do Produto</label>
        <input 
            id="nome_produto" 
            type="text" 
            name="nome_produto" 
            autocomplete="nome_produto" 
            required 
            v-model="form.nome_produto"
        >

        <label for="cor_produto">Cor do Produto</label>
        <input 
            id="cor_produto" 
            type="text" 
            name="cor_produto" 
            autocomplete="cor_produto" 
            required 
            v-model="form.cor_produto"
        >

        <label for="quantidade_estoque">Quantidade de Estoque</label>
        <input 
            id="quantidade_estoque" 
            type="number" 
            name="quantidade_estoque" 
            autocomplete="quantidade_estoque" 
            required 
            v-model="form.quantidade_estoque"
        >

        <label for="valor_produto">Valor do Produto</label>
        <input 
            id="valor_produto" 
            type="number" 
            name="valor_produto" 
            autocomplete="valor_produto" 
            required 
            v-model="form.valor_produto"
        >

        <label for="preco_antigo">Preço Antigo</label>
        <input 
            id="preco_antigo" 
            type="number" 
            name="preco_antigo" 
            autocomplete="preco_antigo" 
            required 
            v-model="form.preco_antigo"
        >

        <label for="imagem_produto">Imagem</label>
        <input 
            id="imagem_produto" 
            type="file" 
            name="imagem_produto" 
            autocomplete="imagem_produto" 
            required 
            ref="imagem_produto"
        >

        <div>
            <button class="btn btn-login" type="submit">Login</button>
        </div>
    </form>
</template>

<script>


export default {

    props: [
        "produto"
    ],

    data() {
        return {
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
        cadastrarBicicleta() {
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
    },

    created() {
        if(this.produto) {
            this.form.categoria = this.produto.categoria
        }
    }
}
</script>

<style scoped>

.cadastrar-item {
    display: flex;
    height: 100%;
    background-color: #f5f7fb;
    margin-bottom: -60px;
}

form {
    width: 900px;
    margin-bottom: 60px;
}

select {
    height: 40px;
    margin-bottom: 20px;
    font-size: 18px;
}

input {
    max-width: 100%;
    margin-bottom: 20px;
}

.formulario {
    display: block;
    margin: 160px auto 60px;
}

</style>