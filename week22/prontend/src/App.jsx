import { Routes, Route } from 'react-router'
import './App.css'
import ShopPage from './pages/ShopPage'
import Header from './components/Header'
import CartPage from './pages/CartPage'
function App() {
  return (
    <div>
      <Header />
        <Routes>
         <Route path="/" element={<ShopPage />} />
         <Route path="/cart" element={<CartPage />} />
        </Routes>
    </div>
  )
}
export default App
