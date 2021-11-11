const header = `
<a href="/"><img src="/media/bobm.png" style="width: 50px" /></a>
<h1>${document.title}</h1>
`;

const footer = `
<footer>
<hr>
<p>thanks for visiting - <a href="https://github.com/twitter/twemoji">twemoji</a></p>
</footer>
`;

document.head.innerHTML = `
<link rel="stylesheet" href="/styles/main.css?v=2">${document.head.innerHTML}`;
document.body.innerHTML = `${header}${document.body.innerHTML}${footer}`;

twemoji.parse(document.body);
