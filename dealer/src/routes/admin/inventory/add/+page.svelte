<script lang="ts">
  import type { ActionData } from '../../$types'

  export let form: ActionData

</script>


<form method="POST" action="?/vehicle" enctype="multipart/form-data">

  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="make">
      Make
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="make"
      name="make"
      type="text"
      placeholder="Make"
      required
    />
  </div>
  
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="model">
      Model
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="model"
      name="model"
      type="text"
      placeholder="Model"
      required
    />
  </div>
  
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="year">
      Year
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="year"
      name="year"
      type="number"
      placeholder="Year"
      required
    />
  </div>
  
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="price">
      Price
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="price"
      name="price"
      type="number"
      placeholder="Price"
      required
    />
  </div>
  
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="odometer">
      Odometer
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="odometer"
      name="odometer"
      type="number"
      placeholder="Odometer"
      required
    />
  </div>
  
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="vin">
      VIN
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="vin"
      name="vin"
      type="text"
      placeholder="VIN"
      required
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="color">
      Color
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="color"
      name="color"
      type="text"
      placeholder="Color"
      required
    />
  </div>

  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit" 
    >Submit</button>
  </div>
  
  <div>
        
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file" type="file" name="file" multiple>

  </div>



</form>


