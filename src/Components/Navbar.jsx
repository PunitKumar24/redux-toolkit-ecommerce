import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <div className="max-w-[1640px] flex gap-4 p-4">
      <span>REDUX STORE</span>
      <div className=" flex gap-x-[70vh] ">
        <div className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <span className="font-bold ">
            Cart items:<span>{items.lenght}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
