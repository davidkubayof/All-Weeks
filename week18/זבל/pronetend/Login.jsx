import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({username:"David"});
  async function getData() {
    const url = "http://localhost:3000";

    try {
      const response = await fetch(url+"/api/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      setUser({...user ,result:result})
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="flex flex-col w-100">
            <br/>
          <input
            type="text"
            className="  h-12 bg-gray-300 hover:border"
            placeholder="username"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
          <br />
          <input
            type="password"
            className=" h-12 bg-gray-300 hover:border"
            placeholder="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <br />
          <button
            onClick={() => {
              getData();
            }}
            className="rounded-2xl h-10 text-white bg-black  hover:rounded-none cursor-pointer"
          >
            Log In
          </button>
          <br/>
            <div>login is </div>
        </div>
      </main>
    </>
  );
};

export default Login;
