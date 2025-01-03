import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   // getLocalStorage()
  // },)

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const storedUserData = JSON.parse(loggedInUser);
      setUser(storedUserData.role);

      // Always update employee data when userData changes
      if (storedUserData.role === "employee" && userData) {
        const freshEmployeeData = userData.find(
          (e) => e.id === storedUserData.data.id
        );
        if (freshEmployeeData) {
          setLoggedInUserData(freshEmployeeData);
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify({
              role: "employee",
              data: freshEmployeeData,
            })
          );
        }
      } else {
        setLoggedInUserData(storedUserData.data);
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        const latestEmployeeData = userData.find((e) => e.id === employee.id);
        setUser("employee");
        setLoggedInUserData(latestEmployeeData);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: latestEmployeeData,
          })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
