import { useEffect, useState } from "react";
import { getCoffees, type Coffee } from "../lib/coffees";
import CoffeeCard from "./CoffeeCard";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCoffees()
      .then(setCoffees)
      .catch(() => setError("Failed to load coffees"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid sm:grid-cols-3 gap-12 grid-cols-1 sm:gap-8 sm:gap-y-4  w-1/2 sm:w-full sm:px-12 xl:px-28">
      {loading && <p className="text-white text-6xl font-bold">Loading...</p>}
      {error && <p className="text-redWhite">{error}</p>}
      {coffees &&
        coffees.map(
          ({ id, image, name, price, votes, rating, available, popular }) => (
            <CoffeeCard
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              votes={votes}
              rating={rating}
              available={available}
              popular={popular}
            />
          ),
        )}
    </div>
  );
};
export default CoffeeList;
