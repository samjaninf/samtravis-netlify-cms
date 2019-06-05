import React from "react";
import cx from "classnames";
import "./Grid.css";

const Grid = ({ children }) => <div className="Grid" children={children} />;

const GridColumn = ({ children, width, overflowVisible }) => (
  <div
    className={cx("Grid__Column", {
      "Grid__Column--2": width === 2,
      "Grid__Column--OverflowVisible": overflowVisible
    })}
    children={children}
  />
);

const GridSpacer = ({ children }) => <div className="Grid__Spacer" />;

export default Grid;
export { GridColumn, GridSpacer };
