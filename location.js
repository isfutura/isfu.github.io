const locs = [
  "usa",
  "pacific northwestern united states",
  "america",
  "the united states of america",
  "the series of tubes that is the internet",
  "a little to the right of the pacific ocean",
  "below canada",
  "the top left of the united states",
  "not found",
  "coruscant",
  "north of portland, south of seattle",
  "an elevator somewhere",
];

const loc = locs[Math.floor(Math.random() * locs.length)];

let locEl = document.querySelector("#location");

locEl.textContent = loc;
