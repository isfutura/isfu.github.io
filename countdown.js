// countdown function
const countdown = (end, text) => {
  // calculate the number of days from today to the specified end date
  const until = daysUntil(today, end);

  // make sure that the date isn't passed and that it is in the same month
  if ((until > 0) && today.getMonth() === end.getMonth()) {
    // make a string of specified texts for the amount of days left until the specefied end date
    const texts = [...Array(until).fill(text)].join("");

    // get the #fun element
    let funEl = document.querySelector("#fun");

    // put the texts in the #fun element
    funEl.textContent = texts;
  }

  // return true if the day countdown date is passed
  return until < 0;
};

// countdown to christmas
const xmasDone = countdown(xmas, "🎄");

// countdown to new year's eve if christams is passed
if (xmasDone) countdown(nyeve, "🍾");

// countdown to my birthday
countdown(bday, "🎉");
