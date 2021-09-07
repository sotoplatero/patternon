import { getPattern } from '$lib/patterns'
import { getColors } from '$lib/colors'

export async function get({ params }) {
	let { bg, color, name } = params

	const names = name.split('.')

	if (/light|dark/g.test(bg)) {
		( { bg, color } = getColors({ bg, color }) )
	}

	const css = (names.length > 1) 
		? names.map( name => ({
			[name]: getPattern({name,color,bg})
		}))
		: { pattern: getPattern({ name, color, bg }) }

	return {
		headers: { 
		  'Cache-Control':'public, max-age=31536000, immutable',      
		},		
		body: css
	};
}