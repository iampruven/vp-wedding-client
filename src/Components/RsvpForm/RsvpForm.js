import React from "react";

export default class RsvpForm extends React.Component {
  state = {
    firstname: "",
    lastname: ""
  };

  updateFirstname = (value) => {
    this.setState({ firstname: value });
  };
  updateLastname = (value) => {
    this.setState({ lastname: value });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="firstname">Firstname:</label>
          <input
            id="firstname"
            value={this.state.firstname}
            onChange={(e) => this.updateFirstname(e.target.value)}
            required
          />
          <label htmlFor="lastname">Lastname:</label>
          <input
            id="lastname"
            value={this.state.lastname}
            onChange={(e) => this.updateLastname(e.target.value)}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
