<template>
    <section>
        <form action="#" class="formulario-item container">
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

            <slot></slot>

        </form>
    </section>
</template>

<script>


export default {

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
                avaliacoes: [],
                metodo: null,
                id_produto: null
            }
        }
    },

    mounted() {
        this.$root.$on('FormItem', (from) => {
            this.form.id_produto = from.id_produto
            this.form.categoria = from.categoria
            this.form.nome_produto = from.nome_produto,
            this.form.cor_produto = from.cor_produto,
            this.form.quantidade_estoque = from.quantidade_estoque,
            this.form.valor_produto = from.valor_produto,
            this.form.preco_antigo = from.preco_antigo,
            this.form.imagem_produto = ''
            if(from.avaliacoes) {
                this.form.avaliacoes =from.avaliacoes
            }
        });

        this.$root.$on('cadastrarBicicleta', () => {
            this.cadastrarOuAtualizarItem(this.form, 'POST', '')
        });

        this.$root.$on('atualizarDados', () => {
            this.cadastrarOuAtualizarItem(this.form, 'PUT', this.form.id_produto + '/')
        });
    },

    methods: {
        cadastrarOuAtualizarItem(formulario, metodo, url_final) {
            const file = this.$refs.imagem_produto.files[0];
            const form = new FormData();

            form.append("categoria", formulario.categoria);
            form.append("nome_produto", formulario.nome_produto);
            form.append("cor_produto", formulario.cor_produto);
            form.append("quantidade_estoque", formulario.quantidade_estoque);
            form.append("valor_produto", parseInt(formulario.valor_produto));
            form.append("preco_antigo", parseInt(formulario.preco_antigo));
            form.append("avaliacoes", JSON.stringify(formulario.avaliacoes));
            form.append("imagem_produto", file);

            fetch('https://restapiecomerce.herokuapp.com/produto/' + url_final, {
                method: metodo,
                body: form
            }).then(() => {
                this.$router.push({name: 'Dashboard'})
            })
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

.formulario-item {
    max-width: 100%;
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