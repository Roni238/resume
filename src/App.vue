<template>
  <div class="main">
    <view-image/>
    <custom-cursor/>
    <canvas-bg/>
    
    <div class="wrapper">

      <div class="router-container">
        <router-view/>
      </div>

      <nav>
        <svg @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" @click="this.$router.push({ name: 'home'})"
          version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M379.684,302.072l-54.457-27.229C363.642,243.08,391,185.446,391,135C391,60.561,330.439,0,256,0S121,60.561,121,135 c0,50.439,27.36,108.081,65.773,139.843l-54.457,27.229C76.119,304.02,31,350.337,31,407v90c0,8.284,6.716,15,15,15 c10.022,0,369.711,0,420,0c8.284,0,15-6.716,15-15v-90C481,350.337,435.882,304.02,379.684,302.072z M256,30 c52.805,0,96.623,39.184,103.924,90H346c-24.813,0-45-20.187-45-45c0-8.284-6.716-15-15-15s-15,6.716-15,15 c0,24.813-20.187,45-45,45h-73.924C159.377,69.184,203.196,30,256,30z M151.969,150H226c24.507,0,46.305-11.814,60-30.047 c13.694,18.233,35.493,29.947,60,29.947h14.031c-4.9,39.619-28.161,82.744-57.933,104.985c-1.84,1.376-4.741,4.231-6.311,5.813 c-8.744,8.823-9.343,22.626-1.737,32.185L256,349.958l-38.053-57.08c7.646-9.616,6.954-23.402-1.737-32.175 c0,0-0.001,0-0.001-0.001c-1.574-1.588-4.491-4.46-6.345-5.846C180.116,232.615,156.868,189.602,151.969,150z M280.512,406.027 L275.188,422h-37.625l-4.421-16.8L256,393.771L280.512,406.027z M61,482v-75c0-37.085,27.062-67.95,62.471-73.933L148.293,482H61z M190.864,306.338l43.229,64.844l-32.958,16.479l-43.229-64.844L190.864,306.338z M198.896,482h-20.189l-16.422-98.531 l21.234,31.851c2.866,4.299,7.613,6.681,12.49,6.681c4.054,0,6.371-1.421,9.719-3.094l4.771,18.129L198.896,482z M229.879,482 l7.742-30h36.668l7.5,30H229.879z M333.293,482h-20.582l-11.1-44.4l6.007-18.021c1.975,0.988,4.428,2.422,8.373,2.422 c4.877,0,9.624-2.382,12.489-6.681l21.235-31.852L333.293,482z M310.864,387.662l-32.958-16.479l43.229-64.844l32.958,16.479 L310.864,387.662z M451,482h-87.293l24.822-148.933C423.938,339.05,451,369.915,451,407V482z"/></g></g>
        </svg>

        <svg @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" @click="this.$router.push({ name: 'projects'})"
         version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M234.056,131.147c4.77-7.134,7.559-15.701,7.559-24.908c0-24.774-20.155-44.929-44.929-44.929 s-44.928,20.155-44.928,44.929c0,9.207,2.789,17.775,7.559,24.908c-23.359,13.193-39.508,38.098-39.508,65.947 c0,8.272,6.705,14.976,14.976,14.976h123.803c8.271,0,14.976-6.705,14.976-14.976 C273.565,169.245,257.415,144.339,234.056,131.147z M196.687,91.262c8.258,0,14.976,6.718,14.976,14.976 c0,8.258-6.718,14.976-14.976,14.976c-8.258,0-14.976-6.718-14.976-14.976C181.711,97.981,188.429,91.262,196.687,91.262z M152.537,182.118c6.657-17.622,24.451-30.951,44.15-30.951c19.699,0,37.492,13.329,44.15,30.951H152.537z"/></g></g><g><g><path d="M498.79,401.084c-6.195-6.146-36.321-36.038-42.516-42.184V45.335c0-24.832-21.063-44.928-45.927-44.928H104.833 c-24.774,0-44.928,20.155-44.928,44.928v376.401H14.976C6.705,421.736,0,428.442,0,436.712v14.976 c0,33.031,26.873,59.905,59.905,59.905h335.466c25.259,0,46.866-15.471,56.058-36.593c16.132,5.961,34.716,2.351,47.403-10.337 C516.185,447.31,516.607,418.902,498.79,401.084z M59.905,481.641c-16.516,0-29.952-13.437-29.952-29.952h305.514 c0,10.903,2.929,21.136,8.039,29.952H59.905z M395.371,481.641c-16.516,0-29.952-13.437-29.952-29.952v-14.976 c0-8.271-6.705-14.976-14.976-14.976H89.857V45.335c0-8.258,6.718-14.976,14.976-14.976h305.514 c8.509,0,15.975,6.998,15.975,14.976v283.845l-55.606-55.173c-1.436-1.424-3.144-2.543-5.023-3.289l-69.628-27.64 c-5.539-2.2-11.854-0.905-16.08,3.296c-4.227,4.2-5.562,10.507-3.399,16.059l27.27,69.999c0.76,1.951,1.92,3.72,3.406,5.195 c6.078,6.03,112.69,111.81,118.792,117.865C424.048,470.01,410.818,481.641,395.371,481.641z M357.005,302.6 c-5.189,8.7-12.522,15.978-21.26,21.099l-5.137-5.096l-13.632-34.996l34.817,13.821L357.005,302.6z M419.79,407.088 l-62.316-61.829c8.19-5.82,15.36-12.98,21.2-21.159l62.295,61.809L419.79,407.088z M477.652,443.486 c-5.842,5.838-15.341,5.84-21.221-0.042c-2.682-2.661-12.692-12.593-15.379-15.259l21.179-21.179l15.42,15.301 C483.505,428.16,483.505,437.631,477.652,443.486z"/></g></g><g><g><path d="M380.394,61.31h-29.952c-8.271,0-14.976,6.705-14.976,14.976c0,8.271,6.705,14.976,14.976,14.976h29.952 c8.271,0,14.976-6.705,14.976-14.976C395.371,68.015,388.665,61.31,380.394,61.31z"/></g></g><g><g><path d="M380.394,121.215H320.49c-8.271,0-14.976,6.705-14.976,14.976c0,8.271,6.705,14.976,14.976,14.976h59.905 c8.271,0,14.976-6.705,14.976-14.976C395.371,127.92,388.665,121.215,380.394,121.215z"/></g></g><g><g><path d="M380.394,182.118H320.49c-8.271,0-14.976,6.705-14.976,14.976s6.705,14.976,14.976,14.976h59.905 c8.271,0,14.976-6.705,14.976-14.976S388.665,182.118,380.394,182.118z"/></g></g><g><g><path d="M226.639,242.022h-91.854c-8.271,0-14.976,6.705-14.976,14.976s6.705,14.976,14.976,14.976h91.854 c8.271,0,14.976-6.705,14.976-14.976S234.91,242.022,226.639,242.022z"/></g></g><g><g><path d="M226.639,301.927h-91.854c-8.271,0-14.976,6.705-14.976,14.976c0,8.271,6.705,14.976,14.976,14.976h91.854 c8.271,0,14.976-6.705,14.976-14.976C241.615,308.632,234.91,301.927,226.639,301.927z"/></g></g><g><g><path d="M290.538,363.732H134.785c-8.271,0-14.976,6.705-14.976,14.976s6.705,14.976,14.976,14.976h155.752 c8.271,0,14.976-6.705,14.976-14.976S298.808,363.732,290.538,363.732z"/></g></g>
        </svg>

        <svg @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" @click="this.$router.push({ name: 'skills'})"
         version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M497,151.936h-31c-8.284,0-15,6.716-15,15s6.716,15,15,15h31c8.284,0,15-6.716,15-15S505.284,151.936,497,151.936z"/></g></g><g><g><path d="M472.213,23.723c-5.857-5.858-15.355-5.858-21.213,0l-21.213,21.213c-5.858,5.858-5.858,15.355,0,21.213 c5.857,5.858,15.356,5.859,21.213,0l21.213-21.213C478.071,39.078,478.071,29.581,472.213,23.723z"/></g></g><g><g><path d="M472.213,286.936L451,265.724c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L451,308.149 c5.857,5.858,15.356,5.858,21.213,0C478.071,302.291,478.071,292.794,472.213,286.936z"/></g></g><g><g><path d="M46,151.936H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h31c8.284,0,15-6.715,15-15C61,158.652,54.284,151.936,46,151.936z "/></g></g><g><g><path d="M82.213,44.936L61,23.724c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L61,66.149 c5.857,5.858,15.356,5.858,21.213,0C88.071,60.291,88.071,50.794,82.213,44.936z"/></g></g><g><g><path d="M82.213,265.724c-5.858-5.859-15.356-5.859-21.213,0l-21.213,21.213c-5.858,5.858-5.858,15.355,0,21.213 c5.857,5.858,15.356,5.858,21.213,0l21.213-21.213C88.071,281.079,88.071,271.582,82.213,265.724z"/></g></g><g><g><path d="M257,0.075C163.052-1.041,91.518,76.944,91.013,165.937c-0.306,53.903,25.199,104.278,70.228,135.903 C173.798,310.66,181,323.456,181,336.948v69.988c0,19.555,12.541,36.228,30,42.42v17.58c0,24.813,20.187,45,45,45s45-20.187,45-45 v-17.58c17.459-6.192,30-22.865,30-42.42v-68.054c0-14.589,7.542-28.331,20.691-37.703C395.091,270.251,421,220.066,421,166.936 C421,75.55,347.471,1.15,257,0.075z M271,466.936c0,8.271-6.729,15-15,15s-15-6.729-15-15v-15h30V466.936z M301,406.936 c0,8.271-6.729,15-15,15h-60c-8.271,0-15-6.729-15-15v-15h90V406.936z M301,361.936h-90v-24.988c0-1.68-0.068-3.351-0.189-5.012 h90.521c-0.219,2.296-0.332,4.613-0.332,6.946V361.936z M216.543,197.606L226,188.15l19.394,19.393 c5.857,5.858,15.355,5.858,21.213,0L286,188.15l9.457,9.457C279.598,218.068,271,243.054,271,269.363v32.573h-30v-32.574 C241,243.053,232.403,218.068,216.543,197.606z M334.28,276.749c-9.777,6.968-17.621,15.556-23.236,25.187H301v-32.574 c0-23.353,9.094-45.308,25.606-61.819c5.857-5.857,5.86-15.352,0-21.213l-30-30c-5.857-5.858-15.355-5.858-21.213,0L256,175.723 l-19.394-19.393c-5.857-5.858-15.355-5.858-21.213,0l-30,30c-5.858,5.858-5.858,15.355,0,21.213 C201.906,224.056,211,246.01,211,269.363v32.574h-9.554c-5.502-9.424-13.261-17.832-22.962-24.646 c-37.136-26.081-58.039-67.786-57.448-112.354C121.992,92.804,179.719,29.776,256,29.972c73.436,0.189,135,61.311,135,136.964 C391,210.387,369.797,251.438,334.28,276.749z"/></g></g>
        </svg>
        <svg @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')" @click="this.$router.push({ name: 'work-experience'})"
         version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M467,91c-6.809,0-68.037,0-75,0V75c0-41.355-33.645-75-75-75H195c-41.355,0-75,33.645-75,75v16 c-10.087,0-59.375,0-69.375,0C22.71,91,0,113.71,0,141.625V437c0,41.355,33.645,75,75,75c4.117,0,311.718,0,332,0 c57.897,0,105-47.103,105-105V136C512,111.187,491.813,91,467,91z M60,479.42c-17.459-6.192-30-22.865-30-42.42V256.959 c8.725,6.565,18.922,11.274,30,13.532V479.42z M60,239.42c-17.459-6.192-30-22.865-30-42.42v-55.375 C30,130.252,39.252,121,50.625,121H60V239.42z M120,482H90v-90h30V482z M120,362H90v-30h30V362z M120,302H90V121h30V302z M392,121 h30v182.076c-4.901-0.704-9.907-1.076-15-1.076c-5.093,0-10.099,0.372-15,1.076V121z M150,75c0-24.813,20.187-45,45-45h122 c24.813,0,45,20.187,45,45v16H150V75z M150,121h212v121c-4.147,0-207.388,0-212,0V121z M302,272v15c0,8.271-6.729,15-15,15h-62 c-8.271,0-15-6.729-15-15v-15H302z M150,482V272h30v15c0,24.813,20.187,45,45,45h62c24.813,0,45-20.187,45-45v-15h30v40.145 c-35.443,16.883-60,53.053-60,94.855c0,29.354,12.113,55.927,31.596,75H150z M407,482c-41.355,0-75-33.645-75-75 c0-41.355,33.645-75,75-75c41.355,0,75,33.645,75,75C482,448.355,448.355,482,407,482z M482,333.596 c-8.615-8.8-18.758-16.096-30-21.451v-41.654c11.078-2.258,21.275-6.967,30-13.532V333.596z M482,197 c0,19.555-12.541,36.228-30,42.42V121h15c8.271,0,15,6.729,15,15V197z"/></g></g><g><g><path d="M437,392h-15v-15c0-8.284-6.716-15-15-15s-15,6.716-15,15v30c0,8.284,6.716,15,15,15h30c8.284,0,15-6.716,15-15 S445.284,392,437,392z"/></g></g>
        </svg>
        
        <router-link to="/" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">Главная</router-link>
        <router-link to="/projects" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">Проекты</router-link>
        <router-link to="/skills" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">Навыки</router-link>
        <router-link to="/work-experience" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">Опыт работы</router-link>
        
        <theme-switcher/>
      
      </nav>
    </div>
    
    
  </div>
