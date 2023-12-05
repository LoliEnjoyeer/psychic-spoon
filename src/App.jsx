import "./App.css";
import LoginPage from "./pages/LoginPage";
import DevicesPage from "./pages/dashboard/DevicesPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/devices" element={<DevicesPage />} />
      </Routes>
    </>
  );
};

export default App;
