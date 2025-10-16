const imgBasePath = import.meta.env.VITE_ASSET_BASE_URL;

export default function FoodItem({ imgSrc, title, content, price }) {
    const USD_FORMATTER = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });


    function formatUSD(amount, fallback = "—") {
        if (amount === null || amount === undefined || amount === "") return fallback;
        const num = typeof amount === "string" ? Number(amount) : amount;
        if (!Number.isFinite(num)) return fallback;
        return USD_FORMATTER.format(num);
    }

    return (
        <div className=" rounded-2xl bg-[radial-gradient(120%_80%_at_0%_0%,#98F9FF33_0%,transparent_40%),radial-gradient(120%_80%_at_100%_100%,#8726B733_0%,transparent_45%)] w-[340px]">
            <a
                href="#"
                className="flex flex-col md:flex-row rounded-2xl w-full shadow-lg border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/15 transition"
            >
                <img
                    className="w-36 h-36 p-2 rounded-full object-cover"
                    src={`${imgBasePath}${imgSrc}`}
                    alt="Boiled Eggs"
                />
                <div className="ml-2 flex flex-col justify-between p-4 leading-normal w-56">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                        {title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-100/80">{content}</p>
                    <div className="flex justify-end mt-5">
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            {formatUSD(price)}
                        </button>
                    </div>
                </div>
            </a>
        </div>
    );
}
