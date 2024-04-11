/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * An object array consisting of famous quotes from the movie franchise 'Star Wars'. 
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
    source: 'Princess Leia'
  },
  {
    quote: 'It\'s a trap!',
    source: 'Admiral Ackbar'
  }
];


/***
Function used to produce a random array number from the list of objects inside of it.
***/

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 Function that produces the values from the properties of each object into the HTML page.
***/

const printQuote = () => {
  let quoteBox = document.getElementById('quote-box');
  let randomQuote = getRandomQuote();
  let htmlCode = `
                  <p class="quote"> ${randomQuote.quote} </p>
                  <p class="source">${randomQuote.source}
                  `;

  if (randomQuote.citation) {
    htmlCode += `<span class="citation">${randomQuote.citation}</span>`
  }

  if (randomQuote.year) {
    htmlCode += `<span class="year">${randomQuote.year}</span>`
  }

  htmlCode += `</p>`;

  quoteBox.innerHTML = htmlCode;

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);