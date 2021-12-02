<template>
    <section class="cadastrar-item">
        <div class="sidebar">
            <BarraLateral/>
        </div>

        <div class="formulario container">
            <FormItem/>
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
    
}
</script>

<style scoped>

.cadastrar-item {
    display: flex;
}

.cadastrar-item > div:nth-child(2) {
    margin-top: 60px;
}

.sidebar {
    height: 100%;
}

</style>