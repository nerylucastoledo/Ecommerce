<template>
    <section class="cadastrar-item">
        <div class="sidebar">
            <HeaderDashboard/>
        </div>

        <h1>Cadastrar novo item</h1>

        <div class="formulario container">
            <FormItem>
                <div>
                    <button class="btn btn-login" type="submit" @click.prevent="cadastrarBicicleta">Cadastrar Item</button>
                </div>
            </FormItem>
        </div>
    </section>
</template>

<script>

import HeaderDashboard from '../components/HeaderDashboard.vue'
import FormItem from '../components/FormItem.vue'

export default {

    components: {
        HeaderDashboard,
        FormItem
    },

    methods: {
        cadastrarBicicleta() {
            this.$root.$emit('cadastrarBicicleta');
        }
    }
    
}
</script>

<style scoped>

.cadastrar-item {
    margin-bottom: -60px;
}

.cadastrar-item > div:nth-child(2) {
    margin-top: 40px;
}

.cadastrar-item h1 {
    font-size: 42px;
    text-align: center;
    margin: 40px 0 40px;
}

.sidebar {
    height: 100%;
}

@media (max-width: 640px) {
    .cadastrar-item h1 {
        font-size: 2rem;
    }
}

</style>