import React from "react";

var UserInput = props => {
  return (
    <div className="userInputHeader">
      <button className="retrieveQuotes" onClick={props.fetchQuotes}>
        Retrieve Quotes
      </button>
      <button className="viewFavorites">
        View Favorites<span> #fav</span>
      </button>
    </div>
  );
};

export default UserInput;
