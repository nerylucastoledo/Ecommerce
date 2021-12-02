<template>
    <div class="pop-up">
        <p>Use: 
            <span class="cupom">bike10</span>
        </p>
        <p>Para 10% de desconto</p>
        <p class="fechar-cupom" @click="fecharCupom">X</p>
    </div>
</template>

<script>
export default {
    methods: {
        fecharCupom() {
            document.querySelector('.pop-up').style.display = 'none'
        }
    }
}
</script>

<style>

.cupom {
    color: #FFBA00;
    font-weight: bold;
}

.pop-up {
    font-size: 14px;
    text-align: center;
    position: fixed;
    background-color: #222;
    max-height: 100%;
    display: block;
    right: 5%;
    bottom: 200px;
    color: #fff;
    padding: 8px;
    border-radius: 20px;
    z-index: 2000;
    -webkit-animation: snowman 1s alternate-reverse  ease-in-out;
    animation: snowman 1s alternate ease-in-out;
}

.fechar-cupom {
    position: absolute;
    top: -5px;
    right: 0;
    color: #fff;
    background-color: coral;
    border-radius: 50%;
    padding: 3px;
    font-size: 14px;
    cursor: pointer;
}

@-webkit-keyframes snowman {
    from {-webkit-transform: rotate(1deg)}
    to   {-webkit-transform: rotate(-1deg)}
}

@keyframes snowman {
    from {transform: rotate(4deg)}
    to   {transform: rotate(-4deg)}
}

@media (max-width: 510px) {

.pop-up {
    right: 5%;
    bottom: 30px;
}
}

</style>