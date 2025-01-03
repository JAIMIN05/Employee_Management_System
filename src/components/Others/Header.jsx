import React, { useEffect, useState } from "react";

const Header = (props) => {
//   const [username, setUsername] = useState('');
const loggedInUserString = localStorage.getItem('loggedInUser');

let username = 'Guest';
    
if (loggedInUserString) {
    try {
        const loggedInUser = JSON.parse(loggedInUserString);
        
        if (loggedInUser.role === 'employee' && loggedInUser.data) {
            username = loggedInUser.data.firstName;
        } 
        else if (loggedInUser.role === 'admin') {
            username = 'Admin';
        }
    } catch (error) {
        console.error('Error parsing user data:', error);
    }
}
console.log(username);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // props.changeUser("");
    window.location.reload()
  };

  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-medium">
          Hello, <br />
          <span className="text-3xl font-semibold">{username} 👋</span>{" "}
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-600 text-white px-5 py-2 rounded font-medium text-lg"
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Header;
