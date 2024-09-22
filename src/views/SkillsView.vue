<template>
    <div class="skills-content">
        
            <h1>Мои навыки:</h1>
            
            <ul>
                <li>HTML 5,CSS 3, JS, TS</li>
                <li>ECMAScript 6+</li>
                <li>Vue3, Vue-Router, Vuex</li>
                <li>Nuxt</li>
                <li>SASS, SCSS</li>
                <li>Node.js</li>
                <li>Express js</li>
                <li>Git, GitHub, GitLab</li>
                <li>SQL, MySql, MongoDB</li>
                <li>Axios</li>
                <li>Json, XML</li>
                <li>HTTP/HTTPS</li>
                <li>Nginx/Apache2</li>
                <li>Figma</li>
                <li>Rest API</li>
                <li>Photoshop</li>
                <li>Кроссбраузерная верстка</li>
                <li>Адаптивная и отзывчивая верстка</li>
                <li>Понимание SEO-оптимизации и META тегов</li>
                <li>Понимаю основы веб-дизайна и графики</li>
                <li>Знаком с PHP</li>
                <li>Emmet</li>
                <li>Умение отладки приложений и поиска ошибок</li>
                <li>Умение документировать код и составлять техническую документацию</li>
                <li>Знаком с Redux и React</li>
                <li>Умение искать и прользоваться npm пакетами</li>
                <li>Понимание http и https протоколов</li>
                <li>Понимание принципов производительности Web-страниц</li>
                <li>Понимание концепта функционального програмирования</li>
                <li>Владение навыком адаптивной и отзывчивой вёрстки</li>
                <li>Умение работать в коллективе </li>
            </ul> 
    </div>
</template>
<script>
export default {
    name: 'skills-view',
}
</script>
<style lang="scss" scoped>
    
    .skills-content{
        height: 100%;
        border-radius: 15px;
        box-sizing: border-box;
        padding: 20px 20px;
        color: var(--text-color);
        box-shadow: 0px 0px 14px var(--main-color);
        backdrop-filter: blur(1.5px);

        h1{
            padding-bottom: 10px;
        }

        ul{
            list-style: none;
            overflow-y: scroll;
            height: calc( 100% - 40px);
            li{
                font-size: 16px;
                margin: 10px 15px;
            }

            &::-webkit-scrollbar {
                width: 12px; 
              }
              &::-webkit-scrollbar-track {
                background: var(--bg-second-color);  
                border-radius: 20px;
              }
              &::-webkit-scrollbar-thumb {
                background-color: var(--link-color);
                border-radius: 20px;
              }
        }
    }
</style>