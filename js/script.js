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
    year: 1977,
    category: 'Blessing/Goodbye'
  },
  {
    quote: 'I am your father.',
    source: 'Darth Vader',
    citation: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    category: 'Revelation/Dramatic Moment'
  },
  {
    quote: 'Do or do not. There is no try.',
    source: 'Yoda',
    citation: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    category: 'Wisdom/Lesson'
  },
  {
    quote: 'Help me, Obi-Wan Kenobi. You\'re my only hope.',
    source: 'Princess Leia',
    category: 'Plea for Assistance'
  },
  {
    quote: 'It\'s a trap!',
    source: 'Admiral Ackbar',
    category: 'Warning/Alert'
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
Function that styles the background color of the HTML page when the printQuote function is used.
***/

const randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

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

  if(randomQuote.category) {
    htmlCode += `<br><span class="category">Category: ${randomQuote.category}</span>`
  }

  htmlCode += `</p>`;

  randomColor();

  quoteBox.innerHTML = htmlCode;

};


/***
Automatically change the quote after every 10 seconds.
***/

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);