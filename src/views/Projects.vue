<template>
  <div class="projects">
    <div class="projects-content">
      <div class="projects-container" ref="container">
        <div 
          class="project-slide"
          v-for="(project, index) in projects" 
          :key="index" 
        >

          <div class="slide-content">
            <h1>{{ project.title }}</h1>
            <p>
              {{ isTextExpanded(index) ? project.description : truncatedText(project.description) }}

              <span v-if="project.description.length > 300" @click="toggleText(index)" class="read-more">
                {{ isTextExpanded(index) ? 'Скрыть' : 'Далее' }}
              </span>
            </p>
          </div>
          
          <div class="bottom-panel">

            <a 
              v-if="project.codeLink"
              :href="project.codeLink"
              target="_blank"
              @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
              @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
            >
            Смотреть код
            </a>

            <button 
              @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
              @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
              @click="this.$store.commit('setNameCurrentImage', project.images)"
            >
             Смотреть фото
            </button>

            <a
              v-if="project.projectLink"
              :href="project.projectLink"
              target="_blank"
              @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
              @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
            >
             Смотреть работу
            </a>

          </div>
        </div>
      </div>

    </div>
    
    <div class="buttons">
      <button 
        @click="changeSlide(-1)"
        @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
        @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
        > 
        ❮
      </button>

      <button 
        @click="changeSlide(1)"
        @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" 
        @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" 
        >
        ❯
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      expandedTexts: {}
    };
  },
  computed: {
    projects() {
      return this.$store.getters['getProjects'];
    }
  },
  methods: {
    changeSlide(direction) {
      this.currentPage = (this.currentPage + direction + this.projects.length) % this.projects.length
      this.updatePagePositions()
    },

    updatePagePositions() {
      const container = this.$refs.container
      container.style.transform = `translateX(-${this.currentPage * 1300}px)`
    },

    isTextExpanded(index) {
      return this.expandedTexts[index] || false
    },

    truncatedText(text) {
      return text.length > 300 ? text.slice(0, 300) + '...' : text
    },

    toggleText(index) {
      this.expandedTexts[index] = !this.isTextExpanded(index)
    }
  },
  mounted() {
    this.updatePagePositions();
  }
};
</script>

<style scoped lang="scss">
  .projects{
    height: 100%;

    .projects-content{
      height: 100%;
      width: 100%;
      position: relative;
      line-height: 1.1;

      .projects-container {
        display: flex;
        transition: transform 0.9s ease-in-out;
        width: 100%;
        height: 100%;

        .project-slide {
          box-sizing: border-box;
          height: 100%;
          width: 1200px;
          border-radius: 10px;
          margin-right: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(1.5px);
          box-shadow: 0px 0px 14px var(--main-color);
          color: var(--text-color);
          padding: 25px;
          flex-shrink: 0;

          .slide-content {
            overflow-y: hidden;
            width: 100%;
            box-sizing: border-box;

            .read-more {
              color: var(--main-color);
              cursor: pointer;
              font-weight: bold;
              margin-left: 5px;
            }
          }

          .bottom-panel{
            width: 100%;
            justify-content: space-evenly;
            display: flex;
            position: absolute;
            bottom: 0px;
            padding: 20px 70px;
            box-sizing: border-box;
            z-index: 1;
            align-items: center;
            
            a, button{
              background: none;
              font-size: 18px;
              border: solid var(--main-color) 2px;
              border-radius: 5px;
              box-shadow: var(--main-color) 0px 0px 10px 0px;
              padding: 7px 15px;
              text-decoration: none;
              color:var(--text-color);
              font-family: 'Radiotechnika', sans-serif;
            }
          }
        }
      }
    }


    .buttons{
      width: 100%;
      top: calc(50% - 25px);
      position: absolute;
      display: flex;
      justify-content: space-between;

      button{
        height: 50px;
        width: 50px;
        font-size: 30px;
        color: var(--btn-color);
        background:none;
        border: none;
      }
    }
  }

  
@media(max-width: 700px) {
  .projects{
    height: auto;

    .projects-content .projects-container{
      height: calc(100% - 40px);
      flex-direction: column;
      gap: 30px;
      width: auto;
      transform: translateX(0px);

      .project-slide{
        width: calc(100vw - 40px);
        height: auto;
        margin-right: 0px;

        .bottom-panel{
          position: static;
          padding: 20px 0px 0px 0px;
          display: block;
      
          a, button{
            box-sizing: border-box;
            width: 100%;
            display: block;
            margin-bottom: 10px;
            justify-content: center;
            display: flex;
            font-size: 16px;
          }
        }
      }
    }
    .buttons{
      display: none;
    }
  }
}
</style>
