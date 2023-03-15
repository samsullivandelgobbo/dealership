<script lang="ts">
</script>

<div data-theme="hyundai_light" class="drawer font-hyundai">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar max-h-3">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="navbar">
        <div class="navbar-start">
          <slot name="logo" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a href="/inventory" class="hover:bg-transparent">
                Inventory
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  ><path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  /></svg
                >
              </a>
              <ul class="p-2 z-50 bg-white">
                <li><a href="/inventory">Used Vehicles</a></li>
                <li><a href="/inventory">New Vehicles</a></li>
              </ul>
            </li>
            <li>
              <a href="/inventory" class="hover:bg-transparent">
                Service
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  ><path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  /></svg
                >
              </a>
              <ul class="p-2 z-50 bg-white">
                <li><a href="/service/calendar">View Calendar</a></li>
                <li><a href="/service/schedule">Schedule Appointment</a></li>
              </ul>
            </li>
            <li><a href="/parts" class="hover:bg-transparent">Parts</a></li>
            <li><a href="/finance" class="hover:bg-transparent">Finance</a></li>
            <li>
              <a href="/about" class="hover:bg-transparent">
                About
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  ><path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  /></svg
                >
              </a>
              <ul class="p-2 z-50 bg-white">
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
          </ul>
        </div>
        <div class="navbar-end">
          <!-- Login button / user profile / navbar end -->
          <slot name="end" />
        </div>
      </div>
    </div>
    <slot name="content" />
  </div>
  <!-- Sidebar / mobile menu -->
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 w-52 bg-base-100">
      <!-- Sidebar content here -->
      <li />
      <li><a href="/inventory">Inventory</a></li>
      <li><a class="ml-2" href="/inventory">Used Vehicles</a></li>
      <li><a class="ml-2" href="/inventory">New Vehicles</a></li>

      <li><a href="/service">Service</a></li>
      <li><a href="/parts">Parts</a></li>
      <li><a href="/finance">Finance</a></li>
      <li><a href="/about">About</a></li>
      <li><a class="ml-2" href="/contact">Contact</a></li>
    </ul>
  </div>
</div>
