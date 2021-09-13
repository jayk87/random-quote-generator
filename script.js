import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import { TwitterShareButton, TwitterIcon } from "https://cdn.skypack.dev/react-share";


const quotes = [
{ author: "Thomas Edison", quote: "Genius is one percent inspiration and ninety-nine percent perspiration." },
{ author: "Yogi Berra", quote: "You can observe a lot just by watching." },
{ author: "Abraham Lincoln", quote: "A house divided against itself cannot stand." },
{ author: "Johann Wolfgang von Goethe", quote: "Difficulties increase the nearer we get to the goal." },
{ author: "Byron Pulsifer", quote: "Fate is in your hands and no one elses." },
{ author: "Lao Tzu", quote: "Be the chief but never the lord." },
{ author: "Carl Sandburg", quote: "Nothing happens unless first we dream." },
{ author: "Aristotle", quote: "Well begun is half done." },
{ author: "Yogi Berra", quote: "Life is a learning experience, only if you learn." },
{ author: "Margaret Sangster", quote: "Self-complacency is fatal to progress." },
{ author: "Buddha", quote: "Peace comes from within. Do not seek it without." },
{ author: "Iris Murdoch", quote: "We can only learn to love by loving." },
{ author: "Karen Clark", quote: "Life is change. Growth is optional. Choose wisely." },
{ author: "Wayne Dyer", quote: "You'll see it when you believe it." },
{ author: "Lao Tzu", quote: "To lead people walk behind them." },
{ author: "William Shakespeare", quote: "Having nothing, nothing can he lose." },
{ author: "Henry J. Kaiser", quote: "Trouble is only opportunity in work clothes." },
{ author: "Publilius Syrus", quote: "A rolling stone gathers no moss." },
{ author: "Sigmund Freud", quote: "From error to error one discovers the entire truth." },
{ author: "Benjamin Franklin", quote: "Well done is better than well said." },
{ author: "Ella Williams", quote: "Bite off more than you can chew, then chew it." },
{ author: "Buddha", quote: "Work out your own salvation. Do not depend on others." },
{ author: "Benjamin Franklin", quote: "One today is worth two tomorrows." },
{ author: "Albert Einstein", quote: "God always takes the simplest way." }];


const App = () => {

  const [num, setNum] = useState(Math.floor(Math.random() * quotes.length));

  const newQuote = () => setNum(Math.floor(Math.random() * quotes.length));

  const hrefName = encodeURIComponent('"' + quotes[num].quote + '"  -' + quotes[num].author);

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("h2", { id: "text" }, "\"", quotes[num].quote, "\""), /*#__PURE__*/
    React.createElement("h4", { id: "author" }, "-", quotes[num].author), /*#__PURE__*/
    React.createElement("div", { className: "footer" }, /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: newQuote }, "New Quote"), /*#__PURE__*/
    React.createElement("a", {
      id: "tweet-quote",
      href: "https://twitter.com/intent/tweet?text=" + hrefName,
      target: "_blank" }, /*#__PURE__*/
    React.createElement(TwitterIcon, { size: 32, round: true })))));





};


ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));