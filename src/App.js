
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 p-4 main-wrapper">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
