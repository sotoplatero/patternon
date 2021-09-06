export async function get({ params }) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const { text } = params;

  const size=400
  const color1 = '#000'
  const color2 = '#000'
  let fontsize = 16;

  while ( text.length * (fontsize/2) < size ) {
    fontsize += 1
  }

  console.log(fontsize)
  const img = `<?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
      <defs>
        <linearGradient id="avatar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color1}"/>
          <stop offset="100%" stop-color="${color2}"/>
        </linearGradient>
      </defs>
      <rect fill="url(#avatar)" x="0" y="0" width="${size}" height="${size}"/>
      <text x="50%" y="50%" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" fill="#fff" font-family="sans-serif" >${text}</text>
    </g>
  </svg>
  `;

  return {
    headers: { 
      'Content-Type': 'image/svg+xml; charset=utf8',
      'Cache-Control':'public, max-age=31536000, immutable',      
    },
    body: img
  };
}
