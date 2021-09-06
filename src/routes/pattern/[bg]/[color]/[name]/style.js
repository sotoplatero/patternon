import getPattern from '$lib/patterns'

export async function get({ params }) {
	const { bg, color, name } = params
	const pattern = getPattern({name,color,bg})
	
	return {
		headers: { 
		  'Content-Type': 'text/css',
		  'Cache-Control':'public, max-age=31536000, immutable',      
		},
		body: getPattern({name,color,bg})
	};
}