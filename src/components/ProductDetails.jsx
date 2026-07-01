import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/Products.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-14 py-8">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          mb-8
          px-5 py-2.5
          rounded-xl
          bg-gray-100 dark:bg-gray-800
          dark:text-white
          hover:scale-105
          transition-all duration-300
          shadow-md
        "
      >
        ← Back
      </button>

      {/* Main Layout */}
      <div className="grid grid-cols-1 object-cover lg:grid-cols-2 gap-8 xl:gap-14 items-start">

        {/* Product Images */}
        <div className="w-full">

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={product.images?.length > 1}
            className="
              rounded-2xl
              overflow-hidden
              shadow-2xl
            "
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={product.name}
                  className="
                    w-full
                    h-[320px]
                    sm:h-[450px]
                    lg:h-[600px]
                    object-cover
                  "
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Product Info */}
        <div className="flex flex-col">

          {/* Category */}
          <span
            className="
              inline-block
              w-fit
              px-4 py-1.5
              rounded-full
              text-sm
              bg-gray-100
              dark:bg-gray-800
              dark:text-gray-200
              mb-4
            "
          >
            {product.category}
          </span>

          {/* Product Name */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              dark:text-white
              leading-tight
            "
          >
            {product.name}
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              text-gray-600
              dark:text-gray-300
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            {product.desc}
          </p>

          {/* Price */}
          <div className="mt-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
              Price
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-blue-600
                dark:text-blue-400
              "
            >
              Rs {product.price.toLocaleString()}
            </h2>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="https://wa.me/923131664680"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1
                text-center
                px-8 py-4
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                transition-all duration-300
                hover:scale-[1.02]
                shadow-lg
              "
            >
              Buy Now
            </a>
          </div>

          {/* Extra Info */}
          <div
            className="
              mt-10
              border-t
              border-gray-200
              dark:border-gray-800
              pt-6
              space-y-3
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            <p>✓ Premium Quality Material</p>
            <p>✓ Fast Delivery Available</p>
            <p>✓ Cash on Delivery Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;