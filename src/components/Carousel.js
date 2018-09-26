import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import "./Carousel.css";

class Carousel extends Component {
    render() {
        const { children, frame } = this.props;
        const count = children.length;
        return (
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(frame * 100) }}>
                {styles =>
                    <div className="Carousel">
                        <div
                            className="Carousel__Slider"
                            style={{
                                width: 100 * count + "%",
                                left: -styles.x + "%"
                            }}
                        >
                            {children.map((child, index) =>
                                <div
                                    key={index}
                                    className="Carousel_Slide"
                                    style={{
                                        width: 100 / count + "%"
                                    }}
                                >
                                    {child}
                                </div>
                            )}
                        </div>
                    </div>}
            </Motion>
        );
    }
}

const CarouselNavigation = ({ frame, frames, onChange }) =>
    <div className="CarouselNavigation">
        <div className="CarouselNavigation__Items">
            {Array.apply(null, { length: frames }).map((_, index) =>
                <div
                    key={index}
                    className="CarouselNavigation__Item"
                    onClick={() => onChange(index)}
                />
            )}
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(frame * 11) }}>
                {styles =>
                    <div
                        className="CarouselNavigation__Item CarouselNavigation__Item--Selected"
                        style={{
                            left: styles.x
                        }}
                    />}
            </Motion>
        </div>
    </div>;

const CarouselPrev = ({ onClick }) =>
    <div className="CarouselPrev" onClick={onClick}>
        <img src="/img/icon-arrow.svg" alt="Previous" />
    </div>;
const CarouselNext = ({ onClick }) =>
    <div className="CarouselNext" onClick={onClick}>
        <img src="/img/icon-arrow.svg" alt="Next" />
    </div>;

export default Carousel;
export { CarouselNavigation, CarouselPrev, CarouselNext };
