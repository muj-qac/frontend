// import SideBar from './components/SideBar';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  CurrentUserContext,
  CurrentUserProvider,
} from './components/context/CurrentUserContext';
import CreateKpi from './pages/CreateKpi';
import Dashboard from './pages/faculty/Dashboard';
import Settings from './pages/faculty/Settings';
import Kpi from './pages/Kpi';
import LoginPage from './pages/LoginPage';
import ManageKpi from './pages/ManageKpi';
import User from './pages/User';

function App() {
  //context
  const { authLoading, currentUser, handleLogout, testData, Protect } =
    useContext(CurrentUserContext);

  const content = () => {
    if (authLoading) {
      return <div>Loading...</div>;
    } else
      return (
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route></Route>
            <Route
              path="kpi"
              element={
                <Protect>
                  <Kpi />
                </Protect>
              }
            ></Route>
            <Route
              path="kpi/createKpi"
              element={
                <Protect>
                  <CreateKpi />
                </Protect>
              }
            ></Route>
            <Route
              path="kpi/manageKpi"
              element={
                <Protect>
                  <ManageKpi />
                </Protect>
              }
            />
            <Route
              path="kpi/manageUser"
              element={
                <Protect>
                  <User />
                </Protect>
              }
            ></Route>
            <Route
              path="dashboard"
              element={
                <Protect>
                  <Dashboard />
                </Protect>
              }
            />
            <Route
              path="dashboard/setting"
              element={
                <Protect>
                  <Settings />
                </Protect>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      );
  };
  return <div>{content()}</div>;
}
export default App;
