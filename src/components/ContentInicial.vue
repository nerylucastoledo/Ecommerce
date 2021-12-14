 <template>
  <section class="home-content">
    
    <div class="content-image">
      <div class="container">
        <h2>A bicicleta que você sonha</h2>

        <p>
          Para ter a melhor bicicleta você deve fazer a escolher certa. A LucasBiker chegou para 
          revolucionar a forma de vender bicicletas no país. Faça a escolha certa
        </p>

        <a href="#ultimos-lancamentos" class="comprar-bicicleta">Comprar</a>
      </div>
    </div>

    <div class="container">
      <div class="info-ecommerce">
        <div>
          <font-awesome-icon icon="truck" size="3x"/>

          <p>Entregamos para todo o Brasil.</p>
        </div>

        <div>
          <font-awesome-icon icon="credit-card" size="3x"/>

          <p>Parcelamos em 12x sem juros.</p>
        </div>

        <div>
          <font-awesome-icon icon="headset" size="3x"/>

          <p>Suporte 24 horas.</p>
        </div>

        <div>
          <font-awesome-icon icon="money-bill-wave" size="3x"/>

          <p>Pagamento seguro</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  name: 'Home',
}

</script>

<style scoped>

.home-content {
  margin-top: 100px;
  margin-bottom: 60px;
}

.content-image {
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: url(../assets/test_bg_2.webp) no-repeat;
  background-size: cover;
  background-position: center;
}

.content-image h2 {
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
}


.content-image p {
  max-width: 800px;
  font-size: 1rem;
  line-height: 1.8;
  padding: 1rem 0;
  color: #eee;
  margin-bottom: 20px;
}

/* INFO ECOMMERCE */
.info-ecommerce {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 20px;
}

.info-ecommerce > div {
  margin: 0 8px;
}

.info-ecommerce p {
  margin-top: 10px;
  color: #222;
}

.info-ecommerce {
  text-align: center;
  color: #FFBA00;
}

.info-ecommerce div:hover {
  color: #222;
  transition: .3s;
}

.comprar-bicicleta {
  padding: 15px 40px;
}

@media (max-width: 990px) {

  .content-image {
    background-position: left;
    justify-content: center;
    text-align: center;
  }

  .content-image h2 {
    font-size: 4.5rem;
  }

  .content-image p {
    font-size: 1.5rem;
  }

}

@media (max-width: 700px) {
  .content-image {
    padding: 20px 0px;
  }

  .info-ecommerce {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  .info-ecommerce div:nth-child(3), .info-ecommerce div:nth-child(4) {
    margin-top: 20px;
  }

  .info-ecommerce p {
    font-size: 14px;
  }
}

@media (max-width: 510px) {

  .content-image h2 {
    font-size: 3rem;
  }

  .content-image p {
    font-size: 1rem;
  }
}


</style>
