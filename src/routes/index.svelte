<script context="module">
	import {colors} from '$lib/colors'
	import {patterns} from '$lib/patterns'

	export async function load() {
		return {
			props: {
				colors,
				patterns,
			}
		}
	}
	
</script>

<script>
	export let colors = []
	export let patterns = []
	let theme = 'light'
	let loading = false

	function randomPattern() {
		const color = colors[ Math.floor(Math.random() * colors.length) ]
		const pattern = patterns[ Math.floor(Math.random() * patterns.length) ]

		tryPattern(theme,color,pattern)
	}

	async function tryPattern(bg, color, name){
		loading = true
		const res = await fetch(`/pattern/${bg}/${color}/${name}/style`)
		if (res.ok) {
			const pattern = await res.text()
			document.body.setAttribute('style', pattern)
		}
		loading = false
	}
</script>

<main class="prose mx-auto" >
	<header class="py-16 text-center">

		<h1 class="font-black tracking-tight text-center text-gray-800">
			Patterns as a service
		</h1>
		<h2 class="text-gray-600">
			Easy access to <a href="https://www.heropatterns.com" rel="nofollow noopener">Heropattern</a> background patterns. Get a css file or style property dynamically 
		</h2>
		<button class="p-3 px-6 bg-purple-500 text-white font-bold disabled:opacity-80" on:click={randomPattern} disabled={loading}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline {loading ? 'animate-spin' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
			</svg>			
			<span>Try</span>
		</button>
		<a href="https://www.buymeacoffee.com/sotoplatero" class="p-3 px-6 bg-gray-50 text-gray-700 font-bold inline-block" target="_blank" rel="nofollow noopener">Buy me a Coffee</a>
	</header>

	<div>
		<h3>Quick start</h3>
		<p>Patterns can be accessed using a regular css file or using an api to get the properties to apply directly to the style attribute</p>

		<h4><strong>CSS</strong></h4>

		<p>You can use it as a common css file with the format <code>/pattern/:background-color/:foreground-color/:pattern.css</code>. Ex: <a href="/pattern/dfdbe5/9c92ac/topography.css" target="_black">/pattern/dfdbe5/9c92ac/topography.css</a> 
			<button class="text-yellow-500" on:click={()=>tryPattern('dfdbe5','9c92ac','topography')}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
				</svg>
			</button>
		</p>

		<ul class="list-disc list-inside">
			<li><strong>:background-color</strong> - Background Color in hexagecimal format</li>
			<li><strong>:foreground-color</strong> - Foreground Color in hexagecimal format</li>
			<li><strong>:pattern</strong> - Pattern Name from <a href="https://www.heropatterns.com/" target="_blank" rel="nofollow noopener">Heropattern</a></li>
		</ul>

		<h4><strong>API</strong></h4>
		<p>To access the api you must use the following format <code>/pattern/:background-color/:foreground-color/:pattern/style</code>. This service returns a text with the pattern properties to apply to the <code>style</code> attribute of element</p>

		<h3>Themes</h3>
		<p>If you do not want to waste time selecting colors you can use the format of themes for css <code>/pattern/:theme/:color/:pattern-name.css</code> or for style <code>/pattern/:theme/:color/:pattern-name/style</code> 
		
		</p>
		<ul class="list-disc list-inside">
			<li><strong>:theme</strong> - dark o light</li>
			<li><strong>:color</strong> - gray, red, yellow, green, blue, purple, indigo, pink</li>
			<li><strong>:pattern</strong> - Pattern Name from <a href="https://www.heropatterns.com/" target="_blank" rel="nofollow noopener">Heropattern</a></li>
		</ul>
		<em>Examples:</em>
		<p><strong>CSS</strong> <a href="/pattern/light/blue/topography.css" target="_black"><code>/pattern/light/blue/topography.css</code></a></p>
		<p><strong>STYLE</strong>
			<code>/pattern/light/blue/topography/style</code>
			<button class="text-yellow-500" on:click={()=>tryPattern('light','blue','topography')}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
				</svg>
			</button>				
		</p>		
	</div>

</main>

<style>	
	code{ @apply bg-gray-50; }
</style>


