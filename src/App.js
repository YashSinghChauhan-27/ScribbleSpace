import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import IntroPage from "./components/IntroPage";
import { useState, useEffect } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth-token");
  };

  useEffect(() => {
    const token =
      localStorage.getItem("auth-token") ||
      sessionStorage.getItem("auth-token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <NoteState>
        <Router>
          <Navbar
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
          />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<IntroPage />} />
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
              <Route
                path="/login"
                element={
                  <Login showAlert={showAlert} handleLogin={handleLogin} />
                }
              />
              <Route
                path="/home"
                element={
                  isAuthenticated ? (
                    <Home showAlert={showAlert} />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
