<script lang="ts">
  import { page } from "$app/stores";

</script>

{#if $page.data.user.role === 'ADMIN'}
  <slot></slot>
{:else}
  <h1>Not Authorized</h1>
{/if}