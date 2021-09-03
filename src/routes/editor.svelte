<script>
	import TurndownService from 'turndown'
	import {onMount} from 'svelte'

	var turndownService = new TurndownService()

	let html = 'generador de url<br>escriba el contenido de la diapositiva para generar la url'
	$: slide = turndownService.turndown(html)
	$: url = `/show/${slide.trim().replace(/\n\s+/g,'\n').replace(/\n+/g,'|')}`
</script>
<div class="space-y-4">
	<a href={url} class="">{url}</a>
	<div
		class="border py-2 px-4"
		contenteditable="true"
		bind:innerHTML={html}
	></div>
	<div>{JSON.stringify(turndownService.turndown(html))}</div>
</div>