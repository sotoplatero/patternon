import getPattern from '$lib/patterns'
import getColors from '$lib/colors'

export async function get({ params }) {
	let { bg, color, name } = params

	const names = name.split('.')

	if (/light|dark/g.test(bg)) {
		({bg,color} = getColors({bg,color}))
	}
	// color = /red|blue|green|yellow|indigo|pink|gray/g.test()

	const css = (names.length > 1) 
		? names.map( name => `.pattern-${name} { ${getPattern({name,color,bg})} }`).join('\n')
		: `.pattern { ${ getPattern({name,color,bg}) } }`

	return {
		headers: { 
		  'Content-Type': 'text/css',
		  'Cache-Control':'public, max-age=31536000, immutable',      
		},
		body: css
	};
}