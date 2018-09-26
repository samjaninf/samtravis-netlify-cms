import React, { Component } from "react";
import { navigate, Link } from "gatsby"
import Grid, { GridColumn } from "../components/Grid";
import cx from "classnames";
import "./Header.css";

const projects = {
    "first-commercial-project": {
      "name": "Commercial Project 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nDonec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.",
      "images": ["/img/test2.jpg", "/img/test1a.jpg"]
    },
    "second-commercial-project": {
      "name": "Commercial Project 2",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nDonec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.",
      "images": [
        "/img/test1a.jpg",
        "/img/test2.jpg",
        "/img/test1a.jpg",
        "/img/test1a.jpg",
        "/img/test2.jpg",
        "/img/test2.jpg",
        "/img/test1a.jpg",
        "/img/test1a.jpg",
        "/img/test2.jpg",
        "/img/test2.jpg",
        "/img/test1a.jpg",
        "/img/test1a.jpg",
        "/img/test1a.jpg",
        "/img/test1a.jpg"
      ]
    },
    "third-commercial-project": {
      "name": "Commercial Project 3",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nDonec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.",
      "images": ["/img/test1a.jpg", "/img/test1a.jpg"]
    },
    "fourth-commercial-project": {
      "name": "Commercial Project 4",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nDonec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique sapien quis bibendum imperdiet. Nunc ornare euismod elit, vel molestie magna tempus ut. Fusce convallis turpis magna. Quisque aliquet fermentum est, sit amet accumsan diam pharetra eu. Cras a mi a magna dapibus consequat. Nullam fringilla ut ante id iaculis. Vestibulum quis tortor lorem. Aliquam et varius enim, ut egestas arcu. Phasellus sollicitudin nisl leo, sit amet facilisis ex blandit sit amet. Aliquam venenatis est tempor dolor placerat iaculis. Phasellus ornare orci ac lacus vehicula, eu viverra nunc egestas. Curabitur lacinia sem mi, ac ultrices dui egestas eget. Pellentesque sollicitudin ante et rutrum commodo. Duis id mauris ut augue condimentum aliquet sit amet vitae dolor. Mauris aliquet commodo laoreet. Vestibulum ultrices ante eget dolor dictum, vitae gravida nunc cursus.",
      "images": ["/img/test1a.jpg", "/img/test1a.jpg"]
    }
  }  

const PASSWORD = "password";

const projectsList = Object.keys(projects).map(id => {
  return Object.assign({}, projects[id], {
    id
  });
});

const redirect = url => {
  window.location = url;
};

const CommercialNav = () =>
  <div className="Header__Navigation Header__Navigation--Commercial">
    {localStorage.getItem("password") !== PASSWORD && redirect("/")}
    {projectsList.map(project =>
      <Link
        to={`/commercial/${project.id}`}
        activeClassName="Header__Navigation__Item--Active"
      >
        {project.name}
      </Link>
    )}
  </div>;

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
              exact
              to={`/`}
              activeClassName="Header__Navigation__Item--Active"
            >
              Creative
            </Link>,
            <Link
              exact
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
        {/* <Route path="/commercial" component={CommercialNav} /> */}

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
