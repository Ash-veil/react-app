
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="/customers" element={<Customers />} />
          </Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
