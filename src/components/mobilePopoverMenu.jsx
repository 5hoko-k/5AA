import { Bars3Icon, PlayIcon, QuestionMarkCircleIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";

function MobilePopover() {
  return (
    <>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex items-center p-3 bg-emerald-800 rounded-md hover:bg-emerald-900 ">
                <Bars3Icon className="h-6 w-6 text-slate-300" />
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
    </>
  );
}

export default MobilePopover;
