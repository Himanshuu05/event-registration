import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Events from "./pages/Events";
import Registrations from "./pages/Registrations";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registrations" element={<Registrations />} />
      </Routes>
    </Router>
  );
}

export default App;