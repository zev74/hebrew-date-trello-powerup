window.TrelloPowerUp.initialize({
  'card-badges': async function(t) {
    const card = await t.card('due');
    if (!card.due) return [];

    const date = new Date(card.due);
    const url = `https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}&gm=${date.getMonth()+1}&gd=${date.getDate()}&g2h=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const hebrewDate = data.hebrew;

      return [{
        text: hebrewDate,
        color: 'blue',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Jewish_Calendar_star.svg'
      }];
    } catch (err) {
      console.error('Hebrew date fetch failed:', err);
      return [];
    }
  }
});