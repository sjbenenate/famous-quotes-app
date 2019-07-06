import React from "react";

var UserInput = props => {
  return (
    <div className="userInputHeader">
      <button className="retrieveQuotes" onClick={props.fetchQuotes}>
        See More Quotes
      </button>
      <button className="viewFavorites" onClick={props.showFavorites}>
        View Favorites<span> ({props.numFavorites})</span>
      </button>
    </div>
  );
};

export default UserInput;
