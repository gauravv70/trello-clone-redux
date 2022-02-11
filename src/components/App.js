import React from "react";
import TrelloBoard from "./TrelloBoard";
import Header from "./Header";

class App extends React.Component {

    render() {
    return (
        <div>
          <Header />
          <TrelloBoard />
        </div>
    );
  }
}

export default App;
