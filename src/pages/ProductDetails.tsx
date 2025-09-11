import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../features/productsSlice";
import type Product from "../interfaces/Product";
import { FaStar, FaCartPlus } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams<string>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  const p: Product | undefined = products.find((product) => product.id == id);

  return (
    <div className="px-5 flex flex-col-reverse sm:flex-row justify-between">
      <div className="flex flex-col gap-5 h-fit">
        <p className="text-primary text-xl">{p?.category}</p>
        <h1 className="text-3xl font-semibold text-white dark:text-black max-w-160">
          {p?.title}
        </h1>
        <p className="text-4xl font-bold text-primary mt-3">{p?.price}$</p>
        <div className="text-yellow-400 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(p!.rating.rate) ? "opacity-100" : "opacity-30"
              } size-10`}
            />
          ))}
          <span className="text-3xl text-neutral ml-1">
            ({p!.rating.count})
          </span>
        </div>
        <button className="mt-auto sm:w-1/2 pb-2 flex items-center justify-center gap-2 bg-primary text-white py-2 px-3 rounded-xl font-semibold duration-300 hover:bg-primary-light active:bg-primary-dark">
          <FaCartPlus />
          Add to Cart
        </button>
        <p className="max-w-160 text-neutral text-lg">{p?.description}</p>
      </div>
      <div className="rouned-xl bg-neutral-700 dark:bg-neutral-200 w-full flex justify-center sm:w-80 h-fit p-10 rounded-3xl">
        <img
          src={p?.image}
          alt={p?.title + "image"}
          className="hover:scale-110 w-25 sm:w-full transition-transform duration-300"
        />
      </div>
    </div>
  );
}
