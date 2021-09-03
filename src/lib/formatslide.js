export default  function(slide) {

    const replaceUser = '<a href="https://twitter.com/$1" target="_blank" rel="nofollover noopener">$&</a>'
    const replaceURL = '<a href="https://$&" target="_blank" rel="nofollover noopener">$&</a>'

    // const body = marked( lines.replace(/\|/g,'\n') )
    // return marked( slide.replace(/\|/g,'\n') )

    slide = slide
        .replace(/[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/ig, replaceURL) 
        .replace(/@([a-zA-Z0-9]+)/ig, replaceUser) // user twitter
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // italic
        .replace(/`(.*?)`/g, '<code>$1</code>') // code

    if ( !/\|/g.test(slide) ) {
        return slide
    }

    // slide = slide.replace(/^(\.*?)\|/,'<h2>$1</h2>') // title
    let lines = slide.split(/\|/)
    const title = `<h2>${lines[0]}</h2>`
    let items = ''
    if (lines.length > 2) {
        items = lines
            .filter( (el,idx) => idx > 0 )
            .map( el => `<li>${el}</li>`)
            .join('')
        items = `<ul>${items}</ul>`
    } else {
        items = `<p>${lines[1]}</p>` 
    }

    return title + items
}