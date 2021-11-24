<template>
    <section class="bicicletas-pagina">
        <ListItem lista="Motorizada">
            <h1 class="titulo">Motorizada</h1>
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
        document.title =  'Motorizada - LucasBiker'
    }
    
}
</script>

<style scoped>

</style>