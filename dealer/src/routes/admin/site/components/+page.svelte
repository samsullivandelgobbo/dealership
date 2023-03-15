<script lang="ts">
  import Header from "$lib/components/editor/Header.ts"

  let headerConfig = Header
  headerConfig('a', 'b')
</script>


<button on:click={() => headerConfig('a', 'b')}>Click me</button>