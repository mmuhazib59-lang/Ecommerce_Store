import React from "react";

const Cart = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  isOpen,
  toggleCart,
  clearCart
}) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  const handleCheckout = () => {
    alert("Your order is successful! Your items will be delivered soon.");
    clearCart();
    toggleCart();
  };

  return (
    <div
      className="cart-sidebar position-fixed top-0 end-0 vh-100 bg-white shadow-lg p-3"
      style={{
        width: "350px",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s",
        zIndex: 2000
      }}
    >
      <h3 className="text-center mb-3">Shopping Cart</h3>
      <button
        className="btn btn-sm btn-danger mb-3"
        onClick={toggleCart}
      >
        Close
      </button>

      {cartItems.length === 0 && (
        <p className="text-center mt-5">Cart is empty</p>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
        >
          <div>
            <h6>{item.name}</h6>
            <p className="mb-1">Price: {item.totalPrice}</p>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateQuantity(item.id, "dec")}
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateQuantity(item.id, "inc")}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h5 className="text-end mt-3">Total: ${totalPrice}</h5>

          <button
            className="btn btn-success w-100 mt-3"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
