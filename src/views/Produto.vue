<template>
    <div class="produto">
        {{tutorials}}
    </div>
</template>

<script>


export default {
    name: 'Produto',

    data() {
        return {
            tutorials: 'lucas'
        }
    },

    methods: {
        getProduto() {
            fetch('https://ecommerce-lucas-default-rtdb.firebaseio.com/produtos/racing.json')
            .then(req => req.json())
            .then(res => {
                console.log(res)
            })
            /*firebase.database().ref('produtos').on('value', function(snapshot){
                snapshot.forEach((item) => {
                    console.log(item.val())
                })
            }) */
        }
    },

    created() {
        this.getProduto()
    }
}
</script>

<style>

.produto {
    margin-top: 100px;
}

</style>