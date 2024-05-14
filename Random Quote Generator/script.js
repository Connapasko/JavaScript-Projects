function generate() {
  let quotes = {
    "- Jules Renard":
      '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
    "- Pierce Brown":
      '"Man cannot be freed by the same injustice that enslaved it."',
    "- John Galsworthy": '"Life calls the tune, we dance."',
    "- Jamie Ford":
      '"The library is like a candy store where everything is free."',
    "- Bruce Dickinson":
      '"If heavy metal bands ruled the world, we\'d be a lot better off."',
    "- Ozzy Osbourne":
      "\"All that stuff about heavy metal and hard rock, I don't subscribe to any of that. It's all just music. I mean, the heavy metal from the Seventies sounds nothing like the stuff from the Eighties, and that sounds nothing like the stuff from the Nineties. Who's to say what is and isn't a certain type of music?\"",
    "- Tamerlan Kuzgov": '"Heavy metal never gets rust"',
    "- Trevor Strnad": '"Into the tower, never go; the horrors multiply"'
  }
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
