<script context="module">
	import { colors as COLORS } from '$lib/colors'
	import { patterns as PATTERNS } from '$lib/patterns'

	export async function load() {
		return {
			props: {
				colors: COLORS,
				patterns: PATTERNS,
			}
		}
	}
	
</script>

<script>
	export let colors = []
	export let patterns = []
	let theme = 'light'
	let loading = false
	let color = colors[ Math.floor(Math.random() * colors.length) ]
	let pattern = patterns[ Math.floor(Math.random() * patterns.length) ]

	$: tryPattern(theme,color,pattern)
	
	function randomPattern() {

		theme = ['dark','light'][ Math.floor(Math.random() * 2) ]
		color = colors[ Math.floor(Math.random() * colors.length) ]
		pattern = patterns[ Math.floor(Math.random() * patterns.length) ]

		// tryPattern(theme,color,pattern)
	}

	async function tryPattern(bg, color, name){
		loading = true
		const res = await fetch(`/pattern/${bg}/${color}/${name}`)
		if (res.ok) {
			const {pattern} = await res.json()
			console.log(pattern)
			document.body.setAttribute('style', pattern)
		}
		loading = false
	}
</script>
<div class="dark">
<main class="prose mx-auto " >
	<header class="py-16 text-center">

		<h1 class="font-black tracking-tight text-center ">
			Patterns as a service
		</h1>
		<h2 class="">
			Easy access to <a href="https://www.heropatterns.com" rel="nofollow noopener">Heropattern</a> background patterns as css file or style property dynamically 
		</h2>
		<button class="p-3 px-6 bg-purple-500 hover:bg-purple-600 text-white font-bold disabled:opacity-80" on:click={randomPattern} disabled={loading}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline {loading ? 'animate-spin' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
			</svg>			
			<span>Try</span>
		</button>
		<a href="https://www.buymeacoffee.com/sotoplatero" class="p-3 px-6 bg-gray-50 text-gray-700 font-bold inline-block" target="_blank" rel="nofollow noopener">Buy me a Coffee</a>
	</header>

	<div>
		<h3>Usage</h3>
		<p>Patterns can be accessed using a regular css file or an api</p>
		<p><em>CSS:</em> <code>/pattern/:background-color/:foreground-color/:pattern.css</code></p>
		<p><em>API:</em> <code>/pattern/:background-color/:foreground-color/:pattern</code></p>

		<h4>Parameters</h4>
		<ul class="list-inside">
			<li><em>:background-color</em> - Background Color in hexagecimal format</li>
			<li><em>:foreground-color</em> - Foreground Color in hexagecimal format</li>
			<li><em>:pattern</em> - Pattern Name from <a href="https://www.heropatterns.com/" target="_blank" rel="nofollow noopener">Heropattern</a></li>
		</ul>

		<h4>Demo</h4>
		<p>
			<a href="/pattern/dfdbe5/9c92ac/topography.css" target="_black">/pattern/dfdbe5/9c92ac/topography.css</a>
		</p>		
		<p>
			<a href="/pattern/dfdbe5/9c92ac/topography" target="_black">/pattern/dfdbe5/9c92ac/topography</a>
		</p>

		<h4>Multiples Patterns</h4>
		<p>You can get several patterns in a single call by passing the names of the patterns joined by dot.</p>
		<p>
			<a href="/pattern/dfdbe5/9c92ac/jigsaw.overcast.css" target="_black">/pattern/dfdbe5/9c92ac/jigsaw.overcast.css</a>
		</p>		
		<p>
			<a href="/pattern/dfdbe5/9c92ac/jigsaw.overcast" target="_black">/pattern/dfdbe5/9c92ac/jigsaw.overcast</a>
		</p>		
		<p></p>

		<h3>Themes</h3>
		<p>If you do not want to waste time selecting colors you can use the next format:
		</p>
		<p><em>CSS:</em> <code>/pattern/:theme/:color/:pattern.css</code></p>
		<p><em>API:</em> <code>/pattern/:theme/:color/:pattern</code></p>		
		<ul class="list-inside">
			<li><em>:theme</em> - dark o light</li>
			<li><em>:color</em> - gray, red, yellow, green, blue, purple, indigo, pink</li>
			<li><em>:pattern</em> - Pattern Name from <a href="https://www.heropatterns.com/" target="_blank" rel="nofollow noopener">Heropattern</a></li>
		</ul>

		<h4>Demo</h4>
		<p><em>CSS:</em> <a href="/pattern/light/blue/topography.css" target="_black"><code>/pattern/light/blue/topography.css</code></a></p>
		<p><em>STYLE:</em>
			<code>/pattern/light/blue/topography</code>
			<button class="text-yellow-500" on:click={()=>tryPattern('light','blue','topography')}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
				</svg>
			</button>				
		</p>		
	</div>

</main>
	
</div>

<style>	
	code{ @apply bg-gray-50; }
</style>


