import { writable } from 'svelte/store';
import axios from 'axios';

export const sched = writable({}, async (set) => {
  const res = await axios.get(
    'https://my-json-server.typicode.com/HPSSupport/hps-schedule-data/hhs'
  );

  set(res.data);
})