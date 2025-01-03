import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="bg-blue-400 flex-shrink-0 w-[350px] p-5 h-full rounded-xl">
      <div className="flex justify-between">
        <h3 className="bg-red-500 px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-6">{data.taskTitle}</h2>
      <p className="text-base mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-3 p-5">
        <button className="w-full bg-blue-500">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
