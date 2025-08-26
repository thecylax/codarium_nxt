<script lang="ts">
  export let statusMessage: string = "Ready";
</script>

<div class="status-bar">
  <p>{statusMessage}</p>
</div>

<style>
  .status-bar {
    position: relative;
    bottom: 0;
    border-top: 1px solid #ccc;
    background-color: #f1f1f1;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  p {
    margin: 0;
    color: #333;
  }
</style>