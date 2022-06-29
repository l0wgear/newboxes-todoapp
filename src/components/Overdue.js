import React from "react";

// Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.

const Overdue = () => {
  return (
    <div className="relative flex flex-col items-center group">
      <svg
        className="fill-rose-500 h-3 m-1"
        data-tooltip-target="tooltip-default"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
      </svg>
      <div class="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
        <span class="relative z-10 p-2 text-s leading-none text-white whitespace-no-wrap bg-slate-600 shadow-lg rounded">
          Overdue
        </span>
        <div class="w-3 h-3 -mt-2 rotate-45 bg-slate-600"></div>
      </div>
    </div>
  );
};

export default Overdue;
