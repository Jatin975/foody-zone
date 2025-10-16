import { useState } from "react";
import foodyZone from "../assets/FoodyZone.svg";
import SearchInput from './SearchInput';

export default function Header({ foodData, setFilteredFoodList }) {
    const [selectedButton, setSelectedButton] = useState("all");

    function handleFoodDataChange(type) {
        if (type == "all") {
            setFilteredFoodList(foodData);
        } else {
            setFilteredFoodList(foodData.filter((food) => food.type === type));
        }
        setSelectedButton(type);
    }

    return (
        <div style={{ backgroundColor: "#323334" }}>
            <div className="flex flex-col md:flex-row justify-between px-12 md:px-28 pt-20 gap-5">
                <img src={foodyZone} alt="FoodyZone" />
                <SearchInput label="Search" placeholder="Search Food..." foodData={foodData} setFilteredFoodList={setFilteredFoodList} setSelectedButton={setSelectedButton}/>
            </div>
            <div className="flex gap-3 justify-center items-center py-5 flex-wrap">
                <button
                    type="button"
                    class={`focus:outline-none text-white bg-red-700 hover:bg-red-800 ${selectedButton != "all" ? "cursor-pointer" : "bg-red-900 ring-2 ring-red-300 hover:bg-red-900"}  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
                    onClick={() => handleFoodDataChange("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    class={`focus:outline-none text-white bg-red-700 hover:bg-red-800  ${selectedButton != "breakfast" ? "cursor-pointer" : "bg-red-900 ring-2 ring-red-300 hover:bg-red-900"}   focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
                    onClick={() => handleFoodDataChange("breakfast")}
                >
                    Breakfast
                </button>
                <button
                    type="button"
                    class={`focus:outline-none text-white bg-red-700 hover:bg-red-800  ${selectedButton != "lunch" ? "cursor-pointer" : "bg-red-900 ring-2 ring-red-300 hover:bg-red-900"} focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
                    onClick={() => handleFoodDataChange("lunch")}
                >
                    Lunch
                </button>
                <button
                    type="button"
                    class={`focus:outline-none text-white bg-red-700 hover:bg-red-800  ${selectedButton != "dinner" ? "cursor-pointer" : "bg-red-900 ring-2 ring-red-300 hover:bg-red-900"}   focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
                    onClick={() => handleFoodDataChange("dinner")}
                >
                    Dinner
                </button>
            </div>
        </div>
    );
}
