import { type Coffee } from "../lib/coffees";

const CoffeeCard = ({
  image,
  name,
  price,
  rating,
  votes,
  popular = false,
  available,
}: Coffee) => {
  return (
    <div className="bg-transparent text-white  overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-36 w-full object-cover rounded-xl"
        />

        {popular && (
          <span className="absolute top-2 left-2 rounded-full bg-yellow-200 px-3 py-1 smallText text-black">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="py-4 space-y-2">
        {/* Name & Price */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">{name}</h3>
          <span className="rounded-md bg-blueSky priceText  text-black-50 px-2 py-1 font-semibold">
            {price}
          </span>
        </div>

        {/* Rating */}
        <div className="flex justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <img
              src={`/src/assets/${rating ? "Star_fill" : "Star"}.svg`}
              alt="rating"
              className="size-6"
            />
            <span className="text-white font-semibold">{rating}</span>
            <span className="text-gray-500 font-medium label">
              {rating ? `(${votes} votes)` : "No ratings"}
            </span>
          </div>
          {!available && (
            <span className="text-redWhite text-xs font-semibold">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
