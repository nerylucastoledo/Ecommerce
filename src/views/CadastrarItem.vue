<template>
    <section class="cadastrar-item">
        <div class="sidebar">
            <BarraLateral/>
        </div>

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

import BarraLateral from '../components/BarraLateral.vue'
import FormItem from '../components/FormItem.vue'

export default {

    components: {
        BarraLateral,
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
    display: flex;
}

.cadastrar-item > div:nth-child(2) {
    margin-top: 160px;
}

.sidebar {
    height: 100%;
}

</style>