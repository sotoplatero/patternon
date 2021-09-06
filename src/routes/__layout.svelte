<script>
	import { dev } from '$app/env';	
	import '../app.postcss';
</script>
<svelte:head>
{#if !dev}
		<script async defer data-website-id="56437991-d609-4892-8938-0b7258634e52" src="https://umami.dsoto.dev/umami.js"></script>		
{/if}
</svelte:head>
<div class="max-w-screen-sm mx-auto w-full px-2">

	<a href="/">
		<h1 class="text-xl sm:text-3xl py-4 font-bold flex items-center">
			<img src="/favicon-32x32.png" class="w-10 h-10 rounded-lg mr-2" alt="">	
			<span class="text-gray-700">
				PatternSAS
			</span>
		</h1>
	</a>

	<slot />

  <footer class="max-w-screen-sm mx-auto mt-24 mb-12 text-sm text-center font-mono space-y-6 px-10 ">
  	<p>Proud to develop it with <a href="https://kit.svelte.dev" target="_blank" rel="nofollow noopener">SvelteKit</a>, <a href="https://tailwindcss.com" target="_blank" rel="nofollow noopener">Tailwind</a> and <a href="https://www.heropatterns.com/">Heropatterns</a></p>

  	<p class="leading-loose">
      If 💓 Patternon try <a href="htps://cssfinder.xyz" >CSSFinder</a>, <a href="htps://diapo.link" >DiapoLink</a> and follow me <a href="https://twitter.com/sotoplatero" class="text-blue-500" target="_blank" rel="me">@sotoplatero</a> for more crazy projects 🚀
    </p>
    <p>Patternon has no affiliation with Heropattern</p>
  </footer>

</div>
