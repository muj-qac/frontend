// import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import CreateKpi from './pages/CreateKpi';
import Dashboard from './pages/faculty/Dashboard';
import Settings from './pages/faculty/Settings';
import Kpi from './pages/Kpi';
import LoginPage from './pages/LoginPage';
import ManageKpi from './pages/ManageKpi';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="kpi" element={<Kpi />}></Route>
        <Route path="kpi/createKpi" element={<CreateKpi />}></Route>
        <Route path="kpi/manageKpi" element={<ManageKpi />} />
        <Route path="kpi/manageUser" element={<User />}></Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/setting" element={<Settings />}></Route>
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
