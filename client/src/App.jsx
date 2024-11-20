import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';
import CreateIncident from './pages/CreateIncident';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ManageIncidents from './pages/ManageIncidents';
import MyProfile from './pages/MyProfile';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Previously protected routes, now public */}
        <Route path="/home" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/create-incident" element={
          <Layout>
            <CreateIncident />
          </Layout>
        } />
        <Route path="/manage-incidents" element={
          <Layout>
            <ManageIncidents />
          </Layout>
        } />
        <Route path="/profile" element={
          <Layout>
            <MyProfile />
          </Layout>
        } />
        <Route path="/notifications" element={
          <Layout>
            <Notifications />
          </Layout>
        } />
        <Route path="/settings" element={
          <Layout>
            <Settings />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;