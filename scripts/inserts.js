const headerContent = fetch('http://altf4.casa/header.html');
document.body.innerHTML = `${headerContent}${document.body.innerHTML}`;
