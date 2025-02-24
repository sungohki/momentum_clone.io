// variables
const quotes = [
  {
    quote: 'Wish not so much to live long as to live well.',
    author: 'Benjamin Franklin',
  },
  {
    quote: 'Sometimes even to live is an act of courage.',
    author: 'Seneca',
  },
  {
    quote: 'Age is no guarantee of maturity.',
    author: 'Lawana Blackwell',
  },
  {
    quote:
      'At 20 years of age the will reigns, at 30 the wit, at 40 the judgment.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'Life is a tragedy when seen in close-up, but a comedy in long-shot.',
    author: 'Charlie Chaplin',
  },
  {
    quote: 'In youth we learn; in age we understand.',
    author: 'Marie Ebner von Eschenbach',
  },
  {
    quote: 'Life is far too important a thing ever to talk seriously about.	',
    author: 'Oscar Wilde',
  },
  {
    quote: 'Travel is only glamorous in retrospect.',
    author: 'Paul Theoux',
  },
  {
    quote: "A man's character is his fate.",
    author: 'Heraclitus',
  },
  {
    quote: 'What I look forward to is continued immaturity followed by death.',
    author: 'Dave Barry',
  },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = Math.floor(Math.random() * quotes.length); // 10

// init
quote.innerText = quotes[todaysQuote].quote;
author.innerText = quotes[todaysQuote].author;

// functions

// events
