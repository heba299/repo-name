var quotes = [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      text: "I'm selfish, impatient and a little insecure...",
      author: "Marilyn Monroe"
    },
    {
      text: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      text: "Two things are infinite...",
      author: "Albert Einstein"
    },
    {
      text: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero"
    }
  ];
  
  var button = document.getElementById("quoteBtn");
  var quoteBox = document.getElementById("quote");
  
  button.onclick = function() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNumber];
  
    quoteBox.innerHTML = '"' + randomQuote.text + '"<div class="author">― ' + randomQuote.author + '</div>';
  };
  