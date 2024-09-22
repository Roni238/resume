<template>
    <sun-icon @click="toggleTheme" class="theme-switcher"/>
</template>

<script>
import SunIcon from '@/assets/icons/SunIcon.vue'
export default {
  components:{
    SunIcon
  },
  data(){
    return{
      checked:true
    }
  },
  methods: {
    toggleTheme() {
      if (this.checked) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
      this.checked = !this.checked
      this.$store.commit('setDarkThemeStatus')
    }
  },
  name: 'theme-switcher',
}
</script>

<style lang="scss">
/* Стили самого чекбокса */
.theme-switcher {
  height: 25px;
  width: 25px;
}


</style>
