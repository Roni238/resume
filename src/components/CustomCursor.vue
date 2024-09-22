<template>
    <div class="custom-cursor" :style="{ left: `${getPosition.x}px`, top: `${getPosition.y}px` }" ref="cursor"/>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    mounted() {
        window.addEventListener('mousemove', this.updateCustomCursor)
        this.$store.commit('cursorModule/setCursor',this.$refs.cursor)
    },
    methods:{
        updateCustomCursor(event) {
            this.$store.commit('cursorModule/setPosition', {x: event.clientX, y:event.clientY})
        },
    },
    computed:{
    ...mapGetters({
            getPosition:'cursorModule/getPosition',
        })
    },
    name:'custom-cursor'
}
</script>

<style scoped>
.custom-cursor {
    width: 18px;
    height: 18px;
    background-color: #FFF;
    border: 1px solid;
    mix-blend-mode: difference;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: transform 0.3s ease;
    z-index: 1000000;
  }
  
  .cursor-pointer {
    transform: scale(1.8);
  }
  @media(max-width: 700px){
    .custom-cursor{
        display: none;
    }
  }
</style>