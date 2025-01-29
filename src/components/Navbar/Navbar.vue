<template>
  <nav>
    <RouterLink to="/" style="text-decoration: none; color: inherit;">
    <div :class="$style.logoTitle">
        <img :src="logo" :class="$style.navbarLogo"></img>
        <span :class="$style.navbarTitle">Gabi Kamui</span>
      </div>
    </RouterLink>
    <div>
      <span v-if="isMobile" :class="$style.navbarMenuIcon">
        <img :src="menuIcon"></img>
      </span>
      <span v-else>
        <ul>
            <li><RouterLink to="/projetos">Projetos</RouterLink></li>
            <li><RouterLink to="/sobre-mim">Sobre mim</RouterLink></li>
            <li><RouterLink to="/processo-criativo">Processo criativo</RouterLink></li>
            <li><RouterLink to="/contato">Contato</RouterLink></li>
        </ul>
      </span>
    </div>
      
  </nav>
</template>

<script>
import logo from '../../assets/img/logo.svg'
import menuIcon from '../../assets/icons/menu-list-icon.svg'
import { RouterLink } from 'vue-router';

export default {
  
  
  data() {
    return {
      logo: logo,
      menuIcon: menuIcon,
      isMobile: window.screen.width < 600
    }
  }
}
</script>

<style lang="scss" module>
nav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #F3A86D;
    font-family: 'Epilogue', sans-serif;

    .logoTitle{
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .navbarLogo {
        width: 50px;
        padding-left: 20px;
    }

    .navbarTitle {
        color: #CC6D59;
        font-weight: 700;
        font-size: larger;
        padding-left: 20px;
    }

    .navbarMenuIcon {
        margin-left: auto;
        padding-right: 10px;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: baseline;
        align-content: flex-end;
        list-style-type: none;
        margin-left: auto;

        li {
            padding-right: 30px;

            a {
                color: inherit;
                text-decoration-line: none;
                font-weight: 700;
            }
        }
    }
}


@media only screen and (hover: none) and (pointer: coarse){
    .element-to-hide {
      display: none;
    }
  }
</style>