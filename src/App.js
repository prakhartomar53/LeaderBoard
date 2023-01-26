import "./App.css";
import Home from "./components/Home";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPortal from "./components/AdminPortal";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/AdminPortal"
            element={
             <AdminPortal />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
