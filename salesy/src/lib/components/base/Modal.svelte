<label for="my-modal" class="">
  <slot name="button" />

</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <div class="modal-action">
      <label for="my-modal" class="btn">X</label>
    </div>
    <form class="w-full max-w-md">
      <slot name="form"></slot>
    </form>
  </div>
</div>

