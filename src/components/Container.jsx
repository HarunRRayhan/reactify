import React from "react";

const Container = props => {
  return (
    <div className="content-area bg-grey-light w-full">
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default Container;
