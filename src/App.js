import "./App.css";
import AppHooks from "./hooks_comps/appHooks";
import React from "react";
import Toggle from "./hooks_comps/toggle";
import SelectColor from "./hooks_comps/selectColor";
import AppTv from "./api_comps/appTv";

function App() {
  return (
    <div className="container">
      <AppTv />
      {/* <AppHooks />
      <Toggle />
      <SelectColor /> */}
    </div>
  );
}

export default App;
