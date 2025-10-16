import { useRef } from "react";

export default function SearchInput({ label, placeholder, foodData, setFilteredFoodList, setSelectedButton }) {
    const searchTerm = useRef('');
    const handleSearch = (e) => {
        e.preventDefault();
        let keyword = searchTerm.current.value;
        let updatedFoodList = foodData.filter((food) => {
            return food.name.toLowerCase().includes(keyword.toLowerCase());
        });
        setFilteredFoodList(updatedFoodList);
        setSelectedButton("all");
    }

    return (
        <form onSubmit={handleSearch}>
            <label for="default-search" className="mb-2 text-sm font-medium text-white sr-only">{label}</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    type="search"
                    ref={searchTerm}
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-white border border-red-400 rounded-lg mr-4"
                    placeholder={placeholder}
                />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer">Search</button>
            </div>
        </form>
    )
}
