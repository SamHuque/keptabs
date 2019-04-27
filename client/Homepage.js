import React, { Component } from "react";
import Axios from "axios";

export default class Homepage extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    console.log("the button has been clicked", event);
  }
  render() {
    return (
      <div>
        <h1>Keptabs</h1>
        <form onSubmit={this.handleClick}>
          <label htmlFor="url">URL:</label>
          <input size="50" type="text" name="url" />
          <select>
            <option value="always-open">Always Open</option>
            <option value="read-now">Read Soon</option>
            <option value="read-later">Read Later</option>
          </select>
          <button type="submit">Add Link</button>
        </form>
        <div class="row">
          <div class="always-open column">
            <h2>ALWAYS OPEN</h2>
          </div>
          <div class="read-now column">
            <h2> READ SOON </h2>
          </div>
          <div class="read-later column">
            <h2> READ LATER </h2>
          </div>
        </div>
      </div>
    );
  }
}
