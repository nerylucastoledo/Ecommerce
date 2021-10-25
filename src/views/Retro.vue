<template>
    <section class="lucasbiker-home">
        <div class="background"></div>
        <ListRetro>
            <h1 class="titulo-principal">RETRÔ</h1>
        </ListRetro>
    </section>
</template>

<script>

import ListRetro from '../components/ListRetro.vue'

export default {

    components: {
        ListRetro
    }
    
}
</script>

<style scoped>

.lucasbiker-home {
  margin-top: 60px;
  margin-bottom: 60px;
}

.lucasbiker-home h1 {
    text-align: center;
}

.background {
    background-image: url('../assets/retro-2.png');
}

.titulo-principal {
    margin-bottom: 0px;
}

</style>