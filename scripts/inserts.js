const header = `
<a href="/"><img src="/media/boom.gif" style="width: 50px" /></a>
<h1>${document.title}</h1>
`;

const footer = `
<footer>
<hr>
<p>you've reached the bottom - <a href="https://github.com/twitter/twemoji">twemoji</a></p>
</footer>
`;

document.head.innerHTML = `
<link rel="stylesheet" href="/styles/main.css">${document.head.innerHTML}`;
document.body.innerHTML = `${header}${document.body.innerHTML}${footer}`;

twemoji.parse(document.body);
