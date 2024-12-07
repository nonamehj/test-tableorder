import React from "react";
import { useGlobalContext } from "./../../../context";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";

const ItemCartDatails = ({ amount, title, itemTotal, uniqueId }) => {
  const { cartItemsDelete, cartItemQuantity } = useGlobalContext();
  return (
    <div className="cart-item">
      <div className="cart-item-header">
        <h3>{title}</h3>
        <button
          className="cart-item-delete"
          onClick={() => cartItemsDelete(uniqueId)}
        >
          <AiOutlineDelete className="icon" />
          <span>삭제</span>
        </button>
      </div>
      <div className="cart-item-details">
        <div className="cart-item-quantity">
          <button
            className="minus"
            onClick={() => cartItemQuantity("dec", uniqueId)}
          >
            <AiOutlineMinus className="icon" />
          </button>
          <span>{amount}</span>
          <button
            className="plus"
            onClick={() => cartItemQuantity("inc", uniqueId)}
          >
            <AiOutlinePlus className="icon" />
          </button>
        </div>
        <div className="cart-item-price">
          <span>{itemTotal.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCartDatails;
