import { useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products.jsx";

function Grid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {PRODUCTS.map((product) => {
        const thumb = product.images[0];

        return (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="
              cursor-pointer
              rounded-xl
              overflow-hidden
              bg-white dark:bg-gray-800
              shadow-lg
              hover:scale-105
              transition-transform
            "
          >
            <img
              src={thumb}
              className="w-full h-56 object-cover"
              alt={product.name}
            />

            <div className="p-4">
              <h2 className="font-bold dark:text-white">
                {product.name}
              </h2>

              <p className="text-gray-500 dark:text-gray-300">
                {product.category}
              </p>

              <p className="text-blue-600 dark:text-white mt-2">
                Rs {product.price.toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;