import React, { Component } from "react";
import Axios from "axios";

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      alwaysOpen: ["www.facebook.com", "www.google.com", "www.nytimes.com"],
      readSoon: ["www.article.com", "www.otherarticle.com"],
      readLater: ["www.readlater.com", "www.readevenmorelater.com"]
    };
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
          <label htmlFor="url">Add Tab Here:</label>
          <input size="50" type="text" name="url" />
          <select>
            <option value="always-open">Always Open</option>
            <option value="read-now">Read Soon</option>
            <option value="read-later">Read Later</option>
          </select>
          <button type="submit">Add Tab</button>
        </form>
        <div className="row">
          <div className="always-open column">
            <h2>ALWAYS OPEN</h2>
            <ul>
              {this.state.alwaysOpen.map(url => (
                <li>{url}</li>
              ))}
            </ul>
          </div>
          <div className="read-now column">
            <h2> READ SOON </h2>
            <ul>
              {this.state.readSoon.map(url => (
                <li>{url}</li>
              ))}
            </ul>
          </div>
          <div className="read-later column">
            <h2> READ LATER </h2>
            <ul>
              {this.state.readLater.map(url => (
                <li>{url}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
