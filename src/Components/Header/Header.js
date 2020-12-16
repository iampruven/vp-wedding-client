import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: 0,
    backgroundColor: "rgba(255,255,255,0)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 48,
    padding: "0 30px",
  },
});
function Header() {
  const matches = useMediaQuery("(max-width:600px)");

  const classing = useStyles();
  return (
    <>
      <AppBar className={classing.root} aria-label="menu">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Wedding
          </Typography>
          <Typography variant="h6">
            <Link color="primary" variant="inherit" to="/">Home</Link>
            <Link color="primary" variant="inherit" to="/story">Our story</Link>
            <Link color="primary" variant="inherit" to="/rsvp">RSVP</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
