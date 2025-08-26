<script lang="ts">
  import p5 from "p5";
  import { onMount, onDestroy } from "svelte";
  export let sketch: (p: p5, width: number, height: number) => void;

  let canvas: HTMLDivElement

  // const setup = (p: p5) => {
  //   p.createCanvas(400, 400);
  //   p.background(200);
  // };

  // const draw = (p: p5) => {
  //   p.fill(255, 0, 0);
  //   p.ellipse(p.mouseX, p.mouseY, 50, 50);
  // };

  onMount(() => {
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    new p5((p) => sketch(p, width, height), canvas);
  });
</script>

<div bind:this={canvas}></div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>