</template>
<script>
import CustomCursor from '@/components/CustomCursor.vue'
import CanvasBg from '@/components/CanvasBg.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import ViewImage from '@/components/ViewImage.vue'


export default{
components: {
  CustomCursor,
  CanvasBg,
  ThemeSwitcher,
  ViewImage
},
mounted(){
  this.notifyServer();
},
computed:{
  getWindowWidth(){
    return window.innerWidth
  }
},
methods: {
  notifyServer() {
    fetch('/api/visitin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log('Notification sent:', data))
    .catch(err => console.error('Failed to send notification:', err));
  }
}
}
</script>
<style lang="scss">
.main{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
nav svg{
  height: 30px;
  width: 30px;
  fill:var(--link-color);
  display: none;
}
*{
  margin: 0;
  padding: 0;
  cursor: none;
  //outline: 4px solid green !important;
  max-width: 100vw;
}
.wrapper{
  width: 1200px;
  position: relative;
  height: 100vh;
  margin: auto;
  
  .router-container{
    height: calc(100% - 105px);
    color:var(--main-color);
    margin: 20px 0px;
  }
}


@font-face {
  font-family: "Radiotechnika";
  src: url("Radiotechnika.ttf");
}

body{
  margin: 0;
  background-size: auto;
  background-repeat: no-repeat;
  height: 100vh;
}
#app {
  font-family: 'Radiotechnika', sans-serif;
  cursor:none;
  min-height: 100vh;
}

nav {
  box-sizing: border-box;
  border-radius: 10px;
  animation: goTop 1.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  //position: fixed;
  //bottom: 20px;
  //right: 20px;
  //left: 20px;
  max-width: 1200px;
  padding: 15px;
  box-shadow: 0px 0px 14px var(--main-color);
  backdrop-filter: blur(1.5px);
  height: 45px;

.theme-switcher{
  position: absolute;
  right: 15px;
  display: block;
}

a {
  margin: 0px 15px;
  color:var(--link-color);
  text-decoration: none;
  text-shadow: 0px 0px 14px #000;
  cursor: none;
  
  &.router-link-exact-active {
    color: var(--accent-color);      
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--accent-color);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  &:hover{
    color : var(--accent-color);
  }
  &:hover::before {
    transform: scaleX(1);
  }
}
}
@keyframes goTop {
0% {transform: translateY(35px);opacity: 0;}
100% {transform: translateY(0px);opacity: 1;}
}



@media (max-width: 1300px) {
.wrapper{
  height: 100vh;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
}
}
@media (max-width: 700px) {
nav {
  justify-content: space-evenly;
  margin: 0px 20px;

  .theme-switcher{
    position: static;
    height: 30px;
    width: 30px;
  }

  a{
    display: none;
  }

  svg{
    display: block;
  }
}

.wrapper{
  padding: 0px;
  .router-container{
    overflow-y: scroll;
    padding: 20px;
    margin: 0px;
  }
}
}

</style>
