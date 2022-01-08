// import SideBar from './components/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateKpi from './pages/CreateKpi';
import Kpi from './pages/Kpi';
import LoginPage from './pages/LoginPage';
import ManageAccounts from './pages/ManageAccounts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="kpi" element={<Kpi />}></Route>
        <Route path="createKpi" element={<CreateKpi />}></Route>
        <Route path="manage" element={<ManageAccounts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
