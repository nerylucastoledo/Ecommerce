<template>
    <section class="bicicletas-pagina">
        <div></div>
        <ListRacing>
            <h1 class="titulo">RACING</h1>
        </ListRacing>
    </section>
</template>

<script>

import ListRacing from '../components/ListRacing.vue'

export default {

    components: {
        ListRacing
    },

    created() {
        document.title =  'Racing - LucasBiker'
    }
    
}
</script>

<style scoped>

</style>