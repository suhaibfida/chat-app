import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [ws, setWs] = useState<any>();
  const [mess, onMess] = useState<string[]>(["hello"]);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setWs(ws);
    ws.onmessage = (env) => {
      onMess((prev) => [...prev, env.data]);
      console.log(env.data);
    };
  }, []);
  return (
    <>
      <div className=" bg-black h-screen">
        <div className="flex justify-center items-center">
          <div className="h-140 w-130 translate-y-10 border-2 border-gray-500 rounded-2xl">
            <div className="text-white pl-5 pt-5 pb-2 text-3xl ">
              <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                H
              </span>
              anasu
              <span className="text-lg">.in</span>
            </div>
            <hr className="border-t border-gray-500" />
            <div className="mt-10">
              {mess.length > 0 && (
                <span className="px-7 py-3 bg-white mx-10 my-20 rounded-xl">
                  {mess}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex translate-y-18">
          {" "}
          <input
            className=" border rounded-2xl w-96 translate-x-145 outline-none h-12 bg-white pl-5"
            type="text"
            placeholder="Send message...."
          ></input>
        </div>
      </div>
    </>
  );
}

export default App;
