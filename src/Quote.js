import React from "react";

const numQuoteClasses = 8;

/* assumes class indexing starts at 0 */
var getQuoteClassName = (namePrefix, numOfClasses) => {
  var index = Math.floor(Math.random() * numOfClasses);
  return namePrefix + index;
};

class Quote extends React.Component {
  handleAddFavorite = () => {
    this.props.addFavorite(this.props.quote);
  };

  render() {
    var quotePhraseClass = getQuoteClassName("quote-phrase-", numQuoteClasses);
    return (
      <li key={this.props.index} className="quote">
        <h2 className={quotePhraseClass}>{this.props.quote.quote}</h2>
        <p>
          <span className="author">{this.props.quote.author}</span>
          <button className="addToFavorites" onClick={this.handleAddFavorite}>
            Add To Favorites
          </button>
        </p>
      </li>
    );
  }
}

export default Quote;
