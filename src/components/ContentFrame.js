import React from "react";

const ContentFrame = ({ children }) => <div className="ContentFrame">
    <div className="Content" children={children} />
</div>;

const ContentFooter = ({ children }) => <div className="ContentFooter" children={children} />;

export { ContentFrame, ContentFooter };
