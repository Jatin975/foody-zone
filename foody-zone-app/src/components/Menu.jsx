import FoodItem from './FoodItem';
import bg from '../assets/bg.png';

export default function Menu({ foodData, loading, error }) {

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat repeat",
                backgroundPosition: "top left",
                backgroundSize: "100% auto",
                width: "100%",
                minHeight: "calc(100dvh - 208px)"
            }}
        >
            <div className="px-24 pt-16 flex flex-wrap gap-5 justify-center">
                {foodData.length > 0 &&
                    foodData.map((data) => {
                        return (
                            <FoodItem
                                key={data.name}
                                imgSrc={data.image}
                                title={data.name}
                                content={data.text}
                                price={data.price}
                            />
                        );
                    })}
            </div>
            {error && <div className='px-24 pt-16 flex justify-center ' >
                {foodData.length === 0 && <p style={{ backgroundColor: "#323334" }} className='rounded-lg text-2xl p-4 shadow-md text-red-500'>{error}</p>}
            </div>}
            {loading && <div className='px-24 pt-16 flex justify-center ' >
                {foodData.length === 0 && <p style={{ backgroundColor: "#323334" }} className='rounded-lg text-2xl p-4 shadow-md text-white'>Looding Food Items...</p>}
            </div>}

        </div>
    );
}
