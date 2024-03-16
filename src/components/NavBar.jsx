import "../styles/Nav.css";
import MobilePopover from "./mobilePopoverMenu";
import MainNavMenu from "./mainNavMenu";

function NavBar() {

  return (
    <>
      <div className=" relative grid grid-cols-5 justify-items-center items-center h-20 px-3 bg-emerald-700 text-slate-100 shadow-md">
        <div className=" col-span-1">logo</div>
        <div className="col-start-2 col-end-5 invisible md:visible font-semibold text-xl">
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
