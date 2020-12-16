import Header from "../Header/Header";
import RsvpPage from '../../Routes/RsvpPage/RsvpPage';
import {Switch, Route} from 'react-router-dom';
import StoryRoute from "../../Routes/StoryPage/StoryRoute";
import LandingPage from '../../Routes/LandingPage/LandingPage'
import './App.css';
function App() {
  return (
    <main>
      <Header />
      <LandingPage/>
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
