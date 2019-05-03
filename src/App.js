import React, { Component } from "react";
import "./App.css";

// pseudo rosnąca baza danych
const data = [
  { id: 1, title: "wiadomośc 1", body: "zawartosc wiadomosci 1 ..." },
  { id: 2, title: "wiadomośc 2", body: "zawartosc wiadomosci 2 ..." }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `wiadomośc ${index} `,
    body: `zawartosc wiadomosci ${index} ...`
  });
}, 4000);

class App extends Component {
  state = {
    comments: [...data]
  };
  getData = () => {
    this.setState({
      comments: [...data]
    });
  };
  componentDidMount() {
    setInterval(this.getData, 2000);
  }
  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    return <div>{comments}</div>;
  }
}

export default App;
