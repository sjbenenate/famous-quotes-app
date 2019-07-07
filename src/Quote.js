import React from "react";
import Popup from "./Popup.js";
import { setTimeout } from "timers";

class Quote extends React.Component {
  state = { popupText: "", showPopup: false };

  handleAddFavorite = () => {
    var addQuoteMsg = this.props.addFavorite(this.props.quote);
    this.setState({ popupText: addQuoteMsg, showPopup: true });
    setTimeout(() => this.setState({ showPopup: false }), 4000);
    console.log(addQuoteMsg);
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
        <Popup text={this.state.popupText} show={this.state.showPopup} />
      </li>
    );
  }
}

export default Quote;
