<template>
    <div class="slider">
      <div class="ribbon" ref="ribbon">
        <div class="box" v-for="(image, index) in images" :key="index">
          <div class="slide">
            <img :src="require(`@/assets/projects/${image}`)" class="slideImg">
          </div>
        </div>
      </div>
  
      <button @click="decrement" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">&#10094;</button>
      <button @click="increment" @mouseenter="this.$store.dispatch('cursorModule/cursorEnter')" @mouseleave="this.$store.dispatch('cursorModule/cursorLeave')">&#10095;</button>
    </div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  
  export default {
    name: 'slider-vue',
    props: {
      images: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        offset: 0, // Смещение для управления лентой изображений
        currentImage: 0, // Индекс текущего изображения
      };
    },
    methods: {
      increment() {
        // Если это не последнее изображение, сдвигаем влево
        if (this.currentImage < this.images.length - 1) {
          this.offset -= 100;
          this.currentImage++;
        } else {
          // Если последнее изображение, переходим к первому
          this.offset = 0;
          this.currentImage = 0;
        }
        this.$refs.ribbon.style.transform = `translateX(${this.offset}%)`;
      },
      decrement() {
        // Если это не первое изображение, сдвигаем вправо
        if (this.currentImage > 0) {
          this.offset += 100;
          this.currentImage--;
        } else {
          // Если первое изображение, переходим к последнему
          this.offset = -100 * (this.images.length - 1);
          this.currentImage = this.images.length - 1;
        }
        this.$refs.ribbon.style.transform = `translateX(${this.offset}%)`;
      },
      ...mapMutations({
        cursorEnter: 'cursorEnter',
        cursorLeave: 'cursorLeave',
      }),
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .slider {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden; // Скрываем края соседних изображений
  
    .ribbon {
      display: flex;
      transition: transform 0.5s ease; // Плавный переход между изображениями
      height: 100%;
      width: 100%;
    }
  
    .box {
      min-width: 100%; // Каждое изображение занимает 100% ширины контейнера
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden; // Скрываем переполнение внутри слайдов
    }
  
    .slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
  
      .slideImg {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain; // Вписываем изображение в контейнер, сохраняя пропорции
        display: block;
      }
    }
  
    button {
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      cursor: none;
      color: var(--btn-color);
      border: none;
      transition: background 0.3s, color 0.3s;
      background: none;
      padding: 15px;
      font-size: 30px;
      border-radius: 15px;
  
      &:hover {
        box-shadow: 0px 0px 14px var(--btn-color);
      }
  
      &:first-child {
        left: 20px;
      }
  
      &:last-child {
        right: 20px;
      }
    }
  }
  
  @media (max-width: 700px) {
    .slider {
  
      button {
        font-size: 20px;
      }
    }
  }
  </style>
  