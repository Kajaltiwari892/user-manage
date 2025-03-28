import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UserList from './pages/UserList';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
   
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
   
  );
}

export default App;