import { Route, Routes, useNavigate } from 'react-router'
import HomePage from './pages/HomePage'
import AddLauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtactedRoute from './componnet/ProtactedRoute'
import UsersPage from './pages/UsersPage'

export function App() {
  return (
    <>
      <Routes>      
        <Route path="/login" element={<LoginPage />} />
        <Route path='/' element={<ProtactedRoute >
          <HomePage/>
        </ProtactedRoute>}/>
        <Route path='/register' element={<ProtactedRoute >
          <RegisterPage/>
        </ProtactedRoute>}/>
        <Route path='/launcher' element={<ProtactedRoute >
          <AddLauncherPage/>
        </ProtactedRoute>}/>
        <Route path='/details/:id' element={<ProtactedRoute >
          <LauncherDetailsPage/>
        </ProtactedRoute>}/>
        <Route path='/users' element={<ProtactedRoute >
          <UsersPage/>
        </ProtactedRoute>}/>
      </Routes>
    </>
  )
}

export default App