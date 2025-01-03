import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedData = JSON.parse(JSON.stringify(userData));

    updatedData.forEach(function (elem) {
      if (asignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });
    setUserData(updatedData);
    console.log(updatedData);

    localStorage.setItem("employees", JSON.stringify(updatedData));

    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setAsignTo("");
    setCategory("");
  };

  return (
    <>
      <div className="mt-10 p-5 rounded bg-[#1c1c1c]">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex justify-between items-start w-full flex-wrap"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
                name=""
                id=""
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input
                value={asignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value);
                }}
                className="text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                name=""
                id=""
                placeholder="employee name"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm py-1 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                name=""
                id=""
                placeholder="design,dev,etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button
              className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
              type="submit"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
