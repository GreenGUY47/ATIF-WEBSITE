import '../css/Product.css'
const text = ["Oxva Xlim", "Voopoo Argus G2 ", "Uwell Caliburn G5", "Vaporesso Vibe Se 2", "Uwell Caliburn G5", "Vaporesso Xros 5 Mini ", "Vaporesso "]

const Product = () => {
  return (
    <div className="w-full h-18 bg-blue-600 dark:bg-gray-700 flex flex-col justify-center overflow-hidden p-2.5 gap-2 mb-2.5">
      <div className="overflow-hidden">
        <ul className="flex gap-8 w-max animate-marquee-left whitespace-nowrap">
          {[...text, ...text].map((item, i) => (
            <li key={i} className="text-white">{item}</li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden">
        <ul className="flex gap-8 w-max animate-marquee-right whitespace-nowrap">
          {[...text, ...text].map((item, i) => (
            <li key={i} className="text-white">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Product