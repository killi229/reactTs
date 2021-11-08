import React from "react";
import { ProjectListScreen } from "screens/project-list";
import "./App.css";
import { LoginScreens } from "./screens/login";

function App() {
  return (
    <div className="App">
      <LoginScreens />
      <ProjectListScreen />
    </div>
  );
}

export default App;
