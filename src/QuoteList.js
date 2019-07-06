import React from "react";
import Quote from "./Quote.js";

var Spinner = require("react-spinkit");

class QuoteList extends React.Component {
  render() {
    if (this.props.isLoading === false && this.props.quotes[0]) {
      var QuoteElements = this.props.quotes.map((quote, index) => (
        <Quote
          quote={quote}
          index={index}
          addFavorite={this.props.addFavorite}
        />
      ));
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
  }
}

export default QuoteList;
