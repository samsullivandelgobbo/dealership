<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
  console.log(data)

</script>

<h1>{JSON.stringify(data.vehicles)}</h1>