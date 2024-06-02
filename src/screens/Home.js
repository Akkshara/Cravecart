import React ,{useEffect , useState} from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousal from "../components/Carousal";
import HeroSection from "../components/HeroSection";


const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [groupedItems, setGroupedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/displaydata", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let data = await response.json();
      //  console.log('Fetched food items:', data);
      setFoodItem(data);

      response = await fetch("http://localhost:5000/api/displaycategory", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      data = await response.json();
      //  console.log('Fetched food category:', data);
      setFoodCat(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    if (foodCat.length > 0 && foodItem.length > 0) {
      try {
        const groupedFoodItems = foodCat.reduce((acc, category) => {
          acc[category.CategoryName] = foodItem.filter(item => item.CategoryName === category.CategoryName);
          return acc;
        }, {});
        setGroupedItems(groupedFoodItems);
        console.log('Grouped Food Items:', groupedFoodItems);
      } catch (error) {
        console.error("Error grouping items:", error);
      }
    }
  }, [foodCat, foodItem]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = searchQuery
  ? Object.keys(groupedItems).reduce((acc, category) => {
      acc[category] = groupedItems[category].filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return acc;
    }, {})
  : groupedItems;


  return (
    <div >
      <div><HeroSection searchQuery={searchQuery} handleChange={handleSearchChange}/></div>

      <div className="container">
        {Object.keys(filteredItems).map((categoryName) => (
          <div key={categoryName} className="mt-3 mt-3">
            <h2>{categoryName}</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {filteredItems[categoryName].map((item) => (
                <div key={item.name} className="col">
                  <Card data={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div><Footer /></div>
      
    </div>
  );
};

export default Home;
