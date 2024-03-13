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
              <Popover.Panel className="absolute -inset-x-24 z-10 top-16 bg-white rounded-md p-5 ring-1">
                <div className="grid grid-cols-2">
                  <a href="/analytics">Analytics</a>
                  <a href="/engagement">Engagement</a>
                  <a href="/security">Security</a>
                  <a href="/integrations">Integrations</a>
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

