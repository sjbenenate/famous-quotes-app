import React from "react";

var Spinner = require("react-spinkit");

const numQuoteClasses = 8;

var renderQuote = (quote, index) => {
  var quotePhraseClass = getQuoteClassName("quote-phrase-", numQuoteClasses);
  return (
    <li key={index} className="quote">
      <h2 className={quotePhraseClass}>{quote.quote}</h2>
      <p>
        {" "}
        <span className="author">{quote.author}</span>{" "}
        <button className="addToFavorites">Add To Favorites</button>
      </p>
    </li>
  );
};

/* assumes class indexing starts at 0 */
var getQuoteClassName = (namePrefix, numOfClasses) => {
  var index = Math.floor(Math.random() * numOfClasses);
  return namePrefix + index;
};

var QuoteList = props => {
  if (props.isLoading === false && props.quotes[0]) {
    var QuoteElements = props.quotes.map(renderQuote);
    return <ul className="quotes">{QuoteElements}</ul>;
  } else {
    return (
      <div className="loading">
        <h4>Fetching Quotes...</h4>
        <div className="spinner-container">
          <Spinner name="cube-grid" color="inherit" />
        </div>
      </div>
    );
  }
};

export default QuoteList;
