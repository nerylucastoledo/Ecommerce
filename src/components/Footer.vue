<template>
    <footer>
        <section>
            <div class="container footer-info">
                <div class="footer-historia">
                    <h2 class="titulo-footer">NOSSA HISTÓRIA</h2>
                    <p>Quando iniciamos a LucasBiker queriamos apenas um produto que adoraríamos utilizar. Eramos apaixonados por pedalar e também por fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho na garagem da nossa casa.</p>
                </div>

                <div class="footer-contato">
                    <h2 class="titulo-footer">CONTATOS</h2>
                    <p>+55 (35)9 9742-0423</p>
                    <p>lucasnerytoledo@hotmail.com</p>
                    <p>Rua Tabaranas, 125 - Pouso Alegre, MG</p>
                </div>

                <div  class="footer-sociais">
                    <h2 class="titulo-footer">REDES SOCIAIS</h2>
                    <img src="@/assets/icon-facebook.png" alt="Icon Facebook">
                    <img src="@/assets/icon-instagram.png" alt="Icon Instagram">
                    <img src="@/assets/icon-twitter.png" alt="Icon Twitter">
                </div>
            </div>
        </section>

        <section>
            <p>Lucas Nery 2021 - Alguns Direitos Reservados.</p>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

footer {
    position: relative;
    top: 0px;
}

footer > section {
    background-color: #F3F2F2;
    padding: 20px 0px;
}

footer section:nth-child(2) {
    background-color: #CC2131;
    padding: 20px 0px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
}

.footer-info {
    display: flex;
    justify-content: space-between;
}

.footer-historia {
    max-width: 33%;
}

.footer-historia p {
    margin-top: 20px;
    font-size: 16px;
}

.footer-contato h2 {
    margin-bottom: 20px;
} 

.footer-contato p {
    font-size: 16px;
    margin: 10px 0px;
}

.footer-sociais img{
    width: 40px;
    height: 40px;
    margin: 20px 10px 0px;
}

.titulo-footer {
    color: #CC2131;
    font-style: italic;
}

@media (max-width: 800px) { 
    .footer-info {
        display: block;
        text-align: center;
    }

    .footer-info div {
        margin-bottom: 40px;
    }

    .footer-historia {
        max-width: 100%;
    }
}

</style>