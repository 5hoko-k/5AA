import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import MobilePopover from "./mobilePopover";
import { useEffect, useState } from "react";

function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <div className=" relative grid grid-cols-5 justify-items-center h-20 px-3 bg-emerald-700">
        <div className=" col-span-1 self-center">logo</div>
        {isSmallScreen && <MobilePopover />}
      </div>
    </>
  );
}

export default NavBar;
