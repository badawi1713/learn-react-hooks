import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components";
import {
  UseCallback,
  UseContext,
  UseEffect,
  UseImperativeHandle,
  UseLayoutEffect,
  UseMemo,
  UseReducer,
  UseRef,
  UseState,
} from "./pages";
import "./app.css";

const App = () => {
  return (
    <Router>
      <main className="container">
        <Navbar />
        <section className="container__main">
          <Routes>
            <Route path="/use-state" element={<UseState />} />
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/use-callback" element={<UseCallback />} />
            <Route path="/use-context" element={<UseContext />} />
            <Route path="/use-reducer" element={<UseReducer />} />
            <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route
              path="/use-imperative-handle"
              element={<UseImperativeHandle />}
            />
            <Route path="/use-memo" element={<UseMemo />} />
            <Route path="*" element={<Navigate to="/use-state" replace />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
};

export default App;
