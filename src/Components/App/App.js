import React from "react";
import Header from "../Header/Header";
import RsvpPage from '../../Routes/RsvpPage/RsvpPage';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <main>
      <Header />

      <section>
        <Switch>
          <Route path="/rsvp">
            <RsvpPage />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default App;
