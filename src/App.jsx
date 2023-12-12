import "./App.css";
import LoginPage from "./pages/LoginPage";
import DevicesPage from "./pages/dashboard/DevicesPage";
import DataPage from "./pages/dashboard/dataPage";
import AlertsPage from "./pages/dashboard/AlertsPage";
import RequestsPage from "./pages/dashboard/RequestsPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/api-requests" element={<RequestsPage />} />
      </Routes>
    </>
  );
};

export default App;
