<template>
    <section class="bicicletas-pagina">
        <div></div>
        <ListRetro>
            <h1 class="titulo">RETRÔ</h1>
        </ListRetro>
    </section>
</template>

<script>

import ListRetro from '../components/ListRetro.vue'

export default {

    components: {
        ListRetro
    },

    created() {
        document.title =  'Retrô - LucasBiker'
    }
    
}
</script>

<style scoped>

</style>