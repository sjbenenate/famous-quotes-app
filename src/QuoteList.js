import React from "react";

var renderQuote = (quote, index) => {
  return (
    <li key={index}>
      <h2>{quote.quote}</h2>
      <p>{quote.author}</p>
    </li>
  );
};

var QuoteList = props => {
  var QuoteElements = props.quotes.map(renderQuote);
  return <ul className="quotes">{QuoteElements}</ul>;
};

export default QuoteList;
