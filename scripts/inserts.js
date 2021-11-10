fetch('http://altf4.casa/header.html').then(c => {
  document.body.innerHTML = `${c}${document.body.innerHTML}`;
});
