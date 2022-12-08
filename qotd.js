const key = 'c5b5ef2c40b5cc0e19973cf96d38db55';
const user = 'isfutura';

const endpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${key}&format=json`;

(async () => {
  const res = await fetch(endpoint);
  const data = await res.json();

  const quotes = (d => {
    let t = [];
    d.recenttracks.track.forEach(i => {
      t.push(`${i.name.toLowerCase()} - ${i.artist['#text'].toLowerCase()}`);
    });

    return t;
  })(data);

  const el = document.querySelector('#qotd');
  const shuffled = quotes.sort(() => Math.random() - 0.5);

  let i = 0;

  el.textContent = shuffled[i];
  i++;

  setInterval(() => {
    el.textContent = shuffled[i];
    i++;
  }, 6000);
})();
