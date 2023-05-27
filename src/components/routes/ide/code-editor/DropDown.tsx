import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIdeState, setCurrentLanguage } from "src/core/redux/reducers/ideSlice";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { setOutput } from "src/core/redux/reducers/outputSlice";
import { setInput } from "src/core/redux/reducers/inputSlice";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};

const languages = [
  {
    ext: "cpp",
    editor_lang: "cpp",
    language: "C++",
    code: `#include<bits/stdc++.h>
using namespace std;

int main()
{
    cout<<"Hey Codie!"<<endl;
    return 0;
}`,
  },
  {
    ext: "py",
    editor_lang: "python",
    language: "Python",
    code: `print("Hey Codie!")`,
  },
  {
    ext: "java",
    editor_lang: "java",
    language: "Java",
    code: `public class Main {
    public static void main(String args[]) {
        System.out.println("Hey Codie!");
    }
}`,
  },
  {
    ext: "js",
    editor_lang: "javascript",
    language: "Node.js",
    code: `/* 
    Use INPUT variable to get stdin.
    Try console.log(INPUT);
*/
console.log('Hey Codie!');`,
  },
];

const SelectLang = (props: Props) => {
  const ideState = useSelector(selectIdeState);
  const dispatch = useDispatch();
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="ml-16 border-none">
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#272727] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-50">
          {ideState.language}
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
            {languages.map((language, idx) => (
              <Menu.Item key={idx}>
                {({ active }) => (
                  <span
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-50",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => {
                      dispatch(setCurrentLanguage(language));
                      dispatch(setOutput({ output: "" }));
                      dispatch(setInput({ input: "" }));
                    }}
                  >
                    {language.language}
                  </span>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const DropDown = (props: Props) => {
  return (
    <section className="w-full h-[8%] flex items-center">
      <SelectLang />
    </section>
  );
};

export default DropDown;
