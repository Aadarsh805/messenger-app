import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Chats } from "./components/Chats/Chats";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
