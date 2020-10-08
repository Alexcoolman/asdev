<template>
  <div>
    <canvas :id="this.id"></canvas>
  </div>
</template>

<script>
export default {
  name: 'matrixcard',
  data() {
    return {
      matrix: {},
      ctx: {},
      matrixChar: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}',
      drops: [],
    };
  },
  props: {
    id: {
      type: String,
      default: 'card',
    },
    height: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
    fontSize: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      const self = this;
      // Get the canvas and the context
      const matrix = document.getElementById(this.id);
      const ctx = matrix.getContext('2d');

      // Make the canvas full size of the box
      matrix.style.width = self.width || '100%';
      matrix.style.height = self.height || '100%';
      matrix.width = matrix.offsetWidth;
      matrix.height = matrix.offsetHeight;

      // Matrix characters
      self.matrixChar = self.matrixChar.split('');

      const columns = matrix.width / self.fontSize;

      for (let x = 0; x < columns; x += 1) {
        self.drops[x] = 1;
      }

      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, matrix.width, matrix.height);

        ctx.fillStyle = '#62FF62';
        ctx.font = `${self.fontSize} px arial`;

        for (let i = 0; i < self.drops.length; i += 1) {
          const text = self.matrixChar[Math.floor(Math.random() * self.matrixChar.length)];
          ctx.fillText(text, i * self.fontSize, self.drops[i] * self.fontSize);

          if ((self.drops[i] * self.fontSize) > matrix.height && Math.random() > 0.975) {
            self.drops[i] = 0;
          }
          self.drops[i] += 1;
        }
      }
      // Draw loop
      setTimeout(function next() {
        draw();
        setTimeout(next, 35);
      }, 35);
    },
  },
};
</script>

<style lang="scss">
#matrix {
  display: block;
}
</style>
