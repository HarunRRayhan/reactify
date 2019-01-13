import React, { Component } from "react";
import Posts from "./Posts";

export default class Homepage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="home-content my-10">
        <Posts posts={posts} />
      </div>
    );
  }
}
