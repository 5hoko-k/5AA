import { Bars3Icon, ChevronDownIcon, PlayIcon, QuestionMarkCircleIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { Button } from "@mui/material";


function MobilePopover() {
  return (
    <>
      <div className=" relative grid grid-cols-5 justify-items-center h-20 px-3 bg-teal-200">
        <div className=" col-span-1 self-center">logo</div>
        <Popover className="relative col-start-5 col-span-1 self-center">
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex items-center p-3 bg-white rounded-md hover:bg-slate-100 hover:ring-1">
                <Bars3Icon className="h-6 w-6" />
              </Popover.Button>
              <Popover.Panel className="absolute -end-1/4 w-screen max-w-sm z-10 top-16 bg-white rounded-xl p-8 shadow-xl">
                <div className="grid gap-5">
                  <a
                    href="/"
                    className="rounded-md bg-slate-100 hover:bg-slate-200 p-3 flex justify-center"
                  >
                    <PlayIcon className="h-5 w-5"/> <span>Home</span>
                  </a>

                  <a
                    href="/library"
                    className="rounded-md bg-slate-100 hover:bg-slate-200 p-3 flex justify-center"
                  >
                    <RectangleStackIcon className="h-5 w-5 self-center" /> <span>Library</span> 
                  </a>

                  <a
                    href="/about"
                    className="rounded-md bg-slate-100 hover:bg-slate-200 p-3 flex justify-center"
                  >
                    <QuestionMarkCircleIcon className="h-5 w-5" /> About
                  </a>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </>
  );
}

export default MobilePopover;
