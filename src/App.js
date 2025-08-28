
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {AuthProvider} from "./context/authContext";
import ProtectedRoute from "./context/protectedRoutes";
import PublicRoute from "./context/publicRoutes";

import Layout from "./layout/layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers/customers";
import ShowCustomer from "./pages/customers/showCustomer";
import NotFound from "./pages/notFound";
import Register from "./pages/auth/register";
import ComingSoon from "./pages/comingSoon"
import Expenses from "./pages/expenses/expenses";

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
              <Route path="/customers" element={<ProtectedRoute> <Customers /> </ProtectedRoute>} />
              <Route path="/customers/:id" element={<ProtectedRoute> <ShowCustomer /> </ProtectedRoute>} />
              <Route path="/expenses" element={<ProtectedRoute> <Expenses /> </ProtectedRoute>} />

              <Route path="/coming-soon" element={<ProtectedRoute> <ComingSoon /> </ProtectedRoute>} />
            </Route>
            <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
