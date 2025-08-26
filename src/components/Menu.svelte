<!-- filepath: /svelte-p5-app/svelte-p5-app/src/components/Menu.svelte -->
<script lang="ts">
  export let items: string[] = ['Teste'];
</script>

<style>
  .menu {
    border-right: 1px solid #ccc;
    background-color: #f0f0f0;
    padding: 1em;
    width: 200px;
  }

  .menu-item {
    transition: background-color 0.3s;
    cursor: pointer;
    padding: 0.5em 1em;
  }

  .menu-item:hover {
    background-color: #e0e0e0;
  }
</style>

<div class="menu">
  {#each items as item}
    <div class="menu-item">{item}</div>
  {/each}
</div>