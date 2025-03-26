import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Auth from "./components/auth";
import Profile from "./components/profile"; // Import Profile Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} /> {/* Add Profile Route */}
      </Routes>
    </Router>
  );
}

export default App;
