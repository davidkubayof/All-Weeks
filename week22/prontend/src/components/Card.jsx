import { useEffect, useState } from 'react';
import { useCartStore } from '../stor/useGlobalStor'

export default function Card({ product, isInCartPage = false }) {
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const [isInCart, setisInCart] = useState(false);
    useEffect(() => {
        const itemInCart = cart.find((item) => item.id == product.id);
        if (itemInCart) {
            setisInCart(true);
        } else {
            setisInCart(false);
        }
    }, [cart]);

    return (
        <div className='rounded-4xl flex flex-col justify-between bg-[#fefefd]  h-96'>
            {!isInCartPage && <h2 className='border rounded-t-4xl flex justify-center items-center h-28 bg-[#f7e7cc] text-2xl font-bold'>{product.image}</h2>}
            <h4 className='text-[#9a6b17]'>{product.category}</h4>
            <h3 className='text-2xl font-medium border'>{product.name}</h3>
            {!isInCartPage && <p className='border text-gray-500'>{product.description}</p>}
            <h2 className='font-bold border'>${product.price}</h2>
            {!isInCartPage && <span className='border text-gray-500 '>{isInCart ? "In Cart" : "Not in cart"}</span>}
            {!isInCart && <button className='border text-white bg-black cursor-pointer rounded-2xl' onClick={() => addToCart(product)}>Add To Cart</button>}
            {isInCart && <button className='border bg-[#f2ede2] cursor-pointer rounded-2xl' onClick={() => removeFromCart(product)}>Remove From Cart</button>}
        </div>
    )
}
