<template>
  <div :class="$style.mainBody" >
      <div :class="$style.backgroundDiv">
          <div :class="$style.textContent">
              <h1>Eu sou um Designer gráfico, e amo sapos.</h1>
              <span>Olá! Boas vindas ao meu portfólio, sou um estudante de Design Gráfico que adora aprender coisas novas, aqui você pode conhecer mais sobre mim e meus trabalhos.</span>
          </div>
      </div>
      <div :class="$style.botoesMain">
          <button>Explorar Projetos</button>
          <button>Conhecer Gabi</button>
      </div>

      <div :class="$style.ultimosProjetos">
        <span><h2>Últimos projetos</h2></span>

        <div :class="$style.projetosCards">
          <ProjetosCard v-for="(projeto, index) in ultimosProjetos" :key="index" :projeto="projeto" ></ProjetosCard>
        </div>

        <button>
          Ver Mais
        </button>
      </div>

      <div :class="$style.sobreMim">

        <span><h2>Conheça mais sobre mim</h2></span>
        <v-card class="mx-auto" max-width="750" >
          <div :class="$style.cardSobreMim">
            <v-row> <!-- no-gutters remove o espaçamento entre as colunas -->
              <v-col cols="6"> <!-- Cada coluna ocupa 6 de 12 colunas (50% da largura) -->
                <v-img
                  :src="sapo1"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                  :src="sapo2"
                ></v-img>
              </v-col>
            </v-row>
          </div>
        </v-card>
        <div class="mx-auto" :class="$style.sobreMimText">
          <h4 class="pb-10">Eu adoro sapos, arte e pesquisas.</h4>
          <h5>Meu nome é Gabi e sou uma entusiasta do design thinking. Para mim, cada projeto é uma jornada criativa repleta de descobertas e inovação. Fazer pesquisas no âmbito do design thinking é como desvendar um quebra-cabeça fascinante.</h5>
        </div>
      </div>

      <div class="pt-10 pb-10" :class="$style.icones" >
        <div class="pb-10">
          <v-img :src="iconeSapo" height="70px" max-width="100px"></v-img>
          <v-img :src="iconeSapo" height="70px" max-width="100px"></v-img>
          <v-img :src="iconeSapo" height="70px" max-width="100px"></v-img>
        </div>
        <button>
          Saiba mais
        </button>
      </div>



  </div>
</template>

<script>
import ProjetosCard from '../../components/ProjetosCard/ProjetosCard.vue';
import sapo1 from '../../assets/img/sobreMim/sapo1.png'
import sapo2 from '../../assets/img/sobreMim/sapo2.png'
import iconeSapo from '../../assets/icons/icone-sapo.svg'


export default {
  components: {
    ProjetosCard
  },
  data() {
    return {
      sapo1: sapo1,
      sapo2: sapo2,
      iconeSapo: iconeSapo,
      ultimosProjetos: [
        {title: 'Pacote Gráfico Vampiro a Máscara', description: 'Pacote Gráfico para canal de stream com temática do RPG Vampiro a Máscara.', image:'projeto-vampiros.svg'},
        {title: 'Projeto: APP alilas', description: 'A alilas é um projeto acadêmico sobre um aplicativo de interação e aprendizado.', image:'projeto-app-lilas.svg'},
        {title: 'Ilustração TVZ', description: 'Trabalho acadêmico de ilustração vetorial promovendo aplicativo TVZ', image:'projeto-tvz.svg'}
      ]
    }
  }
}
</script>

<style lang="scss" module>
.mainBody {
    text-align: center;
    margin: 0;
    background-image: url(../../assets/img/main-body.svg);
    background-repeat: no-repeat;
    background-position: top;


    @media screen and (max-width: 750px) {
        background-size:cover;

    }

    h1 {  
        font-weight: 700;
        color: #FFFFFF;
    }

    span {
        display: inline;
        word-wrap: break-word;
    }
}

.ultimosProjetos {
  position: relative;
  background-color: #FFFFFF;
  
  
  h2 {
    font-weight: 700;
    color: black;
    padding: 20px 20px;
  }

  .projetosCards {
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
    padding-bottom: 20px;
  }

  button {
    /* primary/50 */
    padding: 8px 20px;
    background: #F3A86D;
    border-radius: 32px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
  }
}

.sobreMim {
  background-color: #FFFFFF;
  color: black;

  h2 {
    padding-top: 50px;
    padding-bottom: 10px;
  }

  .cardSobreMim {
    background-color: #F9D3B6;
    padding: 10px;
  }

  .sobreMimText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    max-width: 700px;
    

    h4 {
      text-align: left;
      /* h4 */
      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #333333;
    }

    h5 {

      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      text-align: justify;

      color: #333333;
    }
  }
}

.icones {
  background-color: #FFFFFF;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    /* primary/50 */
    padding: 8px 20px;
    background: #F3A86D;
    border-radius: 32px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
  }
}

.backgroundDiv{
    position: relative;
    width: 100%;
    height: 570px; // Adjust height as needed
    background: url('../../assets/img/mainTextBackground.svg');
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    
    // Flexbox for perfect centering
    display: flex;
    justify-content: center;
    align-items: center;
    
    // Responsive adjustments
    @media screen and (max-width: 665px) {
        top: 110px;
    }

    @media screen and (min-width: 665px) {
        margin: auto;
        width: 725px;
        transform: scale(0.8);
    }
  }


.textContent{
  text-align: center;
  color: white; // Adjust text color for readability
  max-width: 80%; // Prevent text from stretching full width
  font-family: 'Sen', sans-serif;
}


.botoesMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 100px;


    button {
        padding: 9px 41px;
    
        /* primary/50 */
        background: #F3A86D;
        /* white */
        border: 1px solid #FFFFFF;
        border-radius: 18px;
        color: #FFFFFF;
        font-weight: 600;
        min-width: 200px;
    }

}

</style>