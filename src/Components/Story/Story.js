import React from "react";
import { Chrono } from "react-chrono";
import data from "./events";
import './Story.css'
export default class Story extends React.Component {
  render() {
    return (
      <div style={{ width: "800px", height: "950px" }}>
        <Chrono
          items={data}
          slideShow
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "#91C7B1",
            secondary: "#4C5454",
            cardBgColor: "#C191A1",
            cardForeColor: "#F1F7ED",
          }}
        />
      </div>
    );
  }
}
