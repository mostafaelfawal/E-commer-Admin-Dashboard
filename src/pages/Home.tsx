import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { useEffect, useState, useMemo } from "react";
import { fetchProducts } from "../features/productsSlice";
import { toast, Toaster } from "react-hot-toast";
import ProductCard from "../components/ProductCard";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const dispatch = useDispatch<AppDispatch>();
  const [categories, setCategories] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // التعامل مع الToast
  useEffect(() => {
    if (status === "loading") {
      toast.loading("Get Products...", { id: "loading" });
    } else if (status === "succeeded") {
      toast.dismiss("loading");
    } else if (status === "failed") {
      toast.dismiss("loading");
      toast.error("Error: " + error);
    }
  }, [status, error]);

  // وضع الفئات
  useEffect(() => {
    const categoryList: string[] = products.map((p) => p.category);
    const uniqueCategories: Set<string> = new Set(categoryList);
    setCategories(Array.from(uniqueCategories));
  }, [products]);

  const handleSearch = () => {
    setSearchTerm(searchInput); // تحديث مصطلح البحث عند الضغط
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-2 gap-2">
        <div className="flex">
          <input
            placeholder="Search by name or description..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border rounded-l border-primary outline-none px-2 py-1 w-64 text-white dark:text-black"
          />
          <button
            onClick={handleSearch}
            className="rounded-r px-3 bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
          >
            <FaSearch />
          </button>
        </div>

        <div className="flex gap-2 max-w-full overflow-x-auto p-2">
          <button
            onClick={() => handleCategorySelect("all")}
            className={`px-3 py-1 rounded transition-colors ${
              selectedCategory === "all"
                ? "bg-primary text-white"
                : "bg-transparent text-white dark:text-black border border-primary hover:bg-primary-light active:bg-primary-dark"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-3 py-1 rounded transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white "
                  : "bg-transparent text-white dark:text-black border border-primary hover:bg-primary-light active:bg-primary-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">
              {searchTerm || selectedCategory !== "all"
                ? "No products found"
                : "No products available"}
            </p>
            <p className="text-gray-400">
              Try a different search term or category
            </p>
          </div>
        ) : (
          filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
              description={p.description}
              category={p.category}
              rating={{ rate: p.rating.rate, count: p.rating.count }}
            />
          ))
        )}
      </div>

      <Toaster position="bottom-right" />
    </>
  );
}
