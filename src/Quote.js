import React from "react";

class Quote extends React.Component {
  handleAddFavorite = () => {
    this.props.addFavorite(this.props.quote);
  };

  handleRemoveFavorite = () => {
    this.props.removeFromFavorites(this.props.quote);
  };

  render() {
    var addAndRemove = "something went wrong";
    if (this.props.viewingFavorites) {
      addAndRemove = (
        <button className="addToFavorites" onClick={this.handleRemoveFavorite}>
          Remove From Favorites
        </button>
      );
    } else {
      addAndRemove = (
        <button className="addToFavorites" onClick={this.handleAddFavorite}>
          Add To Favorites
        </button>
      );
    }
    return (
      <li key={this.props.index} className="quote">
        <h2 className="quote-phrase">{this.props.quote.quote}</h2>
        <p>
          <span className="author">{this.props.quote.author}</span>
          {addAndRemove}
        </p>
      </li>
    );
  }
}

export default Quote;
