import "./App.css";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import DevicesPage from "./pages/dashboard/DevicesPage";
import UsersPage from "./pages/dashboard/UsersPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/manage" element={<EntryPage />} />
        <Route path="/manage/devices" element={<DevicesPage />} />
        <Route path="/manage/users" element={<UsersPage />} />
      </Routes>
    </>
  );
};

export default App;
