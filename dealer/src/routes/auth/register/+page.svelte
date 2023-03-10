<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData

  import Register from '$lib/components/base/Register.svelte';

</script>

{#if form?.passwordMismatch}
  <div class="text-red-500 text-sm">
    Passwords do not match
  </div>
{/if}

<Register/>