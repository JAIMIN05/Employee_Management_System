import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {

  const [userData, setUserData] = useContext(AuthContext);

  const handleComplete = () => {
    //find the current user data
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const updatedUserData = userData.map(user => {
      if(user.id === loggedInUser.id){
        //Update the task
        const updatedTasks = user.tasks.map(task => {
          if(task.taskTitle === data.taskTitle){
            return {
              ...task,       // Keep all existing properties
              active: false, // Override specific properties
              completed: true        
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
            active: user.taskNumbers.active - 1,
            completed: user.taskNumbers.completed + 1
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
  };

  
  const handleFail = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const updatedUserData = userData.map(user => {
      if (user.id === loggedInUser.data.id) {
        const updatedTasks = user.tasks.map(task => {
          if (task.taskTitle === data.taskTitle) {
            return {
              ...task,
              active: false,
              failed: true
            };
          }
          return task;
        });
        return {
          ...user,
          tasks: updatedTasks,
          taskNumbers: {
            ...user.taskNumbers,
            active: user.taskNumbers.active - 1,
            failed: user.taskNumbers.failed + 1
          }
        };
      }
      return user;
    });
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));

    const updatedLoggedInUser = updatedUserData.find(user => user.id === loggedInUser.data.id);
    localStorage.setItem("loggedInUser", JSON.stringify({
      ...loggedInUser,
      data: updatedLoggedInUser
    }));
  };


  return (
    <div className="bg-red-400 flex-shrink-0 w-[350px] p-5 h-full rounded-xl">
      <div className="flex justify-between">
        <h3 className="bg-red-500 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-6">{data.taskTitle}</h2>
      <p className="text-base mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-3 p-5">
        <button 
          onClick={handleComplete}
          className="bg-green-500 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button 
        onClick={handleFail}
        className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
