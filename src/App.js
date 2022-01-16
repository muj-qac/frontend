// import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KpiUser from "./components/KpiUser";
import UserModal from "./components/modals/UserModal";
import CreateKpi from "./pages/CreateKpi";
import Kpi from "./pages/Kpi";
import LoginPage from "./pages/LoginPage";
import ManageAccounts from "./pages/ManageAccounts";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="kpi" element={<Kpi />}></Route>
        <Route path="createKpi" element={<CreateKpi />}></Route>
        <Route path="manage" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
