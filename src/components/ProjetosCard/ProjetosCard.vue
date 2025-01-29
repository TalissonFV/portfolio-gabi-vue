<template>
  <div :class="$style.projetoCard">
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-title :class="$style.projetoTitle" style="overflow: auto;">
        {{ this.projeto.title }}
      </v-card-title>
  
      <v-img
        height="200px"
        :src="this.imageSrc"
        cover
      ></v-img>
  
      
  
      <v-card-text :class="$style.projetoSubtitle">
        {{ this.projeto.description }}
      </v-card-text>
  
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    projeto: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },

  computed: {
    imageSrc() {
      const imagePath = import.meta.glob('../../assets/img/projetos/*.{jpg,png,svg}', { eager: true });
      
      const image = imagePath['../../assets/img/projetos/'+ this.projeto.image]
                    
      return image ? image.default : ''
    }
  }
}
</script>

<style lang="scss" module>

.projetoCard {
  background-color: #F3A86D;
  border-radius: 5%;
  
}

.projetoTitle {
  padding: 20px;
  background-color: #F3A86D;
  
}

.projetoSubtitle {
  background-color: #F3A86D;
}

</style>