import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { Button } from "@mui/material";

function MobilePopover() {
  return (
    <>
      <div className=" relative flex h-20 justify-center px-3 bg-teal-200">
        {/* <div className="self-center">logo</div> */}
        <Popover className="relative self-center">
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex items-center p-3 bg-white rounded-md hover:bg-slate-100 hover:ring-1">
                <Bars3Icon className="h-6 w-6" />
              </Popover.Button>
              <Popover.Panel className="absolute left-1/2 -translate-x-1/2 w-screen max-w-sm z-10 top-16 bg-white rounded-xl p-8 ring-1 ">
                <div className="grid gap-5">
                  <a
                    href="/"
                    className="rounded-md hover:bg-slate-200 p-3 ring-1"
                  >
                    Home
                  </a>

                  <a
                    href="/library"
                    className="rounded-md hover:bg-slate-200 p-3 ring-1"
                  >
                    Library
                  </a>

                  <a
                    href="/about"
                    className="rounded-md hover:bg-slate-200 p-3 ring-1"
                  >
                    About
                  </a>
                </div>

                <img src="/solutions.jpg" alt="" />
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </>
  );
}

export default MobilePopover;
