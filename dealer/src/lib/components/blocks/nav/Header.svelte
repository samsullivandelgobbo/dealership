<script lang="ts">
  import Navbar from "$lib/components/base/Navbar.svelte"
  import Modal from "$lib/components/base/Modal.svelte"
  import Login from "$lib/components/base/Login.svelte"
  import Register from "$lib/components/base/Register.svelte"
  import HyundaiNav from "$lib/components/dealer/base/hyundai/HyundaiNav.svelte"

  import { page } from "$app/stores"

  

  interface UserInfo {
    profilePicture: string
    firstName: string
    lastName: string
  }

  let src: string
  let name: { firstName: string; lastName: string } | undefined
  if ($page.data.user) {
    let userInfo = $page.data.user as UserInfo
    console.log(userInfo)
    src = userInfo.profilePicture
    name = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    }
  }

  export let hyundaiNav: boolean = true

  let registerForm: boolean = false

  function handleRegister(): void {
    registerForm = !registerForm
  }

  function handleHyundaiNav(): void {
    hyundaiNav = !hyundaiNav
  }
</script>

{#if hyundaiNav}
  <HyundaiNav>
    <a slot="logo" href="/">
      <img src="/hyundai/logo/hyundai-logo-wide-blue.svg" alt="Hyundai Logo" />
    </a>
    <div slot="content">
      <!-- ************************* Main Slot **************************** -->
      <slot />
    </div>
    <div slot="end">
      {#if $page.data.user}
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full bg-blue-300">
              {#if src}
                <img {src} />
              {:else if name}
                <h1 class="text-xl font-bold pt-2">
                  {name.firstName.charAt(0)}
                </h1>
              {:else}
                <h1 class="text-xl font-bold pt-2" />
              {/if}
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
          <div slot="form">
            <!-- Change form to register on click -->

            {#if registerForm}
              <Register />
              <div class="mt-6 text-center ">
                <button
                  on:click={handleRegister}
                  class="text-sm text-blue-500 hover:underline"
                >
                  Already have an account? Sign in
                </button>
              </div>
            {:else}
              <Login />

              <!-- Change back form to login -->

              <div class="mt-6 text-center ">
                <button
                  on:click={handleRegister}
                  class="text-sm text-blue-500 hover:underline"
                >
                  Don’t have an account yet? Sign up
                </button>
              </div>
            {/if}
          </div>
        </Modal>
      {/if}
    </div>
  </HyundaiNav>
{/if}

{#if !hyundaiNav}
  <slot />
{/if}
