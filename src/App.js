import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Week1 from "./weeks/Week1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/week1/1" />} />
        <Route path="/week1/:id" element={<Week1 />} />
      </Routes>
    </Router>
  );
}

export default App;
