import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Login from "./pages/login";
import Register from "./pages/register";
import AdminDashboard from "./pages/adminDashboard";
import MyComplaints from "./pages/myComplaints";
import CreateComplaint from "./pages/createComplaint";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />

        {/* Temporary Pages for Sidebar Navigation */}
        <Route
          path="/myComplaints"
          element={<MyComplaints />}
        />

        <Route
          path="/createComplaint"
          element={<CreateComplaint />}
        />
      </Routes>

    </Router>
  );
}

export default App;