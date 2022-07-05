import React from "react";

const PriorityStatus = ({ priority, status }) => {
  return (
    <div className="flex items-center justify-between gap-1">
      <span
        className={`capitalize rounded p-1 text-slate-800 dark:text-slate-200 underline-offset-2 `}
      >
        {priority} priority
      </span>
      <span>|</span>
      <span
        className={`capitalize rounded p-1 text-slate-800 dark:text-slate-200 underline-offset-2 `}
      >
        {status}
      </span>
    </div>
  );
};

export default PriorityStatus;
