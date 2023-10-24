import "./App.css";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/entry" element={<EntryPage />} />
      </Routes>
    </>
  );
};

export default App;
