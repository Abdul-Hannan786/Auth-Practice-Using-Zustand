import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import useStore from "./store/store";
import axios from "axios";
import { useEffect } from "react";
import Admin from "./pages/Admin";
import ProtectedAdminRoute from "./pages/ProtectedAdminRoute.jsx";
import DashboardLayout from "./pages/DashboardLayout.jsx";

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useStore();
  const fetchToken = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/verify-token", {
        withCredentials: true,
      });
      if (data.success) {
        setIsAuthenticated(true);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        {/* <Route element={<ProtectedAdminRoute />}> */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
