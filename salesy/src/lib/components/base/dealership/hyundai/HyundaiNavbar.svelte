<script lang="ts">


</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li tabindex="0">
          <button class="justify-between">
            Inventory
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </button>
          <ul class="p-2 z-50">
            <li><a href='/inventory/new'>New Vehicles</a></li>
            <li><a href='/inventory'>Used Vehicles</a></li>
          </ul>
        </li>
        <li tabindex="0">
          <button class="justify-between">
            Service
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </button>
          <ul class="p-2 z-50">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li tabindex="0">
          <button class="justify-between">
            About
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </button>
          <ul class="p-2 z-50">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a href="/finance">Finance</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl" href="/">Salesy</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li tabindex="0">
        <a>
          Inventory
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 z-50">
          <li><a href="/inventory/new">New Inventory</a></li>
          <li><a href="/inventory">Used Inventory</a></li>
        </ul>
      </li>
      <li tabindex="0">
        <a>
          Service
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 z-50">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Finance</a></li>
      <li tabindex="0">
        <a>
          About
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 z-50">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 2</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <slot></slot>
  
  </div>
</div>