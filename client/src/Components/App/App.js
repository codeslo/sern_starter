import React, { Component } from "react";
import "normalize.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messageTitle: null, messageBody: null };
  }

  componentDidMount() {
    this.getMessages();
  }
  getMessages = () => {
    fetch("/getmessages")
      .then((res) => res.json())
      .then((response) => {
        const data = response.data;
        this.setState({ messageTitle: data.title, messageBody: data.body });
      })
      .catch((err) => {
        console.log(`Error in fetch: ${err}`);
      });
  };

  render() {
    return (
      <div className="landing-page">
        <div className="container">
          <div className="message-box">
            <h2>{this.state.messageTitle}</h2>
            <p>{this.state.messageBody}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
