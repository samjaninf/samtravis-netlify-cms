import React from "react";
import "./HomeTile.css";

export default ({ src, hoverSrc, title }) => (
    <div className="HomeTile">
        <div
            className="HomeTile__Image"
            style={{
                backgroundImage: `url(${src})`
            }}
        >
            <div
                className="HomeTile__Image HomeTile__Image--Active"
                style={{
                    backgroundImage: `url(${hoverSrc})`
                }}
            />
        </div>
        <div className="HomeTile__Info">
            <div className="HomeTile__Title">{title}</div>
        </div>
    </div>
);
