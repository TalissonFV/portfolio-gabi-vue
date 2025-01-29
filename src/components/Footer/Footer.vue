<template>
  <footer>
    
    <div >
        <img :src="logo"  :class="$style.footerLogo" ></img>
        <span :class="$style.footerTitle">Gabi Kamui</span>
    </div>
    <div :class="$style.footerRights">
        <span> <v-icon icon="far fa-copyright" aria-hidden="true"></v-icon> {{new Date().getFullYear()}} Todos os direitos reservados </span>
    </div>
    <div :class="$style.footerSocials">
      <v-icon :class="$style.footerSocialsIcons" icon="fab fa-instagram" ></v-icon>
      <v-icon :class="$style.footerSocialsIcons" icon="fab fa-linkedin" ></v-icon>
      <v-icon icon="fab fa-behance" ></v-icon>
        
    </div>
  </footer>

</template>

<script setup>
import logo from '../../assets/img/logo-light.svg'


</script>

<style lang="scss" module>
footer {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #CC6D59;
    margin-top: auto;
    padding: 20px;

    .footerLogo {
        color: #F3A86D;
        width: 50px;
    }

    .footerTitle {
        padding-left: 20px;
        color: #F3A86D;
        font-weight: 700;
        font-size: larger;
        bottom: 20px;
        position: relative;
    }
    .footerSocials{
        font-size: larger;

        .footerSocialsIcons {
            padding-right: 10px;
        }
    }
}
</style>