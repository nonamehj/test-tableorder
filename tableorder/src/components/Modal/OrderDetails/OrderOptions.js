import React, { useCallback, useEffect, useState } from "react";
import "./OrderOptionsStyle.css";
import { useGlobalContext } from "./../../../context";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const OrderOptions = ({ uniqueId, amount, title, options, size }) => {
  const { isOrderDetails } = useGlobalContext();
  const [openItem, setOpenItem] = useState(0);

  const handleToggle = useCallback((id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    if (!isOrderDetails) setOpenItem(0);
  }, [isOrderDetails]);

  return (
    <div className="details-item-container">
      <div className="details-item-info">
        <p>{title}</p>
        <span>{amount} 개</span>
      </div>
      <button
        className="toggle-options-btn"
        onClick={() => handleToggle(uniqueId)}
      >
        {openItem === uniqueId ? (
          <>
            <span>추가옵션</span>
            <FaAngleUp className="option-icon" />
          </>
        ) : (
          <>
            <span>추가옵션</span>
            <FaAngleDown className="option-icon" />
          </>
        )}
      </button>
      {openItem === uniqueId && (
        <div className="options-container">
          <div className="option-item">
            <p>음료 타입</p> <span>{size}</span>
          </div>
          {options.map((item) => {
            const { name, amount, id } = item;
            return (
              <span key={id} className="option-detail">
                <p>{name}</p> <span>{amount}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrderOptions;
