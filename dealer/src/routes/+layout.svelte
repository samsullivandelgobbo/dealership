<script lang="ts">
  import "../app.css"

  import Navbar from "$lib/components/base/Navbar.svelte"
  import Modal from "$lib/components/base/Modal.svelte"
  import Login from "$lib/components/base/Login.svelte"
  import HyundaiNav from "$lib/components/dealer/base/hyundai/HyundaiNav.svelte"

  import { page } from "$app/stores"
  let src: string
  let name: object
  if ($page.data.user) {
    let userInfo = $page.data.user
    src = userInfo.profilePicture
    name = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    }
    console.log(userInfo)
  }
  let navdefault: boolean = false
  let hyundaiNav: boolean = true

  function handleHyundaiNav() {
    hyundaiNav = !hyundaiNav
  }

  function handleNav() {
    navdefault = !navdefault
  }
</script>

<div
  class="flex flex-row min-w-full bg-gray-800 h-10 place-content-end px-6 py-2"
>
  <div class="flex flex-row">
    <div class="dropdown dropdown-end w-full">
      <label tabindex="0" class=" inline-flex hover:underline text-white"
        >Theme

        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          /></svg
        >
      </label>

      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><button on:click={handleNav}>Toggle Default Navbar</button></li>
        <li>
          <button on:click={handleHyundaiNav}>Toggle Hyundai Navbar</button>
        </li>
      </ul>
    </div>
  </div>
</div>

{#if hyundaiNav}
  <HyundaiNav>
    <a slot="logo" href="/">
      <img
        src="https://www.hyundaiusa.com/content/dam/hyundai/us/com/image/general/icons/navigation/hyundai-logo-wide-blue.svg"
        alt="Hyundai Logo"
      />
    </a>
    <div slot="content">
      <!-- Main Slot -->
      <slot />
    </div>
    <div slot="end">
    {#if $page.data.user}
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img {src} />
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a href="/profile/settings">Settings</a></li>
          <li>
            <form action="/auth/logout" method="post">
              <button type="submit">Logout</button>
            </form>
          </li>
        </ul>
      </div>
    {:else}
      <Modal>
        <div slot="button" class="btn hover:bg-transparent">Sign in</div>
        <!-- {#if } -->
        <div slot="form">
          <!-- Change to register on click -->
          <Login />
          <div class="mt-6 text-center ">
            <a
              href="/auth/register"
              class="text-sm text-blue-500 hover:underline"
            >
              Don’t have an account yet? Sign up
            </a>
          </div>
        </div>
      </Modal>
    {/if}
    </div>
  </HyundaiNav>
{/if}

{#if navdefault}
  <Navbar>
    {#if $page.data.user}
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img {src} />
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a href="/profile/settings">Settings</a></li>
          <li>
            <form action="/auth/logout" method="post">
              <button type="submit">Logout</button>
            </form>
          </li>
        </ul>
      </div>
    {:else}
      <Modal>
        <div slot="button" class="btn">Get Started</div>
        <!-- {#if } -->
        <div slot="form">
          <!-- Change to register on click -->
          <Login />
          <div class="mt-6 text-center ">
            <a
              href="/auth/register"
              class="text-sm text-blue-500 hover:underline"
            >
              Don’t have an account yet? Sign up
            </a>
          </div>
        </div>
      </Modal>
    {/if}
    <div slot="content">
      <!-- Main Slot -->
      <slot />
    </div>
  </Navbar>
{/if}
