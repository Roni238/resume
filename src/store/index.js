import { createStore } from 'vuex'
import cursorModule from './cursorModule'

export default createStore({
  state:()=>({
    nameCurrentImage:[],
    showContacts:false,
    darkThemeStatus:false,
    projects:[
      {
        title:'Numia',
        description:'Сервис в ВК в котором я принимал участие, когда работал в Involta, в отделе Numia \n \n  Мной проделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях в разработке и о категориях за подписку, полнустью переделана верстка после редизайна, исправленно много багов',
        images:['numia2.jpg','numia.jpg','numia3.jpg'],
      },
      {
        title:'Light food',
        description:'Сайт с разными рецептами, сделан на Vue3 \n \n Оснавная фишка - каждая категория рецептов имеет уникальную стилистику ассоциирующиюся с этой категорией и для каждой категории можно настраивать стили в админ панели, так же на сайте есть 3 роли (клиент, повар, админ) и у каждого есть свои права. \n \n Клиент может просматривать контент, добавлять в избранные и оставлять коментарии. У повора появляется функция по созданию рецептов,а Администратор может делать всё что угодно, создавать и удалять рецепты, удалять коментарии, банить пользователей, создавать категории и стилизовать их, назначать поворов и администраторов или разжаловать из администрации \n \n Так же задействаван mail сервис, так что при регистрации нужно подтвердить почту, есть миделвереры как на стороне сервера так и на клиенте,все пароли хешируются для защиты от утечки данных пользователей, есть ссылка на случайный рецепт, красивые анимации, lezyloading, динамические метатеги и многое другое',
        images:['lightfood-1.png','lightfood-2.png','lightfood-3.png','lightfood-4.png','lightfood-5.png','lightfood-6.png','lightfood-7.png','lightfood-8.png','lightfood-9.png'],
        codeLink:'https://github.com/Roni238/cooking_vue_express',
        projectLink:'https://light-food.ru/'
      },
      {
        title:'Новостная лента',
        description:'Приложение на nuxtJs с использованием Vuex, в качестве новосных лент используется rss ленты lenta.ru и mos.ru, \n \n можно поменять вид отображения постов, который хранится в localStorage, есть постраничная пагинация отображаемая полным путём в url, есть фильтры по источнику новостей которые хранятся в query параметрах, запрос из строки поиска отображается тамже, кнопка со стрелкой сбрасывает все фильтры и поисковые запросы обновляет посты. (приложение не удастся загрузить на ghPages т.к. для запросов на используется прокси)',
        images:['news-1.png','news-2.png','news-3.png','news-4.png','news-5.png'],
        codeLink:'https://github.com/Roni238/news-feed',
      },
      {
        title:'Спамер рекламы',
        description:'Спамер для рассылки рекламы по почтам, в конфиге указываете почту для рассылки, файл Message.html - темплейт сообщения для отправки, и указываете список почт на каторые будет рассылка, node index.js - запуск рассылки',
        images:['spam1.jpg','spam2.jpg'],
        codeLink:'https://github.com/Roni238/spam_mailing',
      },
      {
        title:'Messenger',
        description:'Тестовое задание выполненое для "Involta" \n \n Нужно было написать frontend мессенджера, делающий запрос на сервер, он возвращает по 20 разных сообщений, или выдает ошибку, ошибка тоже обработана, в коде проекта всё прокоментированно',
        images:['messanger1.png','messanger2.png'],
        codeLink:'https://github.com/Roni238/Messenger',
        projectLink:'https://roni238.github.io/Messenger/'
      },
      {
        title:'Солнечная система',
        description:'При открытии проекта, перед вами откроется наша солнечная система, солнце и 9 планет каждая из которых движется по своей отрисовоной орбите, на заднем плане холст на котором отрисовываются звёзды (в файле maps.js можно менять время жизни, размер и цвет звёзд) все элементы солнечной системы интерактивные, при нажатии на какой-либо элемент карты будет всплывать окно с краткой информацией и ссылкой на статью с википедии, так же в левом верхнем углу список активных элементов, при наведении на них выделяется траектория сопутствующего объекта, при нажатии на пункт из списка или на любой объект на самой карте, всплывает окно с gif изображением, кратким описанием и ссылкой на википедию. В левом нижнем углу часы и кнопка "Найди меня!". При нажатии на "Найди меня!" появится дополнительная информация о вашем местоположении и времени, с помощью нее выводится информация о восходе и закате в вашем регионе, а также о фазе луны. Все элементы сайта, стили и анимации написаны на html, с помощью JS меняются стандартно заданные стили и производятся вычисления. Местоположение получается функцией вычисляющей часовой пояс, после чего данные о восходе и закате соотносятся вашим положением. Время восхода и заката определяется для каждого месяца по разному и для каждого месяца прописаны свои вычисления по формуле "(Время [восхода/заката] в первый день переведенное в минуты[-/+](день месяца-1)*(на среднее [увеличение/уменьшение]светового дня/2)) = время восхода в минутах, позже это число делится на 60(чтобы получить часы)", целая присваивается часам, а сотые от домножаются на 60 и присваиваются минутам. Фаза луны расчитывается от 1 апреля(начала первой фазы) и меняется каждые 7 дней(тк время смены фаз варьируется от 6,58-8,24 дня я брал примерное среднее значение) Также сайт сделан адаптивным с помощью media запросов, то есть при увеличении экрана все элементы будут меняться в размерах, а на узких экранах (например телефонов) солнечная система будет обрезаться и окно с информацией будет не с краю, а во весь экран, закрыть его можно нажав на крестик в правом верхнем углу.',
        images:['space-map-1.png','space-map-2.png'],
        codeLink:'https://github.com/Roni238/SpaceMap',
        projectLink:'https://roni238.github.io/SpaceMap/'
      },
      {
        title:'Мини игра',
        description:'Простая мини игра, выбираете время к кликаете по появляющимся точкам как можно быстрее',
        images:['aim-game-1.png'],
        codeLink:'https://github.com/Roni238/Aim-Training',
        projectLink:'https://roni238.github.io/Aim-Training/'
      },
    ]
  }),
  getters: {
    getNameCurrentImage(state){return state.nameCurrentImage},
    getProjects(state){return state.projects},
    getShowContacts(state){return state.showContacts},
    getDarkThemeStatus(state){return state.darkThemeStatus}
  },
  mutations: {
    setNameCurrentImage(state,value){state.nameCurrentImage=value},
    setShowContacts(state,value){state.showContacts=value},
    setDarkThemeStatus(state,value){state.darkThemeStatus=!state.darkThemeStatus},
  },
  actions: {
    
  },
  modules: {
    cursorModule
  },
  namespaced:true
})
