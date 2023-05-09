import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function NavBar() {
  return (
    <>
      {/* <header>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header> */}
      <AppBar>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '20px 50px' }} > 
          <Button component={Link} to="/" color="inherit">
            <Typography variant="h6">Home</Typography>
          </Button>
          <Button component={Link} to="/library" color="inherit">
            <Typography variant="h6">Library</Typography>
          </Button>
          <Button component={Link} to="/about" color="inherit">
            <Typography variant="h6">About</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
