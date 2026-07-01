import { useState, useEffect } from "react";

const phoneNumber = "923131664680";
const message =
  "Hi I visited https://yourwebsite.com and want details which kind of products you have.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1635347319127-6a064615dedf?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524653736724-8490ee06859d?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1699631559529-83389014055c?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1715613812185-4496341f236c?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1699631559204-06999f354364?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1648144107783-74dea54a35fe?w=1200&auto=format&fit=crop&q=80",
  ];

  const heading = [
    "NEW YEAR SALE — UP TO 20% OFF GET YOUR STUFF",
    "VIBE IN STYLE WITH OUR NEW COLLECTION",
    "FRESH DROPS ARRIVING EVERY WEEKEND",
    "STYLE DEFINES THE MAN WITH PASSION",
    "PREMIUM EDITION AVAILABLE NOW",
    "DISCOVER THE ALL NEW BLACK EDITION",
  ];

  const para = [
    "Upgrade your Habit to PREIMUM.",
    "Designed for confidence, comfort, and everyday luxury.",
    "Limited stock available — grab your favorites before they're gone.",
    "Personality, EGO, AND AURA.",
    "Crafted with premium quality for a bold modern look.",
    "Minimal, sleek, and powerful designs made for trendsetters.",
  ];

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // touch swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      goNext();
    } else if (distance < -50) {
      goPrev(); 
    }

    setTouchStart(null);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden rounded-lg shadow-md h-56 sm:h-72 md:h-96 m-4 sm:m-8 select-none"
    >
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-700"
        alt={heading[index]}
        loading="lazy"
        draggable="false"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 z-10 text-white sm:top-15 sm:pl-2.5 md:flex justify-center">
        <div className="bg-black/20 p-4 rounded-xl border border-white/10 max-w-xl">
          <h1
            className="
              text-lg sm:text-2xl md:text-3xl 
              font-extrabold 
              leading-tight 
              tracking-wide
              drop-shadow-lg
            "
          >
            {heading[index]}
          </h1>

          <p
            className="
              text-sm sm:text-base md:text-lg 
              mt-3 
              text-gray-200 
              leading-relaxed
              font-light
            "
          >
            {para[index]}
          </p>

          <button
            className="
              mt-4
              px-5 py-2
              bg-blue-600 hover:bg-blue-700
              dark:bg-gray-600 dark:hover:bg-gray-500
              transition-all duration-300
              rounded-lg
              text-sm md:text-base
              font-semibold
              shadow-lg
            "
          >
            <a href={whatsappUrl}>SHOP NOW</a>
          </button>
        </div>
      </div>
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="
          absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 z-10
          w-6 h-10 sm:w-6 sm:h-14
          flex items-center justify-center
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-white
          text-2xl sm:text-3xl
          shadow-xl
          hover:bg-blue-600
          hover:scale-110
          active:scale-95
          transition-all duration-300
          dark:hover:bg-gray-500
        "
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="
          absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 z-10
          w-6 h-10 sm:w-6 sm:h-14
          flex items-center justify-center
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-white
          text-2xl sm:text-3xl
          shadow-xl
          hover:bg-blue-600
          hover:scale-110
          active:scale-95
          transition-all duration-300
          dark:hover:bg-gray-500
        "
      >
        ›
      </button>
      <div className="absolute bottom-2 right-2 sm:right-4 z-10 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;