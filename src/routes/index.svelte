<main>
	<header class="py-28">
		
		<h1 class="font-extrabold text-gray-800 text-4xl sm:text-6xl tracking-tighter mb-2">
			Crea <br>divertidas <span class="text-pink-700">presentaciones</span><br> desde la <span class="text-pink-700">URL</span>
		</h1>
		<div class="text-xl sm:text-3xl font-medium text-gray-500 leading-relaxed">Haz una presentación de tu <span class="font-bold">nuevo producto</span>, escribe un <span class="font-bold">mini-tutorial</span>, comparte una <span class="font-bold">historia corta</span>. <strong>PresentURL</strong> hace presentaciones solo escribiendo la url</div>

	</header>

	<div class="mb-16">
		<h2>¿Cómo funciona?</h2>
		<p>El servicio funciona sobre las dirección <code>/show</code> y el texto de cada diapositiva separado por slash <code>/</code>, como en una url, ejemplo:</p>
		<p>
			<a href="/show/diapositiva 1/diapositiva 2/diapositiva 3" target="_blank" class="link">/show/diapositiva 1/diapositiva 2/diapositiva 3</a>
		</p>
	</div>

	<div class="mb-8">
		<h2>Formato</h2>
		<p>PresentURL utiliza un formato tomando como base el markdown para poder tener Títulos, <strong>negritas</strong>, <em>inclinadas</em>, cuentas de Twitter, enlaces y listas.</p>
		<p>Utiliza el carácter <code>|</code> como separador de lineas dentro de una diapositiva</p>
		<a href="/show/titulo|incluye **negritas**|utiliza *inclinadas*/titulo 2|promociona tu @cuenta en Twitter|puedes agregar un enlace a tu dominio.com" target="_blank" class="link">/show/titulo|incluye **negritas**|utiliza *inclinadas*/titulo 2|promociona tu @cuenta en Twitter|puedes agregar un enlace a tu dominio.com</a>
	</div>

	<div class="space-y-8">
		<div class="">
			<h3>Título</h3>
			<p>Utilizando el separador <code>|</code> puedes añadir las lineas que necesites. La primera de esas lineas dentro de una diapositiva será tomada como el Tiulo.</p>
			<p>
				<a href="/show/titulo de la diapositiva|es la primera línea de la diapositiva" target="_blank" class="link"> 
					/show/titulo de la diapositiva|es la primera línea de la diapositia
				</a>
			</p>
		</div>

		<div class="">
			<h3>Cuenta en Twitter</h3>
			<p>Si escribes tu cuenta a twitter iniciando con @ se creará un enlace a tu perfil</p>
			<p>
				<a href="/show/Incluye tu cuenta en twitter escribiendo tu usuario @sotoplatero" target="_blank" class="link">/show/Incluye tu cuenta en twitter escribiendo tu usuario @sotoplatero</a>
			</p>
		</div>

		<div class="">
			<h3>Enlaces</h3>
			<p>Puedes incluir tus enlaces pero solo a un dominio es decir puedes publicar tu <em>dominio.com</em> pero no a <em>dominio.com/about</em></p>
			<p>
				<a href="/show/comparte tu sitio web ej: cssfindes.xyz en cualquier diapositiva" target="_blank" class="link">/show/comparte el enlace a tu sitio web ej: cssfindes.xyz en cualquier diapositiva</a>
			</p>
		</div>

		<div class="">
			<h3>Negritas, cursivas</h3>
			<p>Solo utiliza el fomato de markdown: entre doble asterisco para <strong>**negritas**</strong>, entre asteriscos para cursivas <em>*cursivas*</em></p>
			<p>
				<a href="/show/decora el texto con **negritas** y *cursivas* e incluye code si eres " target="_blank" class="link">/show/Incluye tu cuenta en twitter escribiendo tu usuario @sotoplatero</a>
			</p>			
		</div>
	</div>

	<div class="text-center my-20 p-8 bg-blue-100">
		<h2>Funciona como una Página Web</h2>
		<p>Puedes usar PresentURL como una pagina web. Tiene título y meta imagen personalizado asi que puedes compartir en redes sociales. <a href="https://cards-dev.twitter.com/validator">Mira como se veria en twitter</a></p>
	</div>

</main>

<style>
	h2{ @apply text-3xl text-gray-800 font-bold mb-2; }
	h3{ @apply text-xl text-gray-800 font-semibold mb-2; }
	p{ @apply text-lg text-gray-700 mt-2; }
	a {
		@apply text-blue-600;
	}
	code{ @apply bg-gray-100 px-3 font-mono; }
	pre { 
		@apply bg-gray-100 p-2 border-l-4 border-yellow-400 font-mono mt-2; 
	}
</style>

