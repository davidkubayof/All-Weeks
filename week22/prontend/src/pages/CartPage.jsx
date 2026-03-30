import { useCartStore } from '../stor/useGlobalStor';
import Card from '../components/Card';

export default function CartPage() {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.claerCart);

    return (
        <>
            <br />
            <div className='text-[#b9985e]' >Cart route</div>
            <p className="text-2xl font-bold ">Your shopping cart</p>
            <p className="text-gray-500 w-169">This page reads the same global state as the product cards, so changes from one route are visible in the other route immediately.</p>
            <br />

            <div className='border'>
                {(cart.length == 0) && <h1>Cart is empty</h1>}
                {cart.map((product) =>
                    <Card key={product.id} product={product} isInCartPage={true} />
                )}
                <div className='summary'>
                    <h2>Order Summary:</h2>
                    <h3>Total Items: {cart.length}</h3>
                    <h3>Total Price: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h3>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            </div>
        </>
    )
}
