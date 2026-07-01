import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PRODUCTS from "../data/Products.jsx";

function Grid() {
  const navigate = useNavigate();

  const ITEMS_PER_LOAD = 12; // 3 rows × 4 cols

  const [visibleProducts, setVisibleProducts] = useState(ITEMS_PER_LOAD);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading) return;
    if (visibleProducts >= PRODUCTS.length) return;

    setLoading(true);

    setTimeout(() => {
      setVisibleProducts((prev) => prev + ITEMS_PER_LOAD);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 200) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleProducts, loading]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {PRODUCTS.slice(0, visibleProducts).map((product) => {
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

      {loading && (
        <div className="flex justify-center py-6">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white"></div>
        </div>
      )}
    </>
  );
}

export default Grid;