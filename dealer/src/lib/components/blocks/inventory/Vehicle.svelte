<script lang="ts">


  export let vehicle: object
  console.log(vehicle)
  let title = vehicle.year + " " + vehicle.make + " " + vehicle.model + " " + vehicle.trim

</script>


<div class="w-full flex p-4">
  <div class="flex">
    <h1>{title}</h1>
    
  </div>
  <!-- Image carousel -->

</div>

<div class="flex">
  <img {src} alt={title} />
</div>