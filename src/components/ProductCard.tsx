import { FaCartPlus, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { useState } from "react";
import type Product from "../interfaces/Product";

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) {
  const [qty, setqty] = useState<number>(0);

  function handleOperate(type: string): void {
    return type === "+" ? setqty((n) => n + 1) : setqty((n) => n - 1);
  }

  return (
    <article
      className={`shadow-lg flex flex-row sm:flex-col sm:w-64 rounded-2xl overflow-hidden bg-neutral-800 dark:bg-white`}
    >
      {/* صورة المنتج */}
      <Link to={`/product/${id}`}>
        <div
          data-tooltip-id="product-details"
          data-tooltip-content={"Product Details"}
          className="cursor-pointer h-48 p-2  w-full overflow-hidden rounded-b-3xl flex items-center justify-center bg-neutral-700 dark:bg-neutral-200"
        >
          <img
            src={image}
            alt={title + " Image"}
            className="object-contain h-full transition-transform duration-500 hover:scale-105 max-w-30 sm:w-full"
          />
        </div>
      </Link>

      {/* تفاصيل المنتج */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm text-primary font-medium">{category}</p>
        <h3 className="text-lg font-bold text-neutral-light dark:text-neutral-dark line-clamp-2">
          {title}
        </h3>

        {/* التقييم */}
        <div className="flex items-center gap-1 text-yellow-400 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating.rate) ? "opacity-100" : "opacity-30"
              }
            />
          ))}
          <span className="text-sm text-neutral-500 ml-1">
            ({rating.count})
          </span>
        </div>

        {/* السعر */}
        <p className="text-xl font-bold text-primary mt-3">${price}</p>

        {/* الوصف (مختصر) */}
        <p className="text-sm text-neutral my-2 line-clamp-2">{description}</p>

        {qty ? (
          <div className="mt-auto rounded-xl flex justify-between items-center  px-2 py-1 dark:bg-gray-200 bg-neutral-600">
            <button
              onClick={() => handleOperate("+")}
              className="size-8 rounded-full bg-primary shadow-primary-light shadow text-white flex justify-center items-center"
            >
              <FaPlus />
            </button>
            <p className="text-lg font-semibold dark:text-black text-white">{qty}</p>
            <button
              onClick={() => handleOperate("-")}
              className="size-8 rounded-full bg-primary shadow-primary-light shadow text-white flex justify-center items-center"
            >
              <FaMinus />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setqty(1)}
            className="mt-auto pb-2 flex items-center justify-center gap-2 bg-primary text-white py-2 px-3 rounded-xl font-semibold duration-300 hover:bg-primary-light active:bg-primary-dark"
          >
            <FaCartPlus />
            Add to Cart
          </button>
        )}
      </div>
      <Tooltip
        id="product-details"
        place="top"
        delayShow={700}
        arrowColor="orange"
      />
    </article>
  );
}
