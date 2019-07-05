import React from "react";
import QuoteList from "./QuoteList.js";
var Spinner = require("react-spinkit");

const APIurl = "https://andruxnet-random-famous-quotes.p.rapidapi.com/";
const APIhost = "andruxnet-random-famous-quotes.p.rapidapi.com";
const APIkey = "7fcae583e6mshfb0a40746534038p145d17jsn4d0f57a7e898";
const APIoptions = "?cat=famous&count=5";

class App extends React.Component {
  state = { quotes: [], isLoading: false };

  componentDidMount() {
    this.fetchQuotes();
    console.log(this.state.quotes);
  }

  fetchQuotes() {
    this.setState({ isLoading: true });
    let url = APIurl + APIoptions;
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": APIhost,
        "X-RapidAPI-Key": APIkey
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ quotes: data, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading === false && this.state.quotes[0]) {
      return (
        <div>
          <QuoteList quotes={this.state.quotes} />
        </div>
      );
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

export default App;
