import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Prediction from "./pages/Prediction";
import Maps from "./pages/Maps";
import Health from "./pages/Health";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<DashboardLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/prediction" element={<Prediction />} />

          <Route path="/maps" element={<Maps />} />

          <Route path="/health" element={<Health />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;