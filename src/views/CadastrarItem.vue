<template>
    <section class="cadastrar-item">
        <div class="sidebar">
            <BarraLateral/>
        </div>

        <div class="formulario">
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