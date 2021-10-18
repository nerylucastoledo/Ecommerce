<template>
    <section class="lucasbiker-home">
        <div class="background"></div>
        <ListMotorizada>
            <h1 class="titulo-principal">MOTORIZADA</h1>
        </ListMotorizada>
    </section>
</template>

<script>

import ListMotorizada from './ListMotorizada.vue'

export default {

    components: {
        ListMotorizada
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
    background-image: url('../assets/motorizada-2.png');
}

.titulo-principal {
    margin-bottom: 0px;
}

</style>