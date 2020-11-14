import React from "react";
import Config from "../../Config";
import "./RsvpForm.css";

export default class RsvpForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    error: null,
    success: false,
    data: [],
    note: "",
    response: false,
    plus_one: false,
  };

  // onSubmitAllGuestInfo = (e)=>{
  //   e.preventDefault();
  //   fetch(`${Config.API_ENDPOINT}/update`, {
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body:JSON.stringify({
  //       firstname:this.state.firstname,
  //       lastname:this.state.lastname,
  //       response:this.state.response,
  //       plus_one:this.state.plus_one,
  //       notes:this.state.note
  //     })
  //   })
  // }
  onSubmitGuestName = (e) => {
    e.preventDefault();
    fetch(`${Config.API_ENDPOINT}/rsvp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((res) => {
        this.setState({ success: true, data: res });
      })
      .catch((err) => err.message);
  };
  updateFirstname = (value) => {
    this.setState({ firstname: value });
  };
  updateLastname = (value) => {
    this.setState({ lastname: value });
  };
  updateResponse = (e) => {
    this.setState({ response: e.target.checked });
  };
  updatePlusOne = (e) => {
    this.setState({ plus_one: e.target.checked });
  };
  updateNotes = (e) => {
    this.setState({ note: e.target.value });
  };
  render() {
    const noteField = (
      <div>
        <textarea
          value={this.state.note}
          onChange={(e) => this.updateNotes(e)}
          autoComplete="off"
          id="notes"
          rows="4"
          cols="30"
          maxLength="250"
          placeholder="Dietary restrictions, Name of plus one, etc."
        ></textarea>
      </div>
    );
    const status = (
      <div>
        <label htmlFor="status">Attending? (Y/N)</label>
        <input
          type="checkbox"
          checked={this.state.response}
          onChange={(e) => this.updateResponse(e)}
          id="status"
          required
        />
      </div>
    );
    const plusPerson = (
      <div>
        <label htmlFor="plus-person">Plus One? (Y/N)</label>
        <input
          type="checkbox"
          id="plus-person"
          required
          checked={this.state.plus_one}
          onChange={(e) => this.updatePlusOne(e)}
        />
      </div>
    );

    const people = this.state.data.map((user, id) => {
      return (
        <li className="people" key={id}>
          {user.firstname} {user.lastname} {status}
          {user.plus_one ? plusPerson : ""} {noteField}
        </li>
      );
    });
    return (
      <div>
        {this.state.success ? (
          <div>
            <form>
              {people}
              <button>Submit</button>
            </form>
          </div>
        ) : (
          <form onSubmit={(e) => this.onSubmitGuestName(e)}>
            <label htmlFor="firstname">Firstname:</label>
            <input
              id="firstname"
              autoComplete="off"
              value={this.state.firstname}
              onChange={(e) => this.updateFirstname(e.target.value)}
              required
              maxLength="250"
            />
            <label htmlFor="lastname">Lastname:</label>
            <input
              id="lastname"
              autoComplete="off"
              value={this.state.lastname}
              onChange={(e) => this.updateLastname(e.target.value)}
              maxLength="250"
              required
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}
