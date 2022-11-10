const quotes = [
  'war, what... is it good for?',
  'alberta, canada',
  'everlong',
  'taaaaake oooooonnnnnn meeeeeeee (take on me) taaaaake meeeeeeee onnnnnn',
  'studly fellow',
  'live, laugh, love',
  'living, laughing, and loving',
  'absolutely nothing',
  'play it again',
  "it's ok to eat fish cuz they don't have any feelings",
  'the less i know the better',
  'be kind to the new girl',
  "say it ain't so",
  'it starts with one',
  "one thing, i don't know why",
  "it doesn't even matter how hard you try",
  'smells like nirvana',
  'mo money, no problems',
  'i say it again, it is easier for a hippo to fit through the eye of a needle then it is for a rich man to enter the kingdom of heaven',
  'procedural son',
  'like that',
  "i'm him",
  'this is america, so call me maybe',
  'new york, concrete jungle where dreams are made of',
  'these lights will inspire you',
  'all i wanna do is (racking a slide sound effect several times) and a (racking a slide one more time and then firing) and take their money',
  'i used to whip in my used honda civic',
  'you so mother[freaking] dangerous',
  "b-b-b-b-bound to fallin' in love",
  'through the [w]ire',
  'mmm, delicious, rap snitch knishes',
  'and when it all falls who you gonna call',
  'a boy is a gun',
  'back with the big big base line attack',
  'from the front to the back',
  'up is down, left is right, cats chasing dogs',
  'boys and girls in cars, dogs and birds on lawns',
  'from here i can touch the sky',
];

const el = document.querySelector('#qotd');
const shuffled = quotes.sort(() => Math.random() - 0.5);

let i = 0;

el.textContent = shuffled[i];
i++;

setInterval(() => {
  el.textContent = shuffled[i];
  i++;
}, 6000);
