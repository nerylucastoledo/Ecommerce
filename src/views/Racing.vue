<template>
    <section class="lucasbiker-home">
        <div class="background"></div>
        <ListRacing>
            <h1 class="titulo-principal">RACING</h1>
        </ListRacing>
    </section>
</template>

<script>

import ListRacing from '../components/ListRacing.vue'

export default {

    components: {
        ListRacing
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
    background-image: url('../assets/racing.png');
}

.titulo-principal {
    margin-bottom: 0px;
}

</style>