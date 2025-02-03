<script>
import { RouterView } from 'vue-router';
import Footer from './components/Footer/Footer.vue'
import Navbar from './components/Navbar/Navbar.vue'

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>

<template>
   <div>
      <Navbar></Navbar>
      <main>
        <RouterView />
      </main>
      <Footer></Footer>
    </div>
</template>

<style scoped>
div {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: flex-start
}
</style>
