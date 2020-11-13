import React from "react";
import Config from '../../Config'
import './RsvpForm.css'
export default class RsvpForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    error:null,
    success:false,
    data:[]
  };

  onSubmitGuestName=(e)=>{
    e.preventDefault();
    fetch(`${Config.API_ENDPOINT}/rsvp`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          firstname:this.state.firstname,
          lastname:this.state.lastname
      })
    })
      .then((res)=>{
        if(!res.ok){
          throw new Error(res.statusText);
        }
        return res.json()
      })
      .then(res =>{
        this.setState({success:true, data:res})
      })
      .catch((err)=>err.message)
  }
  updateFirstname = (value) => {
    this.setState({ firstname: value });
  };
  updateLastname = (value) => {
    this.setState({ lastname: value });
  };
  render() {
    console.log(this.state.data)
    const status = <div><label htmlFor="status">Attending? (Y/N)</label><input type="checkbox" id="status"/></div> 
    console.log(status.checked)
    const people = this.state.data.map((user,id)=>{
    return <li className="people" key={id}>{user.firstname} {user.lastname} {status}</li>
    })
    return (
      <div>
        {this.state.success?people:<form onSubmit={e=>this.onSubmitGuestName(e)}>
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
        </form>}
      </div>
    );
  }
}
