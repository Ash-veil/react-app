
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {AuthProvider} from "./context/authContext";
import ProtectedRoute from "./context/protectedRoutes";
import PublicRoute from "./context/publicRoutes";

import Layout from "./layout/layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import NotFound from "./pages/notFound";
import Register from "./pages/auth/register";

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
              <Route path="/customers" element={<ProtectedRoute> <Customers /> </ProtectedRoute>} />
            </Route>
            <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
