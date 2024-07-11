import { useEffect, useState } from "react";
import axios from "axios";
import CoffeeCard from "../component/CoffeeCard";

const Coffee = () => {
  const [data, getData] = useState([]);
  const [btn, setbtn] = useState(true);

  const toggleCoffee = async () => {
    if (btn) {
      try {
        let res = await axios.get("http://localhost:8080/coffee");
        console.log(res.data);
        getData(res.data);
      } catch (e) {
        console.log(e);
      }
    } else {
      getData([]);
    }
    setbtn(!btn);
  };

  return (
    <div>
      <button onClick={toggleCoffee}>
        {btn ? "Get Coffee" : "Vanish Coffee"}
      </button>
      <div className="coffee_container">
        {data.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            image={coffee.image}
            title={coffee.title}
            price={coffee.price}
            description={coffee.description}
            ingredients={coffee.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
