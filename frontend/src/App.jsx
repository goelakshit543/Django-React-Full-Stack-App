import React from "react"
import {BrowserRouter, Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Home from "./pages/home"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar";
function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout(){
   localStorage.clear()
  return <Register/>
}

function App() {

  return (
    <div>
     <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
