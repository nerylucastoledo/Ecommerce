<template>
    <section class="bicicletas-pagina">
        <ListItem lista="Racing">
            <h1 class="titulo">RACING</h1>
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
        document.title =  'Racing - LucasBiker'
    }
    
}
</script>