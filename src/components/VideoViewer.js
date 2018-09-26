import React, { Component } from "react";
import cx from "classnames";
import "./VideoViewer.css";

export default class VideoViewer extends Component {
    render() {
        const { src, poster, visible } = this.props;
        return (
            <video
                className={cx("VideoViewer", { "VideoViewer--Hidden": !visible })}
                poster={poster}
                muted={!visible}
                controls
            >
                <source src={src} type="video/mp4"></source>
            </video>
        );
    }
}
