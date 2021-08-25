import React, { useState } from "react";

import "./App.css";

import quotes from "./quotes";

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

// const quotes = [
//   {
//     statement: "life is like a yam",
//     author: "Ayokunle",
//   },
//   {
//     statement: "things will work out",
//     author: "Gordon B. Hinckley",
//   },
//   {
//     statement: "an unexamined life is not worth living",
//     author: "Socrates",
//   },
//   {
//     statement: "to the man who has hammer, every problem is a nail",
//     author: "OvoEko",
//   },
//   {
//     statement: "do not be busy bodies",
//     author: "Paul",
//   },
// ];

const backgroundColors = ["black", "red", "brown", "green", "blue", "yellow", "pink", "indigo"];

function App() {
  let [randomQuote, setRandomQuote] = useState(quotes[0]);
  let [colors, setColors] = useState(backgroundColors[0])
  function changeQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    let indes = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[index]);
    setColors(backgroundColors[indes]);
  }

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        ></link>
      </head>
      <div id="wrapper" style={{ color: colors, backgroundColor: colors }}>
        <div id="quote-box">
          <div id="quote-text">
            <i class="fa fa-quote-left"></i>
            <span id="text">{randomQuote.text}</span>
          </div>
          <div id="author" style={{ color: colors }}>
            - {randomQuote.source}
          </div>
          <div class="buttons">
            <button
              class="button"
              id="new-quote"
              onClick={changeQuote}
              style={{ color: colors }}
            >
              New quote
            </button>
            <a
              class="button"
              style={{ color: colors }}
              id="tweet-quote"
              title="tweet this quote"
              target="_top"
              href="https://twitter.com/intent/tweet"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
