import React, { Component } from "react";
import Axios from "axios";
import SingleTab from "./SingleTab";
import { connect } from "react-redux";

class Homepage extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();

    console.log("the button has been clicked", event);
  }
  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }
  render() {
    return (
      <div>
        <h1>Keptabs</h1>
        <form onSubmit={this.handleClick}>
          <label htmlFor="url">Add Tab Here:</label>
          <input size="50" type="text" name="url" />
          <select className={"select-css"}>
            <option value="always-open">Always Open</option>
            <option value="read-now">Read Soon</option>
            <option value="read-later">Read Later</option>
          </select>
          <button type="submit">Add Tab</button>
        </form>
        <div className="row">
          <div className="always-open column">
            <h2>ALWAYS OPEN</h2>
            <ol>
              {this.props.alwaysOpen.map(url => (
                <SingleTab url={url} />
              ))}
            </ol>
          </div>
          <div className="read-now column">
            <h2> READ SOON </h2>
            <ol>
              {this.props.readSoon.map(url => (
                <SingleTab url={url} />
              ))}
            </ol>
          </div>
          <div className="read-later column">
            <h2> READ LATER </h2>
            <ol>
              {this.props.readLater.map(url => (
                <SingleTab url={url} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alwaysOpen: state.alwaysOpen,
    readSoon: state.readSoon,
    readLater: state.readLater
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  null
)(Homepage);
