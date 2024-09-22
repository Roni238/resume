<template>
  <div class="main-content">

        <ava-play/>

        <h2 class="title">Костюк Антон Евгеньевич</h2>

        <h3 class="description">
          Желаемая вакансия: Frontend-разработчик <br>
          Опыт разработки на JS 5 лет+ <br>
          Комерческий опыт: 1 год <br>
        </h3>

        <div class="last-project">
          <h3>Последняя работа: ligthfood</h3>

          <div class="last-project-content">
            <img :src="require(`@/assets/projects/lightfood-3.png`)" alt="">

            <div class="links">
              <a href="https://light-food.ru/">Просмотр</a>
              <a href="https://github.com/Roni238/cooking_vue_express">Код</a>
            </div>
          </div>
        </div>

        <div class="all-text">
          <h3>
            Хочу найти работу во Frontend сфере, тк мне это интересно, чтобы развиваться в этом направлении дальше (в коллективе это будет быстрее), люблю развиваться и общаться с людьми.
            <br><br>
            Занимаюсь программированием 5 лет, сначала изучал c# , позже python, делал в команде пару игр на unity( тогда познакомился с gitlab и github)
            <br>
            Последние 4 развивался в веб разработке, сначала познакомился с php и sql, сейчас использую только js, использую vue+vuex иногда nuxt, так же знаю nodeJs, express, mongodb, react&&redux, scss и sass, bootstrap, на последней работе получил опыт с фигмой и форком
          </h3>
        </div>

        <div class="contacts">
          <a href="https://github.com/Roni238" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">
            <svg height="50px" fill="currentColor" viewBox="0 0 496 484">
                <path d="M 166 389 Q 165 393 161 393 Q 155 393 155 389 Q 156 386 160 386 Q 165 386 166 389 L 166 389 Z M 135 385 Q 134 388 139 390 Q 144 391 145 388 Q 146 384 141 383 Q 136 382 135 385 L 135 385 Z M 179 383 Q 174 384 174 388 Q 175 391 180 391 Q 185 389 185 386 Q 184 383 179 383 L 179 383 Z M 245 0 Q 138 2 70 70 L 70 70 Q 2 138 0 244 Q 1 329 47 393 Q 93 457 170 483 Q 188 484 187 471 Q 187 467 187 456 Q 187 433 187 410 Q 185 410 168 412 Q 150 413 130 408 Q 110 402 102 380 Q 102 378 94 364 Q 86 351 74 343 Q 72 342 66 335 Q 59 329 76 328 Q 77 327 90 332 Q 103 336 114 354 Q 132 381 153 381 Q 175 381 187 375 Q 191 351 203 341 Q 159 339 126 319 Q 93 300 91 230 Q 91 210 97 197 Q 102 184 114 172 Q 112 166 110 148 Q 108 130 117 104 Q 135 101 159 115 Q 184 128 186 131 Q 186 131 186 131 Q 216 122 249 122 Q 281 122 312 131 Q 312 130 325 122 Q 337 114 353 108 Q 369 101 381 104 Q 390 130 388 148 Q 386 166 383 172 Q 395 184 402 197 Q 409 210 409 230 Q 408 278 392 301 Q 375 323 349 331 Q 323 339 294 341 Q 310 352 311 387 Q 311 424 311 453 Q 311 466 311 471 Q 310 484 328 483 Q 404 457 450 393 Q 495 329 496 244 Q 495 174 462 119 Q 428 64 372 32 Q 315 1 245 0 L 245 0 Z M 97 345 Q 95 347 98 350 Q 101 353 103 351 Q 105 349 102 346 Q 100 343 97 345 L 97 345 Z M 86 337 Q 86 339 89 341 Q 92 342 93 340 Q 94 338 91 336 Q 88 335 86 337 L 86 337 Z M 119 372 Q 117 375 120 379 Q 124 382 127 380 Q 128 377 125 373 Q 121 370 119 372 L 119 372 Z M 107 358 Q 105 360 107 364 Q 110 367 113 366 Q 115 364 113 360 Q 110 356 107 358 L 107 358 Z" />
              </svg>
            </a>
      
            <a href="https://t.me/Roni238000000" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">
              <svg height="50px" fill="currentColor" viewBox="0 0 496 496">
                <path d="M 248 0 Q 179 1 123 34 L 123 34 Q 67 67 34 123 L 34 123 Q 1 179 0 248 Q 1 317 34 373 Q 67 429 123 462 Q 179 495 248 496 Q 317 495 373 462 Q 429 429 462 373 Q 495 317 496 248 Q 495 179 462 123 Q 429 67 373 34 Q 317 1 248 0 L 248 0 Z M 363 169 Q 361 189 356 223 L 356 223 Q 351 256 345 290 L 345 290 Q 339 324 335 347 Q 329 373 318 372 Q 302 372 287 360 Q 283 357 279 354 Q 262 343 250 334 Q 238 326 223 317 Q 208 306 211 299 Q 213 291 223 283 Q 226 280 229 277 Q 230 275 240 267 Q 256 252 275 233 Q 295 215 297 210 Q 298 209 296 206 Q 293 204 291 205 Q 287 206 186 275 Q 171 285 159 284 Q 152 284 141 281 Q 130 279 121 275 Q 118 274 115 274 Q 94 269 94 259 Q 95 252 112 245 Q 221 198 257 183 Q 307 162 325 156 Q 344 149 349 149 Q 354 149 359 152 Q 362 155 363 159 Q 363 164 363 169 L 363 169 Z" />
              </svg>
            </a>
      
            <a href="mailto:ak4932328@gmail.com" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">
              <svg height="50px" fill="currentColor" viewBox="0 0 512 512">
                <path d="M 256 512 Q 326 511 384 478 L 384 478 Q 442 444 478 384 Q 512 323 512 256 Q 512 189 478 128 Q 442 68 384 34 Q 326 1 256 0 Q 186 1 128 34 Q 70 68 34 128 Q 0 189 0 256 Q 0 323 34 384 Q 70 444 128 478 Q 186 511 256 512 L 256 512 Z M 128 192 Q 128 178 137 169 L 137 169 Q 146 160 160 160 L 352 160 Q 366 160 375 169 Q 384 178 384 192 L 384 201 L 265 256 Q 261 257 256 258 Q 252 258 247 256 L 128 201 L 128 192 L 128 192 Z M 278 285 L 384 237 L 384 320 Q 384 334 375 343 Q 366 352 352 352 L 160 352 Q 146 352 137 343 Q 128 334 128 320 L 128 237 L 234 285 Q 245 290 256 290 Q 267 290 278 285 L 278 285 Z" />
              </svg>
            </a>
        </div> 
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import AvaPlay from '@/components/AvaPlay.vue'

