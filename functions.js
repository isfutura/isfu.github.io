const daysUntil = (from, to) =>
  Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
