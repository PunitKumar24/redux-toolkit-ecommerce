import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="text-center ">
      CART
      <div className="border-2 rounded-xl m-10">
        <div className="w-[200px]">
          <div className="">
            {products.map((product) => (
              <div className="">
                <div key={product.id} className="  p-5 flex gap-36">
                  <img
                    className="h-[100px]  m-auto"
                    src={product.image}
                    alt=""
                  ></img>
                  <h5 className="my-auto max-w-10 h-auto">{product.title}</h5>
                  <h5 className="my-auto font-bold">{product.price}</h5>
                  <button
                    className="border-2 border-purple-300 h-10 my-auto text-white bg-purple-700 rounded-xl"
                    onClick={() => {
                      handleRemove(product.id);
                    }}
                  >
                    <span className=""> Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
