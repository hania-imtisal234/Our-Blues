import React from "react";
import { Route, Routes } from "react-router-dom/dist";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/first" element={<h1>first</h1>} />
        <Route path="/second" element={<h1>second</h1>} />
        <Route path="/third" element={<h1>third</h1>} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
