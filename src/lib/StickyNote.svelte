<!--
@component
A component that allow a note and is draggable.

@example
<StickyNote />
-->
<script>
  import { draggable } from "@neodrag/svelte";

  /** @type HTMLTextAreaElement*/
  let textarea = $state(null);

  /** @type HTMLDivElement*/
  let ref;

  /**
   * @typedef {Object} StickyNoteProps
   * @property {string} [note=""] - note to display in text area
   */
  /** @type {StickyNoteProps}*/
  let { note = "" } = $props();

  /** 
  @function
  @returns void
  */
  function exit() {
    ref.parentNode.removeChild(ref);
  }
</script>

<div
  class="absolute border-black border-2 flex flex-col w-80 h-80"
  bind:this={ref}
  use:draggable={{ axis: "both", bounds: "body", cancel: textarea }}
>
  <div class="flex flex-row-reverse justify-between space-x-64 mx-3">
    <button class="text-large" onclick={exit}>x</button>
  </div>
  <textarea
    class="resize-none outline-none m-3 flex-1"
    bind:this={textarea}
    use:draggable={{ disabled: true }}
    value={note}
  ></textarea>
</div>
