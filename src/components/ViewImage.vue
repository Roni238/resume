<template>
    <div class="popup"  v-if="getNameCurrentImage.length!==0">
      <div class="close" 
        @click="this.$store.commit('setNameCurrentImage', '')"
        @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')"
      >
        ×
      </div>

      <slider-vue :images="getNameCurrentImage" />

    </div>
  </template>
  
  
<script>
import {mapGetters} from 'vuex'
import SliderVue from '@/components/SliderVue.vue'

export default{
    computed:{
        ...mapGetters({
            getNameCurrentImage:'getNameCurrentImage',
        })
    },
    components: {
      SliderVue
    },
    name:'view-image'
}
</script>

<style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.677);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 100px 200px;
    box-sizing: border-box;
    backdrop-filter: blur(3px);
  }
  .image-view{
    margin: auto;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    max-height: calc( 100vh - 200px);
    max-width: 1200px;
    display: flex;
  }
  .close{
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 50px;
    color: var(--btn-color);
  }

  @media (max-width: 700px){
    .popup{
      padding: 100px 20px;
    }
  }
  </style>