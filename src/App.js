import React from "react";
import QuoteList from "./QuoteList.js";
import UserInput from "./UserInput.js";
import staticData from "./staticData.js";
import ErrorBoundary from "./ErrorBoundary.js";

const APIurl = "https://andruxnet-random-famous-quotes.p.rapidapi.com/";
const APIhost = "andruxnet-random-famous-quotes.p.rapidapi.com";
const APIkey = "7fcae583e6mshfb0a40746534038p145d17jsn4d0f57a7e898";
const APIoptions = "?cat=famous&count=5";

const useStaticData = false;

class App extends React.Component {
  state = {
    quotes: [],
    isLoading: true,
    favoriteQuotes: [],
    viewingFavorites: false
  };

  loadFavoritesInMemory() {
    var savedFavorites = localStorage.getItem("savedFavoriteQuotes");
    if (savedFavorites) {
      this.setState({ favoriteQuotes: JSON.parse(savedFavorites) });
    }
  }

  saveFavoritesInMemory() {
    var favsToSave = JSON.stringify(this.state.favoriteQuotes);
    localStorage.setItem("savedFavoriteQuotes", favsToSave);
  }

  addFavorite = quote => {
    var favoriteQuotes = this.state.favoriteQuotes;
    favoriteQuotes.splice(0, 0, quote);
    this.setState({ favoriteQuotes: favoriteQuotes });
  };

  removeFromFavorites = quoteToRemove => {
    var quotesList = this.state.quotes;
    var removeIndex = quotesList.findIndex(
      quote => quote.quote === quoteToRemove.quote
    );
    quotesList.splice(removeIndex, 1);
    this.setState({ quotes: quotesList });
  };

  showFavorites = () => {
    this.setState({
      quotes: this.state.favoriteQuotes,
      viewingFavorites: true
    });
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
    this.setState({ isLoading: true, viewingFavorites: false });
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
        <UserInput
          fetchQuotes={this.fetchQuotes.bind(this)}
          showFavorites={this.showFavorites}
          numFavorites={this.state.favoriteQuotes.length}
        />
        <ErrorBoundary>
          <QuoteList
            quotes={this.state.quotes}
            isLoading={this.state.isLoading}
            addFavorite={this.addFavorite}
            viewingFavorites={this.state.viewingFavorites}
            removeFromFavorites={this.removeFromFavorites}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
