import React from "react";
import QuoteList from "./QuoteList.js";
import UserInput from "./UserInput.js";
import staticData from "./staticData.js";
import ErrorBoundary from "./ErrorBoundary.js";

const APIurl = "https://andruxnet-random-famous-quotes.p.rapidapi.com/";
const APIhost = "andruxnet-random-famous-quotes.p.rapidapi.com";
const APIkey = "7fcae583e6mshfb0a40746534038p145d17jsn4d0f57a7e898";
const APIoptions = "?cat=famous&count=5";

const useStaticData = true;

class App extends React.Component {
  state = { quotes: [], isLoading: true };
  favoriteQuotes = [];

  loadFavoritesInMemory() {
    var savedFavorites = localStorage.getItem("savedFavoriteQuotes");
    if (savedFavorites) {
      this.favoriteQuotes = JSON.parse(savedFavorites);
    }
  }

  saveFavoritesInMemory() {
    var favsToSave = JSON.stringify(this.favoriteQuotes);
    localStorage.setItem("savedFavoriteQuotes", favsToSave);
  }

  addFavorite = quote => {
    this.favoriteQuotes.splice(0, 0, quote);
    console.log(this.favoriteQuotes);
  };

  componentDidMount() {
    // Get frech quotes on first load
    if (!useStaticData) {
      this.fetchQuotes();
    } else {
      this.setState({ quotes: staticData, isLoading: false });
    }

    // load favorites from memory if available
    this.loadFavoritesInMemory();
  }

  componentDidUpdate() {
    this.saveFavoritesInMemory();
  }

  fetchQuotes() {
    this.setState({ isLoading: true });
    let url = APIurl + APIoptions;
    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": APIhost,
        "X-RapidAPI-Key": APIkey
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ quotes: data, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <UserInput fetchQuotes={this.fetchQuotes.bind(this)} />
        <ErrorBoundary>
          <QuoteList
            quotes={this.state.quotes}
            isLoading={this.state.isLoading}
            addFavorite={this.addFavorite}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
