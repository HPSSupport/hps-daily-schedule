<script>
  import { time } from './stores/TimeStore.js';
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

  const SCHED_HHSA = [
    { id: '1', start: '7:45', end: '8:50', nextStart: '9:00' },
    { id: '2', start: '9:00', end: '10:05', nextStart: '10:10' },
    { id: 'L', start: '10:10', end: '10:40', nextStart: '10:45' },
    { id: '3', start: '10:45', end: '12:13', nextStart: '12:23' },
    { id: '4', start: '12:23', end: '13:28', nextStart: '13:38' },
    { id: '5', start: '13:38', end: '14:43', nextStart: '14:43' },
  ];

  const SCHED_HHSB = [
    { id: '1', start: '7:45', end: '8:50', nextStart: '9:00' },
    { id: '2', start: '9:00', end: '10:05', nextStart: '10:15' },
    { id: '3', start: '10:15', end: '11:43', nextStart: '11:48' },
    { id: 'L', start: '11:48', end: '12:18', nextStart: '12:23' },
    { id: '4', start: '12:23', end: '13:28', nextStart: '13:38' },
    { id: '5', start: '13:38', end: '14:43', nextStart: '14:43' },
  ];
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
      <div class="col s12">
        <Schedule sched={SCHED_HHSA} title="HHS A-Lunch" />
        <Schedule sched={SCHED_HHSB} title="HHS B-Lunch" />
      </div>
    </div>
  </div>
</main>
