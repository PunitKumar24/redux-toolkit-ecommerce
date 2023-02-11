import React, { useEffect, useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
function Products() {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 bg-blue-200">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[270px] h-[270px] border-2 p-4 m-4 rounded-xl bg-white "
          >
            <img className="h-[100px] m-auto" src={product.image} alt=""></img>
            <h4>{product.title}</h4>
            <h5 className="">{product.price}</h5>
            <button
              onClick={() => {
                handleAdd(product);
              }}
              className="border-2 p-3 rounded-xl bg-violet-600 "
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
