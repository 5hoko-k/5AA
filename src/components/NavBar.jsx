import "../styles/Nav.css";
import MobilePopover from "./mobilePopoverMenu";
import MainNavMenu from "./mainNavMenu";
import githubLogo from "../assets/github-icon-1.svg";

function NavBar() {
  return (
    <>
      <div className=" absolute z-20 grid grid-cols-5 justify-items-center items-center h-20 px-3 bg-emerald-700 text-slate-100 shadow-md w-screen">
        <div className=" col-span-1">logo</div>
        <div className="col-start-2 col-end-5 invisible md:visible font-semibold text-xl">
          <MainNavMenu />
        </div>

        <div className="relative col-start-5 flex justify-center items-center">
          <div className="absolute invisible md:visible">
            <a href="https://github.com/5hoko-k/5AA">
              <img
                src={githubLogo}
                alt="github icon"
                className="h-5 w-5"
              />
            </a>
          </div>
          <div className=" md:invisible">
            <MobilePopover />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
