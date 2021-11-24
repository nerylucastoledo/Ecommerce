<template>
    <section class="bicicletas-pagina">
        <ListItem lista="Retro">
            <h1 class="titulo">Retrô</h1>
        </ListItem>
    </section>
</template>

<script>

import ListItem from '../components/ListItem.vue'

export default {

    components: {
        ListItem
    },

    created() {
        document.title =  'Retrô - LucasBiker'
    }
    
}
</script>

<style scoped>

</style>