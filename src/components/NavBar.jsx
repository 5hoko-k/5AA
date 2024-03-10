import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";

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
      <div className=" relative flex h-20 justify-between px-3 bg-teal-200">
        <div className="self-center">logo</div>
        <Popover className="relative self-center">
          <Popover.Button className="inline-flex items-center p-3 bg-white rounded-md border hover:bg-slate-100">
            Kakashi
            <ChevronDownIcon className="h-3 w-3" aria-hidden="true" />
          </Popover.Button>
          <Popover.Panel className="absolute z-10">
            <div className="grid grid-cols-2">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </div>
    </>
  );
}

export default NavBar;
