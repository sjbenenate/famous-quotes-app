import React from "react";
import QuoteList from "./QuoteList.js";
import UserInput from "./UserInput.js";
import staticData from "./staticData.js";

const APIurl = "https://andruxnet-random-famous-quotes.p.rapidapi.com/";
const APIhost = "andruxnet-random-famous-quotes.p.rapidapi.com";
const APIkey = "7fcae583e6mshfb0a40746534038p145d17jsn4d0f57a7e898";
const APIoptions = "?cat=famous&count=5";

const useStaticData = false;
var handleClick = () => {
  console.log("handling click...");
};

class App extends React.Component {
  state = { quotes: [], isLoading: true };

  componentDidMount() {
    if (!useStaticData) {
      this.fetchQuotes();
    } else {
      this.setState({ quotes: staticData, isLoading: false });
    }
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
        <QuoteList
          quotes={this.state.quotes}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
