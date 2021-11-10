<template>
    <section class="bicicletas-pagina">
        <ListMotorizada>
            <h1 class="titulo">MOTORIZADA</h1>
        </ListMotorizada>
    </section>
</template>

<script>

import ListMotorizada from '../components/ListMotorizada.vue'

export default {

    components: {
        ListMotorizada
    },

    created() {
        document.title =  'Motorizada - LucasBiker'
    }
    
}
</script>

<style scoped>

</style>