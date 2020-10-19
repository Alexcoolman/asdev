<template>
  <canvas id="helloWorld"></canvas>
</template>

<script>
export default {
  name: 'helloworld',
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      const canvas = document.getElementById('helloWorld');
      const canvasDiv = document.querySelector('.helloWorld');
      // Make the canvas full size of the box
      canvas.width = canvasDiv.offsetWidth;
      canvas.height = canvasDiv.offsetHeight;
      let ww = canvas.width;
      let wh = canvas.height;
      const ctx = canvas.getContext('2d');
      let particles = [];
      let amount = 0;
      const mouse = { x: 0, y: 0 };
      let radius = 1;

      function Particle(x, y) {
        this.x = Math.random() * ww;
        this.y = Math.random() * wh;
        this.dest = {
          x,
          y,
        };
        this.r = (Math.random() * 5) + 2;
        this.vx = (Math.random() - 0.5) * 20;
        this.vy = (Math.random() - 0.5) * 20;
        this.accX = 0;
        this.accY = 0;
        this.friction = (Math.random() * 0.05) + 0.94;
        this.color = '#62FF62';
      }

      Particle.prototype.render = function renderParticle() {
        this.accX = (this.dest.x - this.x) / 1000;
        this.accY = (this.dest.y - this.y) / 1000;

        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        ctx.fill();

        const a = this.x - mouse.x;
        const b = this.y - mouse.y;

        const distance = Math.sqrt((a * a) + (b * b));
        if (distance < (radius * 70)) {
          this.accX = (this.x - mouse.x) / 100;
          this.accY = (this.y - mouse.y) / 100;
          this.vx += this.accX;
          this.vy += this.accY;
        }
      };

      function onMouseMvove(evt) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
        mouse.y = ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
      }

      function onTouchMove(e) {
        if (e.touches.length > 0) {
          mouse.x = e.touches[0].clientX;
          mouse.y = e.touches[0].clientY;
        }
      }

      function onTouchEnd() {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      function initScene() {
        ww = canvas.width;
        wh = canvas.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = `bold ${ww / 10} px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('TESTTESTESTESTE', ww / 2, wh / 2);
        const dataObj = ctx.getImageData(0, 0, ww, wh);
        const { data } = dataObj;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'screen';

        particles = [];
        for (let i = 0; i < ww; i += Math.round(ww / 150)) {
          for (let j = 0; j < wh; j += Math.round(ww / 150)) {
            if (data[((i + j * ww) * 4) + 3] > 150) {
              particles.push(new Particle(i, j));
            }
          }
        }
        amount = particles.length;
      }

      function onMouseClick() {
        radius += 1;
        if (radius === 5) {
          radius = 0;
        }
      }

      function render() {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < amount; i += 1) {
          particles[i].render();
        }
      }

      window.addEventListener('resize', initScene);
      window.addEventListener('mousemove', onMouseMvove);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('click', onMouseClick);
      window.addEventListener('touchend', onTouchEnd);
      initScene();
      requestAnimationFrame(render);
    },
  },
};
</script>

<style>
</style>
