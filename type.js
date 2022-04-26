function type(p) {
  let buffer = p.innerHTML.split('');
  let str = '';

  p.innerHTML = '';

  console.log(buffer.toString());

  const i = setInterval(() => {
    if (buffer.length > 0) {
      str += buffer.shift();
      p.innerHTML = str;
    } else clearInterval(i);
  }, 15);
}