export default {
  computed:{
      ...mapGetters({
        getShowContacts:'getShowContacts',
      })
    },
    components:{
      AvaPlay
    }
}
</script>
<style lang="scss" scoped>
  .main-content{
    height: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: auto 1fr; 
    grid-template-rows: auto auto auto 1fr ;
    gap: 30px; 
    grid-template-areas: 
      "ava-prev title"
      "ava-prev description"
      "ava-prev last-project"
      "all-text all-text";
      line-height: 1.2;
      color:var(--text-color);

      .ava-prev { grid-area: ava-prev; }

      h2{
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 14px var(--main-color);
        backdrop-filter: blur(1.5px);
      }

      .description{
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 14px var(--main-color);
        backdrop-filter: blur(1.5px);
      }

      .last-project{
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 14px var(--main-color);
        backdrop-filter: blur(1.5px);

        .last-project-content{
          display: flex;

          img{
            background-color: #000;
            width: 230px;
            height: 130px;
            margin-top: 10px;
          }

          .links a{
            margin: 10px;
            color: var(--link-color);
            display: block;
            font-weight: bold;
            text-decoration: none;
          }
        }
      }

      .all-text{
        padding: 10px;
        border-radius: 10px;
        height: calc(100% - 100px);
        box-shadow: 0px 0px 14px var(--main-color);
        backdrop-filter: blur(1.5px);
        height: calc(100% - 20px);
        grid-area: all-text;
        position: relative;
      }

      .contacts{
        animation: goLeft 1.3s;
        position: absolute;
        top: 20px;
        display: flex;
        flex-direction: column;
        right: 20px;
      
        a{
          color:var(--text-color);
          margin-bottom: 5px;
        }
      }
  }

@keyframes goLeft{
  0% {transform: translateX(+35px);opacity: 0;}
  100% {transform: translateX(0px);opacity: 1;}
}

@media (max-width: 1300px) {
  .main-content{
    gap: 20px;
    font-size: 85%;
  }
}

@media (max-width: 700px) {
  .main-content {
      display: flex;
      flex-direction: column;

      .contacts{
        top: 30px;
      }
  }

  .last-project{
    display: none;
  }

  .main-content{
    height: auto;
    box-sizing: border-box;
  }
  
}
</style>


