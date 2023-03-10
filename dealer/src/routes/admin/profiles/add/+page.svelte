<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData
</script>



<h1 class="text-3xl font-semibold text-gray-800 capitalize">Create new account</h1>
<form action="/auth/register?/register" method="POST">

  
<div class="relative flex items-center mt-8">
  <span class="absolute">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 mx-3 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </span>

  <input
    type="email"
    class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    placeholder="Email address"
    id="email"
    name="email"
  />
</div>

<div class="relative flex items-center mt-4">
  <span class="absolute">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 mx-3 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  </span>

  <input
    type="password"
    class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    placeholder="Password"
    id="password"
    name="password"
  />
</div>

<div class="mt-6">
  <button
    class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
  >
    Sign in
  </button>
</div>
</form>