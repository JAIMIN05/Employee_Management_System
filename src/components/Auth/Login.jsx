import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
          <form action="" className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e)
          }}>
            <input
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
              required
              type="email"
              placeholder="Enter your Email"
              className="outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-4 text-xl placeholde:text-white"
            />
            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
              required
              type="password"
              placeholder="Enter Password"
              className="mt-4 outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-4 text-xl placeholde:text-white"
            />
            <button className="mt-6 border-none outline-none bg-emerald-600 rounded-full py-2 px-8 w-full text-xl placeholde:text-white">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
