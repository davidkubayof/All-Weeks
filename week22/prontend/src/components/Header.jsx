import { Link } from "react-router";
import { useCartStore } from "../stor/useGlobalStor";

export default function Header() {
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <header >
        <div>
          <p className='text-[#b9985e]' >Zustand demo</p>
          <h1 className='text-black mt-2 text-3xl font-bold'>Starter Store</h1>
        </div>
        <nav className="flex justify-center items-center gap-3">
          <p className='p-1 bg-black text-white rounded-2xl w-18 h-11 hover:bg-[#f2ede2] hover:text-black flex justify-center items-center'>
            <Link to="/">Shop</Link>
          </p>
          <p className='p-1 w-18 h-11 border border-gray-200 rounded-2xl hover:bg-[#f2ede2] flex justify-center items-center gap-2'>
            <Link to="/cart">Cart</Link>
            <span className="bg-[#f5c46e]  rounded-2xl w-10 h-7 flex justify-center items-center">{cart.length}</span>
          </p>
        </nav>
      </header>
    </>
  )
}
