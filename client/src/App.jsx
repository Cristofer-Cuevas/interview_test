import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyes from "./styles/Global.styles";

function App() {
  return (
    <Router>
      <GlobalStyes />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
