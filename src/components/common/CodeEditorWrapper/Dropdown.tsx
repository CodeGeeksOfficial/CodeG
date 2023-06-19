import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIdeState } from "src/core/redux/reducers/ideSlice";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useCodeEditorContext } from "./CodeEditorWrapper";
import languagesConfig from "./languagesConfig";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SelectLang = ({ setValue, getValues, watch }: any) => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="ml-16 border-none">
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#272727] px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 text-gray-50">
          {watch('language')}
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
            {languagesConfig.map((languageConfig, idx) => (
              <Menu.Item key={idx}>
                {({ active }) => (
                  <span
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-50",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => {
                      setValue('language', languageConfig.language)
                      setValue('code', languageConfig.code)
                      setValue('editor_lang', languageConfig.editor_lang)
                      setValue('ext', languageConfig.ext)
                    }}
                  >
                    {languageConfig.language}
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

const DropDown = (props: any) => {

  const { setValue, getValues, watch } = useCodeEditorContext();

  return (
    <section className="w-full h-[60px] flex items-center">
      <SelectLang setValue={setValue} getValues={getValues} watch={watch} />
    </section>
  );
};

export default DropDown;
