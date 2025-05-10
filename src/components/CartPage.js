import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/Cart/cartSlice";

export default function CartPage() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <div className={`card m-3 text-center bg-${mode} overflow-hidden`}>
        <div className="text-center bg-white" style={{height: "30vh", overFlow: "hidden"}}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{objectFit: "contain", height: "100%"}}
          />
        </div>
        <div className="card-body">
          <h5 className={`card-title text-${mode === "light" ? "dark" : "light"}`}>
            {product.title.slice(0, 10)}
          </h5>
          <p className={`card-text text-${mode === "light" ? "dark" : "light"}`}>
            {product.description.slice(0, 50)}...
          </p>
          <p className={`card-text text-${mode === "light" ? "dark" : "light"}`}>
            $ {product.price}
          </p>
          <button
            onClick={() => {handleRemoveFromCart(product.id);}} className="btn btn-sm btn-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="d-flex justify-content-between align-items-center border-bottom p-2">
        <h3 className={`text-${mode === "light" ? "dark" : "light"}`}>
          My Cart
        </h3>
        <button className="btn btn-sm btn-danger" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {products.length === 0 ? (
        <p
          className={`text-center m-5 text-${mode === "light" ? "dark" : "light"
            }`}
        >
          Empty Cart
        </p>
      ) : (
        <div className="row">{cards}</div>
      )}
    </>
  );
}
