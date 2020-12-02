import Header from "../Header/Header";
import RsvpPage from '../../Routes/RsvpPage/RsvpPage';
import {Switch, Route} from 'react-router-dom';
import StoryRoute from "../../Routes/StoryPage/StoryRoute";
import './App.css';
function App() {
  return (
    <main>
      <Header />

      <section className="mid-part">
        <Switch>
          <Route path="/rsvp">
            <RsvpPage />
          </Route>
          <Route path="/story">
            <StoryRoute />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default App;
