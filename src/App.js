import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import _404 from "./components/404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chart" element={<Chart />} />
          {/* <Route path="*" element={<_404 />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
