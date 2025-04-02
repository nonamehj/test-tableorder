import React, { useState, useCallback } from "react";
import { useGlobalContext } from "../../context";
import "./OrderSummaryStyle.css";
import {
  AiOutlineShoppingCart,
  AiOutlineFileText,
  AiOutlineBell,
} from "react-icons/ai";
const AddItems = () => {
  const { openCart, cartItem, cartAmount, showOrderDetails } =
    useGlobalContext();
  const [isShaking, setIsShaking] = useState(false);
  const handleClick = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 2000);
  }, [setIsShaking]);
  return (
    <footer>
      <div className="footer-container">
        <button
          className={`call-btn ${isShaking ? "shaking-button" : ""}`}
          onClick={handleClick}
        >
          <AiOutlineBell className="icon" />
          <span>호출</span>
        </button>
        <div className="footer-buttons">
          <button className="left-btn cart-order" onClick={openCart}>
            <AiOutlineShoppingCart className="icon" />
            <span>장바구니</span>
            {cartItem.length > 0 ? (
              <span className="cart-amount">{cartAmount}</span>
            ) : null}
          </button>

          <button
            className="right-btn order-details"
            onClick={showOrderDetails}
          >
            <AiOutlineFileText className="icon" />
            <span>주문내역</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default AddItems;
