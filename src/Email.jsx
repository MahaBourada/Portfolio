import React from "react";

const Email = () => {
  return (
    <div className="hidden fixed top-[139px] -right-32 ml-96 z-50">
      <div className="flex items-center justify-center rotate-90">
        <hr className="bg-thunderbird-700 border-none w-11 h-[2px] z-50"></hr>
        <a
          href="mailto:mahamarwabourada@gmail.com"
          rel="noreferrer"
          className="mb-1 ml-1 text-thunderbird-700 font-secondary font-semibold text-xl hover:-translate-y-1px hover:-translate-x-1px hover:text-thunderbird-800"
        >
          mahamarwabourada@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Email;
