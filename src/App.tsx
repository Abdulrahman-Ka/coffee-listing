import CoffeeCard from "./components/CoffeeCard";
import CoffeeList from "./components/CoffeeList";

function App() {
  return (
    <>
      <div className="sm:h-52 xl:h-64 h-72 w-full bg-[url(assets/bg-cafe-sm.jpg)] lg:bg-[url(assets/bg-cafe-lg.jpg)]  sm:bg-[url(assets/bg-cafe-lg.jpg)] bg-cover  bg-no-repeat">
        <div className="flex">
          <div className="my-20 sm:my-32 mx-5 sm:mx-8 xl:mx-24 bg-black-50 rounded-xl px-0">
            <header className="flex py-8 m-0 sm:pt-16 flex-col justify-center items-center bg-[url(assets/vector.svg)] bg-no-repeat sm:bg-position-[center_right_10rem] xl:bg-position-[center_right_20rem] bg-top">
              <h1 className="text-white heading font-medium">Our Collection</h1>
              <p className="label text-center font-medium text-gray-500 px-12 sm:w-[54%] xl:w-[48%]">
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </p>
            </header>
            <main className="flex flex-col items-center pb-12 gap-10">
              <div className="flex justify-center">
                <button className="bg-gray-600 text-white rounded-xl px-4 py-2">
                  All Products
                </button>
                <button className="bg-transparent text-white rounded-xl px-4 py-2">
                  Available Now
                </button>
              </div>
              <div>
                <CoffeeList />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
