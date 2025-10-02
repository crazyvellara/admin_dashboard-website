import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/overview";
import Requests from "./pages/requests";
import Resources from "./pages/Resources";
import Volunteers from "./pages/Volunteers";
import Donations from "./pages/Donations";

import "./styles.css";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Overview</Link> |{" "}
        <Link to="/requests">Requests</Link> |{" "}
        <Link to="/resources">Resources</Link> |{" "}
        <Link to="/volunteers">Volunteers</Link> |{" "}
        <Link to="/donations">Donations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </div>
  );
}
