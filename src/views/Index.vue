<template>
  <div @click="handle">
    <img
      alt="Vue logo"
      src="../assets/img/logo.png"
    >
    <canvas id="canvas"></canvas>
    <cc-button>66666 </cc-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
  methods: {
    handle(e) {
      console.log(e)
    }
  },
  mounted() {
    console.log(document.getElementById('canvas'))
    var ctx = document.getElementById('canvas'),
      content = ctx.getContext('2d'),
      WIDTH,
      HEIGHT,
      round = [],
      initRoundPopulation = 80;

    WIDTH = document.documentElement.clientWidth;
    HEIGHT = document.documentElement.clientHeight;
    ctx.width = WIDTH
    ctx.height = HEIGHT



    function round_item(index, x, y) {
      this.index = index
      this.x = x
      this.y = y
      this.r = Math.random() * 2 + 1
      var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
      this.color = `rgba(255,255,255,${alpha})`
    }

    round_item.prototype.draw = function () {
      content.fillStyle = this.color
      content.shadowBlur = this.r * 2;
      content.beginPath();
      content.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      content.closePath();
      content.fill();
    }

    round_item.prototype.move = function () {
      this.y -= 0.3
      if (this.y <= -20) {
        this.y = HEIGHT + 10
      }
      this.draw()
    }

    function init() {
      for (let index = 0; index < initRoundPopulation; index++) {
        round[index] = new round_item(index, Math.random() * WIDTH, Math.random() * HEIGHT)

        round[index].draw()
      }
      animate()
    }

    function animate() {
      content.clearRect(0, 0, WIDTH, HEIGHT)
      for (var i in round) {
        round[i].move();

      }
      window.requestAnimationFrame(animate)
    }
    init()

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  width: 100vw;
  overflow: hidden;
  cursor: none;
}
</style>