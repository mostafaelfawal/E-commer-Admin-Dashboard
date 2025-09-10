import { FaCartPlus, FaStar } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

type Product = {
  readonly id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) {
  return (
    <article
      className={`shadow-lg flex flex-row sm:flex-col sm:w-64 rounded-2xl overflow-hidden bg-neutral-800 dark:bg-white`}
    >
      {/* صورة المنتج */}
      <Link to={`/product/:${id}`}>
        <div
          data-tooltip-id="product-details"
          data-tooltip-content={"Product Details"}
          className="cursor-pointer h-48 p-2  w-full overflow-hidden rounded-b-3xl flex items-center justify-center bg-neutral-100"
        >
          <img
            src={image}
            alt={title + " Image"}
            className="object-contain h-full transition-transform duration-500 hover:scale-105 w-30 max-w-30"
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
        <p className="text-sm text-neutral-500 my-2 line-clamp-2">
          {description}
        </p>

        {/* زرار إضافة للسلة */}
        <button className="mt-auto pb-2 flex items-center justify-center gap-2 bg-primary text-white py-2 px-3 rounded-xl font-semibold duration-300 hover:bg-primary-light active:bg-primary-dark">
          <FaCartPlus />
          Add to Cart
        </button>
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
