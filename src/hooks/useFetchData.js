import { useEffect, useState } from "react";

export function useFetchData(initialData = []) {
  const [data, setData] = useState(initialData);

  async function getData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data }; 
}
