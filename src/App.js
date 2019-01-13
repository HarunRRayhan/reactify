import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Homepage from "./components/Homepage";
import { getPosts } from "./services/pull-data";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    getPosts()
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
    // console.log(process.env.REACT_APP_REST_LINK);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Homepage posts={this.state.posts} />
        </Container>
      </div>
    );
  }
}

export default App;
