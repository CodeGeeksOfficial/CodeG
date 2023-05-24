import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentLanguage } from "src/core/redux/reducers/ideSlice";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};

const DropDown = (props: Props) => {
  const dispatch = useDispatch();
  return (
    // <div
    //   className="w-full h-[8%] bg-gradient-to-b from-[#272727] to-[#1e1e1e]"
    //   onClick={() =>
    //     dispatch(
    //       setCurrentLanguage({
    //         ext: "py",
    //         editor_lang: "python",
    //         language: "Python",
    //         code: `print("Hey Codie!")`,
    //       })
    //     )
    //   }
    // >
    //   DropDown
    // </div>
    <Menu as="div" className="relative inline-block text-left">
      <div className="ml-16 border-none">
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#272727] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-50">
          Options
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-10 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#272727] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-50">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-50",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
