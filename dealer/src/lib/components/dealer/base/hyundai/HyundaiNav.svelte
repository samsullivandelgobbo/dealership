<script lang="ts">

</script>




<div data-theme="hyundai_light" class="drawer font-hyundai">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar max-h-3">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="navbar">
        <div class="navbar-start">
          <slot name="logo"/>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/inventory" class="hover:bg-transparent">Inventory</a></li>
            <li>
              <a href="" class="hover:bg-transparent">
                Parent    
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2">
                <li><a class="hover:bg-transparent">Submenu 1</a></li>
                <li><a class="hover:bg-transparent">Submenu 2</a></li>
              </ul>
            </li>
            <li><a class="hover:bg-transparent">Item 3</a></li>
            <li><a class="hover:bg-transparent">Item 3</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <!-- Login button / user profile / navbar end -->
          <slot name="end"/> 
        </div>
      </div>
    </div>
<slot name="content"></slot>
  </div> 
  <!-- Sidebar / mobile menu -->
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>




