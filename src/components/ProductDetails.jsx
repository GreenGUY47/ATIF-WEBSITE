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
    return <h1>Product not found</h1>;
  }

  return (
    <div className="p-6">

      <button
        onClick={() => navigate("/")}
        className="
          mb-4
          px-4 py-2
          bg-gray-200 dark:bg-gray-700
          rounded
        "
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8">

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={product.images.length > 1}
          className="rounded-xl overflow-hidden"
        >
          {product.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                className="w-full h-[500px] object-cover"
                alt={product.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <h1 className="text-3xl font-bold dark:text-white">
            {product.name}
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            {product.desc}
          </p>

          <p className="mt-4 text-2xl font-bold text-blue-600 dark:text-white">
            Rs {product.price.toLocaleString()}
          </p>

          <button
            className="
              mt-6
              px-6 py-3
              bg-blue-600
              text-white
              rounded-lg
            "
          >
            <a
              href="https://wa.me/923131664680"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;