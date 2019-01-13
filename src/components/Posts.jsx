import React from "react";
import Post from "./Post";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Posts = props => {
  return (
    <div className="posts">
      <ReactCSSTransitionGroup
        transitionName="posts"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {props.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Posts;
