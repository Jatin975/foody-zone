import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

const baseApiUrl = import.meta.env.VITE_ASSET_BASE_URL;

export default function App() {
  const [food, setFood] = useState([]);
  const [filteredFoodList, setFilteredFoodList] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getFoodItem() {
      try {
        setIsLoading(true);
        const reponse = await fetch(`${baseApiUrl}/`);
        const data = await reponse.json();
        setFood(data);
        setFilteredFoodList(data);
        setErrorMsg(null);
      } catch (err) {
        console.log(err);
        setErrorMsg(err.message ?? "No food items found!.");
      } finally {
        setIsLoading(false);
      }
    }
    getFoodItem();
  }, [])

  return (
    <div className="text-red-300"
    >
      <Header foodData={food} setFilteredFoodList={setFilteredFoodList} />
      <Menu foodData={filteredFoodList} loading={isLoading} error={errorMsg} />
    </div>
  );
}
