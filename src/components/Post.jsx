import React, { Component } from "react";
import { limitWords } from "../helper";
import Thumbnail from "./Thumbnail";

class Post extends Component {
  render() {
    const { title, excerpt, featured_media } = this.props.post;

    let cssClass = 'lg:rounded-b-none';
    if(0 === featured_media) {
     cssClass = 'rounded-b rounded-t';
    }

    return (
      <div className="my-5">
        <div className="single-post w-full lg:flex">
          <Thumbnail thumb_id={featured_media} title={title.rendered} />

          <div className={`border-r border-b border-t border-grey-light lg:border-t lg:border-grey-light bg-white lg:rounded-r p-4 flex flex-col justify-between leading-normal ${cssClass}`}>
            <div className="mb-8">
              <p className="text-sm text-grey-dark flex items-center">
                <svg
                  className="fill-current text-grey w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-black font-bold text-xl mb-2">
                {title.rendered}
              </div>
              <p className="text-grey-darker text-base">
                {limitWords(excerpt.rendered.replace(/<(?:.|\n)*?>/gm, ""), 50)}
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-black leading-none">Jonathan Reinink</p>
                <p className="text-grey-dark">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
