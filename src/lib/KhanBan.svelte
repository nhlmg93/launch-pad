<!--
@component
A component that allow a note and is draggable.

@example
<KhanBan />
-->
<script>
	import { draggable } from "@neodrag/svelte";
</script>

<div
	class="absolute border-black border-2 flex flex-col w-[750px] h-96"
	use:draggable={{ axis: "both" }}
>
	<div
		class="border-black border-b-2 grid grid-flow-col grid-cols-3 place-items-center w-full h-10"
	>
		<h2>Tasks</h2>
		<h2>In Progress</h2>
		<h2>Finished</h2>
	</div>
	<div class="grid grid-flow-col grid-cols-3 h-full">
		<div class="">Col1</div>
		<div class="border-black border-l-2 border-r-2">Col2</div>
		<div class="">Col3</div>
	</div>
</div>
