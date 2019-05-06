import React, { Component } from "react";

export default class SingleTab extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }
  render() {
    const btnClass = this.state.isHovered ? "hovered-list" : "";
    return (
      <div>
        <li
          className={btnClass}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          {/* props come get passed into this from the parent Homepage component (url)*/}
          {this.props.url}{" "}
          {this.state.isHovered ? (
            <button id="remove-button">remove</button>
          ) : (
            ""
          )}
        </li>
      </div>
    );
  }
}
