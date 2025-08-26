<script lang="ts">
  import Menu from '../components/Menu.svelte';
  import P5Canvas from '../components/P5Canvas.svelte';
  import StatusBar from '../components/StatusBar.svelte';
  import type p5 from 'p5';

  const sketch = (p: p5, width = 400, height = 400) => {
    p.setup = () => {
      p.createCanvas(width, height);
      p.background(200);
    };

    p.draw = () => {
      p.fill(255, 0, 0);
      p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
  };
</script>

<div class="layout">
  <div class="menu">
    <Menu />
  </div>
  <div class="canvas">
    <P5Canvas {sketch} />
  </div>
</div>
<StatusBar />

<style>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .menu {
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0;
    padding: 1em;
    width: 250px; /* Adjust width as needed */
  }

  .canvas {
    display: flex;
    position: relative;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    /* width: 100%;
    height: 100%;
    overflow: hidden; */
  }

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
    }

    .menu {
      width: 100%;
      height: auto;
    }
  }
</style>