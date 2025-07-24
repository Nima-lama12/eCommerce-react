import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-10 min-h-screen bg-gray-50 ml-40">
      <h1 className="text-2xl font-bold mb-6">Products of Fakestore</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="h-40 flex items-center justify-center bg-gray-100 rounded">
              <img
                src={item.image}
                alt={item.title}
                className="h-32 object-contain"
              />
            </div>
            <h3 className="mt-3 font-semibold text-md line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="text-lg font-bold text-green-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
