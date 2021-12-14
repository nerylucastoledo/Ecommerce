<template>
    <footer>
        <section>
            <div class="inserir-email">
                <div class="container">
                    <h1>Quer ficar sabendo das nossas novidades?</h1>

                    <p>Insira seu melhor e-mail para receber promoções e muito mais.</p>

                    <form class="inscrever" method="post">
                        <input 
                            id="email" 
                            type="email" 
                            name="email" 
                            autocomplete="email" 
                            required 
                            autofocus 
                            v-model="form.email"
                        >
                        
                        <button type="submit" class="btn-increver">Inscrever</button>
                    </form>
                </div>
            </div>

            <div class="footer-info">
                <div class="container">
                    <div class="footer-historia">
                        <h2 class="titulo-footer">NOSSA HISTÓRIA</h2>

                        <p>Quando iniciamos a LucasBiker queriamos apenas um produto que adoraríamos utilizar. Eramos apaixonados por pedalar e também por fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho na garagem da nossa casa.</p>
                    </div>

                    <div class="footer-contato">
                        <h2 class="titulo-footer">CONTATOS</h2>

                        <p>(35)9 9742-0423</p>

                        <p>lucasnerytoledo@hotmail.com</p>

                        <p>Rua Tabaranas, 125 - Pouso Alegre, MG</p>
                    </div>

                    <div  class="footer-sociais">
                        <h2 class="titulo-footer">REDES SOCIAIS</h2>

                        <a target= "_blank" rel="noreferrer" :href="linkedin">
                            <img src="@/assets/linkedin.webp" alt="Icon Linkedin">
                        </a>

                        <a target= "_blank" rel="noreferrer" :href="instagram">
                            <img src="@/assets/instagram.webp" alt="Icon Instagram">
                        </a>

                        <a target= "_blank" rel="noreferrer" :href="whatsapp">
                            <img src="@/assets/whatsapp.webp" alt="Icon Whatsapp">
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="direitos">
            <p>Lucas Nery 2021 - Alguns Direitos Reservados.</p>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'Footer',

      data() {
        return {
            form: {
                email: ""
            },
            linkedin: "https://www.linkedin.com/in/lucas-nery-toledo/",
            instagram: "https://www.instagram.com/lucas_nery6/",
            whatsapp: "https://api.whatsapp.com/send?phone=5535997420423"
        }
    },
}
</script>

<style>

footer {
    position: relative;
}

/* INSERIR EMAIL */
.inserir-email {
  margin-top: 60px;
  background-color: #222;
  padding-bottom: 20px;
}

.inserir-email h1 {
  color: #fff;
  font-size: 34px;
  padding-top: 20px;
  margin-bottom: 20px;
}

.inserir-email p {
  color: #fff;
  font-size: 18px;
}

.inscrever {
  display: flex;
  align-items: flex-end;
}

.inscrever input {
  width: 600px;
  margin-top: 40px;
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: transparent;
}

.btn-increver {
    background-color: transparent;
    border: none;
    border-radius: 10px;
    background-color: #FFBA00;
    height: 100%;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
    padding: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
}

.btn-increver:hover {
  transition: .3s;
  transform: scale(1.1);
}

/* footer historia, contato e redes sociais */

.footer-info {
    background-color: #FFBA00;
    padding: 0 0 40px;
}

.footer-info > div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.footer-info > div div {
    margin-top: 40px;
}

.titulo-footer {
    color: #ffff;
    font-weight: bold;
    font-size: 32px;
}

.footer-historia {
    max-width: 40%;
}

.footer-info p {
    color: #fff;
    margin-top: 10px;
}

.footer-sociais img {
    width: 40px;
    margin: 10px 20px 0;
}

/* DIREITOS */
.direitos {
    background-color: #FFBA00;
    padding: 20px 0 40px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}

@media (max-width: 830px) { 
    .footer-historia {
        display: none;
    }
    .titulo-footer {
        text-align: center;
    }
    .footer-info p {
        text-align: center;
    }
}

@media (max-width: 440px) {
    .inscrever {
        display: block;
    }
    .inscrever input {
        max-width: 100%;
    }
    .btn-increver {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
}

</style>