import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60">
      <div className="bg-red-400 mb-2 flex justify-between rounded p-4 text-lg">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData.map(function (ele, idx) {
          return (
            <div
              key={idx}
              className="border-emerald-500 border-2 mb-2 flex justify-between rounded p-4 text-lg "
            >
              <h2 className="text-lg font-medium w-1/5">{ele.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {ele.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {ele.taskNumbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-400">
                {ele.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-400">
                {ele.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
