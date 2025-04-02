import React, { useRef, useCallback } from "react";
import { FaTimes, FaClipboardCheck } from "react-icons/fa";
import { useGlobalContext } from "../../../context";
import "./ItemCartStyle.css";
import ItemCartDetails from "./ItemCartDetails";
const ItemCart = () => {
  const { total, isCartOpen, cartItem, closeCart, cartAmount, placeOrder } =
    useGlobalContext();
  const cartRef = useRef("");
  const handleContainerClick = useCallback(
    (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        closeCart();
      }
    },
    [closeCart]
  );
  return (
    <div
      className={`${isCartOpen ? "cart show-cart" : "cart"}`}
      onClick={handleContainerClick}
    >
      <div className="cart-container" ref={cartRef}>
        <div className="cart-title">
          <h2>장바구니</h2>
        </div>
        <div className="cart-items-container">
          {cartItem.map((item) => {
            return <ItemCartDetails key={item.uniqueId} {...item} />;
          })}
        </div>
        <div className="cart-item-total">
          <div className="cart-item-total-quantity">
            <span>{cartAmount}개</span>
          </div>
          <div className="cart-item-total-price">
            <span>{total.toLocaleString()}원</span>
          </div>
        </div>
        <div className="cart-btns">
          <button className="cart-left" onClick={closeCart}>
            <FaTimes className="icon" />
            <span>닫기</span>
          </button>
          <button className="cart-right" onClick={placeOrder}>
            <FaClipboardCheck className="icon" />
            <span>주문하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
