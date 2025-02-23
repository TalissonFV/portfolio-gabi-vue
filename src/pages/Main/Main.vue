<template>
  <div :class="$style.mainBody" >
    <div :class="$style.mainPage">
      <div :class="$style.backgroundDiv">
        <div :class="$style.textContent">
          <h1>Eu sou um Designer gráfico, e amo sapos.</h1>
          <span>Olá! Boas vindas ao meu portfólio, sou um estudante de Design Gráfico que adora aprender coisas novas, aqui você pode conhecer mais sobre mim e meus trabalhos.</span>
          
          <div :class="$style.botoesMain">
            <a href="#projetos"><button>Explorar Projetos</button></a>
            <a href="#sobre-mim"><button>Conhecer Gabi</button></a>
          </div>
        </div>
      </div>
    </div>

      <div id="projetos" :class="$style.ultimosProjetos">
        <span><h2>Últimos projetos</h2></span>

        <div :class="$style.projetosCards">
          <ProjetosCard v-for="(projeto, index) in ultimosProjetos" :key="index" :projeto="projeto" ></ProjetosCard>
        </div>

        <button>
          Ver Mais
        </button>
      </div>

      <div id="sobre-mim" :class="$style.sobreMim">

        <span><h2>Conheça mais sobre mim</h2></span>
        <v-card :class="$style.cardSobreMim" class="mx-auto" max-width="750" >
          <div>
            <v-row> <!-- no-gutters remove o espaçamento entre as colunas -->
              <v-col cols="6"> <!-- Cada coluna ocupa 6 de 12 colunas (50% da largura) -->
                <v-img
                  :src="sapo2"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                  :src="sapo1"
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
        <div :class="$style.imagensIcones" class="pb-16">
          <v-img v-for="(icon, index) in icones" :src="icon.default" :key="index" height="110px" max-width="200px"></v-img>
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


export default {
  components: {
    ProjetosCard
  },
  data() {
    return {
      sapo1: sapo1,
      sapo2: sapo2,
      icones: [],
      ultimosProjetos: [
        {title: 'Pacote Gráfico Vampiro a Máscara', description: 'Pacote Gráfico para canal de stream com temática do RPG Vampiro a Máscara.', image:'projeto-vampiros.svg'},
        {title: 'Projeto: APP alilas', description: 'A alilas é um projeto acadêmico sobre um aplicativo de interação e aprendizado.', image:'projeto-app-lilas.svg'},
        {title: 'Ilustração TVZ', description: 'Trabalho acadêmico de ilustração vetorial promovendo aplicativo TVZ', image:'projeto-tvz.svg'}
      ]
    }
  },

  created() {
      const imagePath = import.meta.glob('../../assets/icons/main/*.{jpg,png,svg}', { eager: true })
      const imagesSrc = Object.values(imagePath)
      this.icones = imagesSrc
  }
}
</script>

<style lang="scss" module>
.mainBody {
  text-align: center;
  width: 100%;

  .mainPage {
    position: relative;
    overflow: hidden;
    height: 100vh;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 100%;
      max-width: 1920px;
      background-image: url(../../assets/img/main-body.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: 0;
      
      @media (min-width: 1440px) {
        background-size: 1440px auto;
      }
    }

    @media (max-width: 768px) {
      height: 80vh;
      min-height: 500px;
    }
  }

  .backgroundDiv {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    margin: 0 auto;
    max-width: 1440px;
  }

  .textContent {
    text-align: justify;
    max-width: 1400px;
    color: #FFFFFF;
    position: relative;
    z-index: 2;
    padding-top: 150px;
    padding-bottom: 40px;
    margin: 0 auto;
    h1 {
      font-weight: 800;
      font-size: 2.5rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    span {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.5;
      display: block;
      max-width: 600px;
      margin: 0 auto 2rem;
    }
  }

  .botoesMain {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 100%;
    margin-top: 30px;

    button {
      padding: 12px 24px;
      background: #F3A86D;
      border: 1px solid #FFFFFF;
      border-radius: 18px;
      color: #FFFFFF;
      font-weight: 600;
      min-width: 200px;
      transition: all 0.3s ease;
      cursor: pointer;

      @media (max-width: 480px) {
        width: 100%;
        max-width: 300px;
      }
    }
  }
}

.ultimosProjetos {
  background-color: #FFFFFF;
  scroll-margin-top: 200px;
  
  
  
  h2 {
    font-weight: 700;
    color: black;
    padding: 20px 20px;
    font-size: 40px;
  }

  .projetosCards {
    max-width: 1440px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    
    align-items: center;
    align-content: stretch;
    margin-top: 20px;
    padding-bottom: 20px;

    @media (min-width: 1640px) {
      margin-left: 12%;
    }
    @media (max-width: 800px) {
      margin-left: 5%;
    }
  }

  button {
    /* primary/50 */
    padding: 5px 40px 5px 40px;
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
  padding-top: 20px;
  scroll-margin-top: 5px;

  h2 {
    padding-top: 50px;
    padding-bottom: 10px;
  }

  .cardSobreMim {
    background-color: #F9D3B6;
    padding: 10px;
    border-radius: 17px;

    img {
      border-radius: 30px;
    }
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

  .imagensIcones {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    
  }

  button {
    /* primary/50 */
    padding: 8px 50px;
    background: #F3A86D;
    border-radius: 32px;
    font-family: 'Sen';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: #FFFFFF;
  }
}

</style>