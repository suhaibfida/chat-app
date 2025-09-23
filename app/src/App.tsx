import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-black h-screen">
        <div className="flex justify-center items-center">
          <div className="h-140 w-130 translate-y-10 border border-gray-500 rounded-3xl">
            <div className="text-white pl-5 pt-5 pb-2 text-3xl ">
              <span className="text-5xl text-slate-500">h</span>anasu
              <span className="text-lg">.in</span>
            </div>
            <hr className="border-t border-gray-500" />
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
