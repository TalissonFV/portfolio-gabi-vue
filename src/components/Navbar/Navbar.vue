<template>
  <nav :class="$style.navbar">
    <RouterLink to="/" style="text-decoration: none; color: inherit;">
      <div :class="$style.logoTitle">
        <img :src="logo" :class="$style.navbarLogo" alt="Logo">
        <span :class="$style.navbarTitle">Gabi Kamui</span>
      </div>
    </RouterLink>
    
    <div :class="$style.menuContainer">
      <!-- Menu Mobile -->
      <button v-if="isMobile" 
              :class="$style.menuButton" 
              @click="toggleMenu">
        <img :src="menuIcon" alt="Menu">
      </button>
      
      <!-- Menu Desktop -->
      <transition name="fade">
        <ul v-if="!isMobile || showMenu" 
            :class="[$style.navList, { [$style.mobileMenu]: isMobile }]">
          <li><RouterLink to="/projetos">Projetos</RouterLink></li>
          <li><RouterLink to="/sobre-mim">Sobre mim</RouterLink></li>
          <li><RouterLink to="/processo-criativo">Processo criativo</RouterLink></li>
          <li><RouterLink to="/contato">Contato</RouterLink></li>
        </ul>
      </transition>
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
      isMobile: false,
      showMenu: false
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style lang="scss" module>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #F3A86D;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;

  .logoTitle {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navbarLogo {
    width: 50px;
    height: auto;
    
    @media (max-width: 480px) {
      width: 40px;
    }
  }

  .navbarTitle {
    color: #CC6D59;
    font-family: 'Sen', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .menuContainer {
    position: relative;
  }

  .menuButton {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    
    img {
      width: 32px;
      height: 32px;
    }
  }

  .navList {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: #ffffff;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobileMenu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #F3A86D;
    width: 200px;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 1rem;

    @media (min-width: 769px) {
      display: none;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>