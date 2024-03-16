import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import MobilePopover from "./mobilePopoverMenu";
import { useEffect, useState } from "react";
import MainNavMenu from "./mainNavMenu";

function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState();

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsSmallScreen(window.innerWidth < 768);
  //   };

  //   checkScreenSize();

  //   window.addEventListener("resize", checkScreenSize);

  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  return (
    <>
      <div className=" relative grid grid-cols-5 justify-items-center items-center h-20 px-3 bg-emerald-700">
        <div className=" col-span-1">logo</div>
        <div className="col-start-2 col-end-5 invisible md:visible ">
        <MainNavMenu />
        </div>

        <div className="relative col-start-5 md:invisible">
          <MobilePopover />
        </div>
      </div>
    </>
  );
}

export default NavBar;
