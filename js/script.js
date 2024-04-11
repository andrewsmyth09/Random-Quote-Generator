/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'May the Force be with you.',
    source: 'Obi-Wan Kenobi',
    citation: 'Star Wars: Episode IV - A New Hope',
    year: 1977
  },
  {
    quote: 'I am your father.',
    source: 'Darth Vader',
    citation: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980
  },
  {
    quote: 'Do or do not. There is no try.',
    source: 'Yoda',
    citation: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980
  },
  {
    quote: 'Help me, Obi-Wan Kenobi. You\'re my only hope.',
    source: 'Princess Leia',
    citation: 'Star Wars: Episode IV - A New Hope',
    year: 1977
  },
  {
    quote: 'It\'s a trap!',
    source: 'Admiral Ackbar',
    citation: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983
  }
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * `printQuote` function
***/

const printQuote = () => {
  let container = document.querySelector('.quote');
  let source = document.querySelector('.source');
  let randomQuote = getRandomQuote();
  container.textContent = `${randomQuote.quote}`;
  source.textContent = `${randomQuote.source}`;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);