import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from "./components/map";
import CovidIn from "./components/covidIn"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/country/:iso" element={<CovidIn />} />
      </Routes>
    </Router>
  );
}

export default App;
