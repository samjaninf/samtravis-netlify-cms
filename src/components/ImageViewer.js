import React, { Component } from "react";
import { TransitionMotion, spring } from "react-motion";
import cx from "classnames";
import "./ImageViewer.css";

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default class ImageViewer extends Component {
  constructor() {
    super();
    this.state = {
      zoomed: false,
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
      width: 0,
      height: 0
    };
  }

  componentWillMount() {
    if (typeof Image !== 'undefined') {
      const img = new Image();
      img.src = this.props.src;
      img.onload = () => {
        this.setState({
          width: img.width,
          height: img.height
        });
      };
    }
    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", this.move);
      window.addEventListener("mouseup", this.endDrag);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.move);
    window.removeEventListener("mouseup", this.endDrag);
  }

  toggleZoom = () => {
    if (this.state.zoomed) {
      this.setState({
        items: [],
        zoomed: false
      });
    } else {
      this.setState({
        zoomed: !this.state.zoomed,
        items: [{ key: "image" }]
      });
    }
  };

  startDrag = e => {
    this.setState({
      dragging: true,
      startX: e.pageX,
      startY: e.pageY,
      dragStartX: this.state.x,
      dragStartY: this.state.y,
      moved: false
    });
  };

  endDrag = e => {
    const { width, height, zoomed, moved, dragging } = this.state;

    if (dragging) {
      const { clientWidth, clientHeight } = this.refs.elem;
      const { top, left } = getCoords(this.refs.elem);
      const canZoom = clientWidth <= width && clientHeight <= height;
      if (!zoomed && canZoom) {
        let scale = clientWidth / width;
        if (height * scale > clientHeight) scale = clientHeight / height;

        this.setState({
          dragging: false,
          x: clamp(
            width * ((e.pageX - left) / clientWidth) - (e.pageX - left),
            0,
            width - clientWidth
          ),
          y: clamp(
            height * ((e.pageY - top) / clientHeight) - (e.pageY - top),
            0,
            height - clientHeight
          ),
          zoomed: true,
          scale,
          containerWidth: clientWidth,
          containerHeight: clientHeight
        });
      } else {
        this.setState({
          dragging: false,
          zoomed: moved
        });
      }
    }
  };

  move = e => {
    const { width, height, dragging, moved, zoomed } = this.state;
    const { clientWidth, clientHeight } = this.refs.elem;

    if (dragging && zoomed) {
      this.setState({
        x: Math.max(
          0,
          Math.min(
            width - clientWidth,
            this.state.dragStartX - (e.pageX - this.state.startX)
          )
        ),
        y: Math.max(
          0,
          Math.min(
            height - clientHeight,
            this.state.dragStartY - (e.pageY - this.state.startY)
          )
        ),
        moved:
          moved ||
          Math.abs(e.pageX - this.state.startX) > 5 ||
          Math.abs(e.pageY - this.state.startY) > 5
      });
    }
  };

  willEnter = () => {
    const {
      containerWidth,
      containerHeight,
      width,
      height,
      scale
    } = this.state;
    return {
      left: (containerWidth - width * scale) / 2,
      top: (containerHeight - height * scale) / 2,
      width: width * scale,
      height: height * scale
    };
  };

  willLeave = () => {
    const {
      containerWidth,
      containerHeight,
      width,
      height,
      scale
    } = this.state;
    return {
      left: spring((containerWidth - width * scale) / 2),
      top: spring((containerHeight - height * scale) / 2),
      width: spring(width * scale),
      height: spring(height * scale)
    };
  };

  render() {
    const { src, alt } = this.props;
    const { zoomed, x, y, width, height } = this.state;
    return (
      <div
        ref="elem"
        className={cx("ImageViewer", { "ImageViewer--Zoomed": zoomed })}
        onMouseDown={this.startDrag}
        style={{
          backgroundImage: zoomed ? "" : `url(${src})`
        }}
      >
        <img
          key="img"
          className="ImageViewer__Fill"
          draggable="false"
          alt={alt}
          src={src}
        />
        <TransitionMotion
          styles={
            zoomed
              ? [
                {
                  key: "one",
                  style: {
                    width: spring(width),
                    height: spring(height),
                    left: spring(-x),
                    top: spring(-y)
                  }
                }
              ]
              : []
          }
          willEnter={this.willEnter}
          willLeave={this.willLeave}
        >
          {interpolatedStyles =>
            <div>
              {interpolatedStyles.length > 0 &&
                <img
                  key="img"
                  className="ImageViewer__Image"
                  draggable="false"
                  alt={alt}
                  style={interpolatedStyles[0] && interpolatedStyles[0].style}
                  src={src}
                />}
            </div>}
        </TransitionMotion>
      </div>
    );
  }
}
