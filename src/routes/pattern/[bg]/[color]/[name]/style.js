import {getPattern} from '$lib/patterns'
import {getColors} from '$lib/colors'

export async function get({ params }) {
	let { bg, color, name } = params

	if (/light|dark/g.test(bg)) {
		({bg,color} = getColors({bg,color}))
	}
	const pattern = getPattern({name,color,bg})
	
	return {
		headers: { 
		  'Cache-Control':'public, max-age=31536000, immutable',      
		},		
		body: getPattern({name,color,bg})
	};
}