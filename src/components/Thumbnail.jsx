import React, { Component } from "react";
import { getMedia } from "../services/pull-data";
import loader from "../images/loader-450x300.svg";

export default class Thumbnail extends Component {
  state = {
    thumbnail: {
      available: true,
      url: null
    }
  };

  componentDidMount() {
    const thumb_id = this.props.thumb_id;
    if (0 === thumb_id) {
      return this.setState({ thumbnail: { available: false } });
    }

    getMedia(thumb_id)
      .then(res => {
        if (
          res.data &&
          res.data.media_details &&
          res.data.media_details.sizes &&
          res.data.media_details.sizes.medium &&
          res.data.media_details.sizes.medium.source_url
        ) {
          console.log(res.data.media_details.sizes.medium.source_url);
          return this.setState({
            thumbnail: {
              url: res.data.media_details.sizes.medium.source_url,
              available: true
            }
          });
        }

        return this.setState({ thumbnail: { available: false } });
      })
      .catch(err => this.setState({ thumbnail: { available: false } }));
  }

  render() {
    if (!this.state.thumbnail.available) return false;

    let thumb_url = this.state.thumbnail.url;
    if (!thumb_url) {
      thumb_url = loader;
    }

    return (
      <div className="thumbnail_wrap bg-grey-lightest border-l border-b border-t border-grey-light">
        <div className="thumbnail">
          <img src={thumb_url} alt={this.props.title}/>
        </div>
      </div>
    );
  }
}
