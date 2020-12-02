import React from "react";
import Story from "../../Components/Story/Story";
import './StoryRoute.css';
export default class StoryRoute extends React.Component {
  render() {
    return (
      <section className="middle-part">
        <Story />
      </section>
    );
  }
}
