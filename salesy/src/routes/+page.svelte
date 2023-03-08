<script>
  import Navbar from "$lib/components/base/Navbar.svelte";
  import Hero from "$lib/components/base/Hero.svelte"
  import Login from "$lib/components/base/Login.svelte"
  import Modal from "$lib/components/base/Modal.svelte";
</script>

<Navbar>
  <Modal>
  <div slot="button" class="btn">Get Started</div>
  <div slot="form">
    <Login></Login>
  </div>
</Modal>
</Navbar>




<Hero/>


