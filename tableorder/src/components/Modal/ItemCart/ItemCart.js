import React, { useRef } from "react";
import { FaTimes, FaClipboardCheck } from "react-icons/fa";
import { useGlobalContext } from "../../../context";
import "./ItemCartStyle.css";
import ItemCartDatails from "./ItemCartDatails";
const ItemCart = () => {
  const {
    total,
    isCartOpen,
    cartItem,
    isItemCartClose,
    cartAmount,
    submitOrder,
  } = useGlobalContext();
  const cartRef = useRef("");
  const handleContainerClick = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      isItemCartClose();
    }
  };
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
            return <ItemCartDatails key={item.uniqueId} {...item} />;
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
          <button className="cart-left" onClick={isItemCartClose}>
            <FaTimes className="icon" />
            <span>닫기</span>
          </button>
          <button className="cart-right" onClick={submitOrder}>
            <FaClipboardCheck className="icon" />
            <span>주문하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
