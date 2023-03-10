<script lang="ts">
  import { page } from "$app/stores";

  import AdminInventoryTable from "$lib/components/blocks/admin/AdminInventoryTable.svelte";
  import Sidebar from "$lib/components/base/Sidebar.svelte";


  console.log($page.data.user);
</script>

{#if $page.data.user.role === 'admin'}



<Sidebar/>
<div class="ml-64">
  <slot></slot>

</div>






{:else}
  <h1>Not Authorized</h1>
{/if}