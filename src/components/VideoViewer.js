import React, { Component } from "react";
import cx from "classnames";
import { PlayIcon, PauseIcon } from "./Icons";
import "./VideoViewer.css";

export default class VideoViewer extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      paused: true
    };
  }

  onTogglePlay = () => {
    const video = this.videoRef.current;
    video.paused ? video.play() : video.pause();
    this.setState({
      paused: video.paused
    });
  };

  render() {
    const { src, poster, visible } = this.props;
    const { paused } = this.state;
    return (
      <div
        className={cx("VideoViewer", {
          "VideoViewer--Hidden": !visible,
          "VideoViewer--Playing": !paused
        })}
      >
        <video poster={poster} ref={this.videoRef} muted={!visible} loop>
          <source src={src} type="video/mp4" />
        </video>

        <div className="VideoViewer__Buttons" onClick={this.onTogglePlay}>
          <div className="VideoViewer__Button">
            {paused ? <PlayIcon /> : <PauseIcon />}
          </div>
        </div>
      </div>
    );
  }
}
