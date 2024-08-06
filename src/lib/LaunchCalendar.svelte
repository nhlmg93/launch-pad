<!--
@component
A component that is a draggable calendar.

@example
<LaunchCalendar/>
-->
<script>
	import { draggable } from "@neodrag/svelte";
	import Calendar from "./calendar/calendar.svelte";
</script>

<div
	class="absolute border-black border-2 flex flex-col"
	use:draggable={{
		axis: "both",
	}}
>
	<Calendar />
</div>
