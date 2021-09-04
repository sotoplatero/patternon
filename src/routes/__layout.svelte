<script>
	import { dev } from '$app/env';	
	import '../app.postcss';
</script>
<svelte:head>
{#if !dev}
		<script async defer data-website-id="56437991-d609-4892-8938-0b7258634e52" src="https://umami.dsoto.dev/umami.js"></script>		
{/if}
</svelte:head>
<div class="max-w-screen-md mx-auto w-full px-2">

	<a href="/">
		<h1 class="text-xl sm:text-3xl py-4 font-bold flex items-center">
			<img src="/logo.png" class="w-10 h-10 rounded-md mr-2" alt="">	
			<span class="text-gray-700">Diapo</span><span class="text-pink-700 font-extrabold">Link</span>
		</h1>
	</a>

	<slot />

  <footer class="max-w-screen-sm mx-auto mt-24 mb-12 text-sm text-center font-mono space-y-6">
  	<div>Hecho con <a href="https://kit.svelte.dev" target="_blank" rel="nofollow noopener">SvelteKit</a>, <a href="https://tailwindcss.com" target="_blank" rel="nofollow noopener">Tailwind</a> y <a href="https://www.heropatterns.com/">heropatterns</a></div>

  	<div>
      Si te 💓 DiapoLink prueba <a href="htps://cssfinder.xyz">CSSFinder</a> y sigueme en <a href="https://twitter.com/sotoplatero" class="text-blue-500" target="_blank" rel="me">@sotoplatero</a> para más proyectos e ideas locas.
    </div>
  </footer>

</div>
