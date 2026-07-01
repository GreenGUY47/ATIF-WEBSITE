import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Grid() {
  const PRODUCTS = [
     {
    id: 1,
    name: "Premium Black Hoodie",
    price: 2500,
    images: [
      "/images/pod.jpeg",
      "/images/pod1.jpeg",
      "/images/pod2.jpeg"
    ],
    category: "Winter Wear",
    desc: "Premium cotton oversized hoodie."
  },
    {
      id: 2,
      name: "Urban Sneakers",
      price: 4200,
       images: [
      "/images/pod3.jpeg",
      "/images/pod4.jpeg",
      "/images/pod5.jpeg"
    ],
      category: "Footwear",
      desc: "Comfort + streetwear design.",
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod6.jpeg",
      "/images/pod7.jpeg",
      "/images/pod8.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod9.jpeg",
      "/images/pod10.jpeg",
      "/images/pod11.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod12.jpeg",
      "/images/pod13.jpeg",
      "/images/pod14.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod15.jpeg",
      "/images/pod16.jpeg",
      "/images/pod17.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod18.jpeg",
      "/images/pod19.jpeg",
      "/images/pod20.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod21.jpeg",
      "/images/pod22.jpeg",
      "/images/pod23.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod24.jpeg",
      "/images/pod25.jpeg",
      "/images/pod26.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod27.jpeg",
      "/images/pod28.jpeg",
      "/images/pod29.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod30.jpeg",
      "/images/pod31.jpeg",
      "/images/pod32.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod33.jpeg",
      "/images/pod34.jpeg",
      "/images/pod35.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod36.jpeg",
      "/images/pod37.jpeg",
      "/images/pod38.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod39.jpeg",
      "/images/pod40.jpeg",
      "/images/pod1.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod6.jpeg",
      "/images/pod7.jpeg",
      "/images/pod8.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod.jpeg",
      "/images/pod1.jpeg",
      "/images/pod2.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod10.jpeg",
      "/images/pod11.jpeg",
      "/images/pod13.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod17.jpeg",
      "/images/pod21.jpeg",
      "/images/pod9.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod25.jpeg",
      "/images/pod30.jpeg",
      "/images/pod40.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod1.jpeg",
      "/images/pod35.jpeg",
      "/images/pod8.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod6.jpeg",
      "/images/pod7.jpeg",
      "/images/pod8.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod1.jpeg",
      "/images/pod2.jpeg",
      "/images/pod3.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
     {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3900,
       images: [
      "/images/pod5.jpeg",
      "/images/pod30.jpeg",
      "/images/pod40.jpeg"
    ],
      category: "Fashion",
      desc: "Minimal premium denim design.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
   <div>
  {/* Product Grid */}
  {!selectedProduct ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
      {PRODUCTS.map((product) => {
        const thumb = product.images?.[0] ?? product.image;
        return (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProduct(product)}
            className="
              cursor-pointer
              rounded-xl overflow-hidden
              bg-white dark:bg-gray-800
              shadow-lg
              hover:scale-[1.03]
              transition-transform duration-300
            "
          >
            <img
              src={thumb}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
              alt={product.name}
              loading="lazy"
            />
            <div className="p-3 sm:p-4">
              <h2 className="font-bold text-base sm:text-lg dark:text-white line-clamp-1">
                {product.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">
                {product.category}
              </p>
              <p className="text-blue-600 dark:text-white font-semibold mt-2 text-sm sm:text-base">
                Rs {product.price.toLocaleString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    /* Product Detail */
    <div className="p-4 sm:p-6 md:p-8  top-0 left-0 w-full h-full overflow-y-auto">
      <button
        onClick={() => setSelectedProduct(null)}
        aria-label="Back to product grid"
        className="
          mb-4
          bg-gray-200 dark:bg-gray-700 dark:text-white
          px-4 py-2
          rounded
          hover:bg-gray-300 dark:hover:bg-gray-600
          transition-colors
        "
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={15}
          loop={(selectedProduct.images?.length ?? 0) > 1}
          className="rounded-xl overflow-hidden shadow-lg w-full"
        >
          {(selectedProduct.images ?? [selectedProduct.image]).map(
            (img, index) => (
              <SwiperSlide key={`${selectedProduct.id}-${index}`}>
                <img
                  src={img}
                  alt={`${selectedProduct.name} - view ${index + 1}`}
                  className="
                    w-full
                    h-64 sm:h-80 md:h-[420px] lg:h-[500px]
                    object-cover
                    rounded-xl
                  "
                />
              </SwiperSlide>
            )
          )}
        </Swiper>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">
            {selectedProduct.name}
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-300">
            {selectedProduct.desc}
          </p>
          <p className="mt-3 sm:mt-4 text-xl sm:text-2xl text-blue-600 dark:text-white font-bold">
            Rs {selectedProduct.price.toLocaleString()}
          </p>
          <button
            className="
              mt-5 sm:mt-6
              w-full sm:w-auto
              px-6 py-3
              bg-blue-600 dark:bg-blue-500
              text-white
              rounded-lg
              hover:scale-105
              transition-transform
            "
          >
            <a href="https://wa.me/923131664680" className="w-full h-full" target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </div>
  )}
</div>
  );
}

export default Grid;