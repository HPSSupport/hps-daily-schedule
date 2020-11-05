<script>
  import Period from './Period.svelte';
  export let sched;
  export let title;
</script>

<div class="card z-depth-0">
  <div class="card-content p-0">
    <span class="card-title">{title}</span>
    <div class="row">
      {#each sched as period}
        <div class="col s2">
          <Period info={period} />
        </div>
      {/each}
    </div>
  </div>
</div>
