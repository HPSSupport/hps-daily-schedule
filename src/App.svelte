<script>
  import axios from 'axios';
  import { time } from './stores/TimeStore.js';
  import { sched } from './stores/SchechduleStore.js';
  import Schedule from './components/Schedule.svelte';

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  const isABDay = () => {
    return;
  };
</script>

<style>
</style>

<main>
  <nav class="nav-extended blue darken-4">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">Hopkins Public Schools</a>
    </div>
    <div class="nav-content center">
      <span class="nav-title">{formatter.format($time)}</span>
    </div>
  </nav>

  <div class="">
    <div class="row">
      {#if $sched.length > 0}
        <div class="col s12">
          <Schedule sched={$sched[0].periods} title={$sched[0].title} />
          <Schedule sched={$sched[1].periods} title={$sched[1].title} />
        </div>
      {/if}
    </div>
  </div>
</main>
