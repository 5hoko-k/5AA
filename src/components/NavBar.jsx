import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import MobilePopover from "./mobilePopover";

function NavBar() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            padding: "20px 50px",
          }}
        >
          <Button component={Link} to="/" color="secondary">
            <Typography variant="h6">Home</Typography>
          </Button>
          <Button component={Link} to="/library" color="secondary">
            <Typography variant="h6">Library</Typography>
          </Button>
          <Button component={Link} to="/about" color="secondary">
            <Typography variant="h6">About</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <MobilePopover />
    </>
  );
}

export default NavBar;
