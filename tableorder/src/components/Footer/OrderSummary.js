import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import "./OrderSummaryStyle.css";
import {
  AiOutlineShoppingCart,
  AiOutlineFileText,
  AiOutlineBell,
} from "react-icons/ai";
const AddItems = () => {
  const { isShowCart, cartItem, cartAmount, orderDetails } = useGlobalContext();
  const [isShaking, setIsShaking] = useState(false);
  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 2000);
  };
  return (
    <footer>
      <div className="addItem-container">
        <button
          className={`call-btn ${isShaking ? "shake" : ""}`}
          onClick={handleClick}
        >
          <AiOutlineBell className="icon" />
          <span>호출</span>
        </button>
        <div className="addItem-center">
          <button className="left-btn cart-order" onClick={isShowCart}>
            <AiOutlineShoppingCart className="icon" />
            <span>장바구니</span>
            {cartItem.length > 0 ? (
              <span className="cart-amount">{cartAmount}</span>
            ) : null}
          </button>

          <button className="right-btn order-details" onClick={orderDetails}>
            <AiOutlineFileText className="icon" />
            <span>주문내역</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default AddItems;
