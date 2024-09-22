<template>
    <canvas ref="canvas" :width="canvasSize.width" :height="canvasSize.height"/>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'canvas-bg',
    data() {
        return {
            ctx: null,
            canvasSize: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
            canvasBG: '#000',
            dots: [],
            mouseDot: null,
            dotsProperties: {
                color: '#310062',
                radius: 4,
                dotsCount: 110,  // Изначальное значение, будет обновлено в updateDotsCount()
                maxVelocity: 0.25,
                lineLength: 150,
                lineWidth: 1.5,
                lifeTime: 12,
            },
            initialized: false, // Для отслеживания инициализации
        };
    },
    computed: {
        ...mapGetters({
            getCursorPosition: 'cursorModule/getPosition',
            getDarkThemeStatus: 'getDarkThemeStatus'
        }),
        getDotsColor() {
            return this.getDarkThemeStatus ? "#78a4b0" : "#310062";
        },
        getBgColor() {
            return this.getDarkThemeStatus ? "#FFF" : "#000";
        },
        getCursorLine() {
            return this.getDarkThemeStatus ? "#1dacd6" : "#8c1efa";
        }
    },
    mounted() {
        window.addEventListener('resize', this.resize);
        this.ctx = this.$refs.canvas.getContext('2d');
        this.updateDotsCount();  // Устанавливаем количество точек при загрузке
        this.start();  // Начинаем анимацию
    },
    methods: {
        resize() {
            this.canvasSize.width = window.innerWidth;
            this.canvasSize.height = window.innerHeight;
            this.updateDotsCount();  // Обновляем только количество точек при изменении размера экрана
        },
        start() {
            if (this.initialized) return; // Предотвращаем повторный вызов
            this.initialized = true; // Устанавливаем флаг, чтобы предотвратить повторный вызов

            // Заполняем массив точек
            for (let i = 0; i < this.dotsProperties.dotsCount; i++) {
                this.dots.push(this.createDot());
            }
            this.loop();
        },
        updateDotsCount() {
            // Проверяем ширину экрана и устанавливаем количество точек
            if (this.canvasSize.width < 700) {
                this.dotsProperties.dotsCount = 40;
            } else {
                this.dotsProperties.dotsCount = 110;
            }

            // Очищаем массив точек и создаем их заново
            this.dots = [];
            this.initialized = false;  // Сбрасываем флаг для повторного запуска
            this.start(); // Заново запускаем анимацию с новыми параметрами
        },
        createDot() {
            return {
                position: {
                    x: Math.random() * this.canvasSize.width,
                    y: Math.random() * this.canvasSize.height,
                },
                velocity: {
                    x: Math.random() * this.dotsProperties.maxVelocity * 2 - this.dotsProperties.maxVelocity,
                    y: Math.random() * this.dotsProperties.maxVelocity * 2 - this.dotsProperties.maxVelocity,
                },
                life: Math.random() * this.dotsProperties.lifeTime * 60,
            };
        },
        reDrawBackground() {
            this.ctx.fillStyle = this.getBgColor;
            this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        },
        reDrawDots() {
            this.dots.forEach((dot) => {
                this.reCalculateLife(dot);
                this.updatePosition(dot);
                this.drawDot(dot);
            });
            this.drawLines();
        },
        updatePosition(dot) {
            if (dot.position.x + dot.velocity.x > this.canvasSize.width || dot.position.x + dot.velocity.x < 0) {
                dot.velocity.x *= -1;
            }
            if (dot.position.y + dot.velocity.y > this.canvasSize.height || dot.position.y + dot.velocity.y < 0) {
                dot.velocity.y *= -1;
            }
            dot.position.x += dot.velocity.x;
            dot.position.y += dot.velocity.y;
        },
        drawDot(dot) {
            this.ctx.beginPath();
            this.ctx.arc(dot.position.x, dot.position.y, this.dotsProperties.radius, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.fillStyle = this.getDotsColor;
            this.ctx.fill();
        },
        drawLines() {
            for (let i = 0; i < this.dots.length; i++) {
                for (let j = i + 1; j < this.dots.length; j++) {
                    const distance = this.calculateDistance(this.dots[i].position, this.dots[j].position);
                    if (distance < this.dotsProperties.lineLength) {
                        const opacity = 1 - distance / this.dotsProperties.lineLength;
                        this.ctx.strokeStyle = this.getDotsColor;
                        this.ctx.lineWidth = this.dotsProperties.lineWidth;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.dots[i].position.x, this.dots[i].position.y);
                        this.ctx.lineTo(this.dots[j].position.x, this.dots[j].position.y);
                        this.ctx.stroke();
                        this.ctx.closePath();
                    }
                }
            }

            for (let i = 0; i < this.dots.length; i++) {
                const distance = this.calculateDistance(this.getCursorPosition, this.dots[i].position);
                if (distance < this.dotsProperties.lineLength) {
                    const opacity = 1 - distance / this.dotsProperties.lineLength;
                    this.ctx.strokeStyle = this.getCursorLine;
                    this.ctx.lineWidth = this.dotsProperties.lineWidth;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.getCursorPosition.x, this.getCursorPosition.y);
                    this.ctx.lineTo(this.dots[i].position.x, this.dots[i].position.y);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }
        },
        calculateDistance(pos1, pos2) {
            const dx = pos2.x - pos1.x;
            const dy = pos2.y - pos1.y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        reCalculateLife(dot) {
            if (dot.life < 1) {
                Object.assign(dot, this.createDot());
            } else {
                dot.life--;
            }
        },
        loop() {
            this.reDrawBackground();
            this.reDrawDots();
            requestAnimationFrame(this.loop);
        },
    },
};
</script>

<style lang="scss" scoped>
canvas {
    position: absolute;
    z-index: -1;
    inset: 0;
}
</style>
