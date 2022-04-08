import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UseState } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UseState />} />
      </Routes>
    </Router>
  );
};

export default App;
