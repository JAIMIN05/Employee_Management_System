import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({data}) => {

  const [userData, setUserData] = useContext(AuthContext);

  const handleAccept = () => {
    //find user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const updatedUserData = userData.map(user => {
      if(user.id === loggedInUser.id){
        // update the task
        const updatedTasks = user.tasks.map(task => {
          if(task.taskTitle === data.taskTitle){
            return {
              ...task,
              newTask: true
            };
          }
          return task;
        });

        // update task numbers
        return {
          ...user,
          tasks: updatedTasks,
          taskNumbers: {
            ...user.taskNumbers,
            newTask: user.taskNumbers.newTask + 1,
          }
        };
      }
      return user;
    })

    // Update Context and localStorage
    setUserData(updatedUserData);
    localStorage.setItem("employees",JSON.stringify(updatedUserData));

    // Update logged in user data
    const updatedLoggedInUser = updatedUserData.find(user => user.id === loggedInUser.data.id);
    localStorage.setItem("loggedInUser", JSON.stringify({
      ...loggedInUser,
      data: updatedLoggedInUser
    }));
  }

  return (
    <div className="bg-green-400 flex-shrink-0 w-[350px] p-5 h-full rounded-xl">
      <div className="flex justify-between">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-6">{data.taskTitle}</h2>
      <p className="text-base mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-3 p-5">
        <button 
        onClick={handleAccept}
        className="bg-green-500 w-full">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
