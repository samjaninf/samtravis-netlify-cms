import React, { Component } from "react";
import { navigate, Link } from "gatsby"
import Grid, { GridColumn } from "../components/Grid";
import cx from "classnames";
import "./Header.css";

const localStorage = typeof window !== 'undefined' ? window.localStorage : {
  getItem: () => { },
  setItem: () => { }
}

const PASSWORD = "password";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      password: localStorage.getItem("password")
    };
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };

  closeMenu = () => {
    this.setState({
      open: false
    });
  };

  onPasswordKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.currentTarget.value === PASSWORD) {
        localStorage.setItem("password", PASSWORD);
        this.setState({
          password: PASSWORD,
          open: false
        });
        navigate("/commercial");
      }
    }
  };

  render() {
    const { open, password } = this.state;
    const passwordCorrect = password === PASSWORD;
    return (
      <div className="Header" onMouseLeave={this.closeMenu}>
        <div className="Header__Navigation">
          <Link to={`/`}>Samuel J Travis</Link>
          <div className="Header__Spacer" />

          {passwordCorrect && [
            <Link
              key="creative"
              to={`/`}
              activeClassName="Header__Navigation__Item--Active"
            >
              Creative
            </Link>,
            <Link
              key="commercial"
              to={`/commercial`}
              activeClassName="Header__Navigation__Item--Active"
            >
              Commercial
            </Link>
          ]}

          <div className="Header__Spacer" />
          <img
            className={cx("Header__CloseButton", {
              "Header__CloseButton--Open": open
            })}
            onClick={this.toggleMenu}
            alt="Close"
            src="/img/icon-X.svg"
          />
          <div
            className={cx("Header__MenuButton", {
              "Header__MenuButton--Open": open
            })}
            onClick={this.toggleMenu}
          >
            About
          </div>
        </div>

        <div className={cx("Header__Menu", { "Header__Menu--Open": open })}>
          <Grid>
            <GridColumn>
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tristique sapien quis bibendum imperdiet. Nunc ornare euismod
                elit, vel molestie magna tempus ut. Fusce convallis turpis
                magna. Quisque aliquet fermentum est, sit amet accumsan diam
                pharetra eu. Cras a mi a magna dapibus consequat.
              </p>
            </GridColumn>
            <GridColumn>
              <h2>Contact</h2>
              <p>
                <a href="mailto:samueljtravis@gmail.com">
                  samueljtravis@gmail.com
                </a>
              </p>
            </GridColumn>
            <GridColumn>
              <h2>Commercial Work</h2>
              {!passwordCorrect &&
                <input
                  placeholder="What's the password?"
                  onKeyPress={this.onPasswordKeyPress}
                />}
              <p>Lorem ipsum dolor sit amet</p>
              <p>Fusce convallis turpis magna</p>
            </GridColumn>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Header;
