import "./ModalItemStyle.css";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import OptionItem from "./OptionItem";
const ModalItem = () => {
  const {
    isModalOpen,
    modalItem,

    isCloseModal,

    addItemCart,
  } = useGlobalContext();
  // const [infoOption, setInfoOption] = useState(false);
  const [value, setValue] = useState(0);
  const [selectDrinkOption, setSelectDrinkOption] = useState("");
  useEffect(() => {
    if (isModalOpen) {
      if (modalItem.length > 0) {
        const item = modalItem[0];
        const { drinkOption } = item;
        if (drinkOption.length === 1) {
          setSelectDrinkOption(drinkOption[0]);
        }
      }
    } else {
      setSelectDrinkOption("");
      setValue(0);
    }
  }, [modalItem, isModalOpen]);
  return (
    <div
      className={`modal-container ${isModalOpen ? "show-modal-container" : ""}`}
    >
      <div className="modal-content">
        <h2>상품정보</h2>
        <div className="modal-items-list">
          {modalItem.map((item) => {
            return (
              <OptionItem
                key={item.id}
                {...item}
                value={value}
                setValue={setValue}
                selectDrinkOption={selectDrinkOption}
                setSelectDrinkOption={setSelectDrinkOption}
              />
            );
          })}
        </div>
        <div className="order-btn">
          <button className="close-modal-btn" onClick={isCloseModal}>
            <FaTimes className="icon" />
            <span>닫기</span>
          </button>
          <button
            className="add-cart-btn"
            onClick={addItemCart}
            disabled={!selectDrinkOption}
          >
            <AiOutlineShoppingCart className="icon" />
            <span>장바구니 담기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalItem;
