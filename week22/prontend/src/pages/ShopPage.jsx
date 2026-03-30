import data from '../data/products.json'
import Card from '../components/Card'

export default function ShopPage() {
    return (
        <>
            <br/>
            <div className='text-[#b9985e]' >Exercise idea</div>
            <p className="text-2xl font-bold ">Use global state to keep the cart in sync everywhere</p>
            <p className="text-gray-500 w-169">The products come from a JSON file, and both the shop page and the cart page read the same Zustand store.</p>
            <br/>
            <div className='grid grid-cols-4 gap-6'>
                {data.map((product) =>
                    <Card key={product.id} product={product} />
                )}
            </div>
        </>
    )
}
