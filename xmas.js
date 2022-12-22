const today = new Date();
const xmas = new Date(`12/25/${(new Date()).getFullYear()}`);

const timeDiff = xmas.getTime() - today.getTime();

const until = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

let funEl = document.querySelector("#fun");

const trees = [...Array(until).fill("🎄")].join("");

funEl.textContent = trees;
