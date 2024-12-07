import React from "react";
import { useGlobalContext } from "../../../context";
import "./OptionItemStyle.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const OptionItem = ({
  img,
  title,
  drinkOption,
  coffeeSize,
  amount,
  options,
  itemTotal,
  value,
  setValue,
  selectDrinkOption,
  setSelectDrinkOption,
}) => {
  const { addDrinkType, addDrinkSize, modalAmount, modalQuantity } =
    useGlobalContext();
  return (
    <article className="modal-item-container">
      <div className="modal-item-details">
        <div className="modal-menuItem">
          <img src={img} alt={`${title}-img`} className="single-img" />
        </div>
        <div className="modal-info">
          <div className="modal-item-title">
            <h3>{title}</h3>
            {selectDrinkOption && <span>{`(${selectDrinkOption})`}</span>}
          </div>
          <div className="drink-type">
            {drinkOption.map((drink) => {
              return (
                <button
                  key={drink}
                  name={drink}
                  className={`${drink}-type active-${selectDrinkOption}`}
                  onClick={(e) => {
                    setSelectDrinkOption(e.target.name);
                    addDrinkType(e.target.name);
                  }}
                >
                  {drink}
                </button>
              );
            })}
          </div>
        </div>
        <div className="selected-items-info">
          {selectDrinkOption === "" ? null : (
            <div className="items-info">
              <div className="size-selection-row">
                <h4>사이즈</h4>
                <div className="btn-row">
                  {coffeeSize.map((coffee, index) => {
                    return (
                      <button
                        key={coffee}
                        name={coffee}
                        className={`coffee-size ${
                          value === index ? "active-size" : ""
                        }`}
                        onClick={(e) => {
                          addDrinkSize(e.target.name);
                          setValue(index);
                        }}
                      >
                        {coffee}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="quantity-selection-row">
                <h4>수량</h4>
                <div className="btn-row">
                  <button onClick={() => modalAmount("dec")} className="minus">
                    <AiOutlineMinus className="icon" />
                  </button>
                  <span>{amount}</span>
                  <button className="plus" onClick={() => modalAmount("inc")}>
                    <AiOutlinePlus className="icon" />
                  </button>
                </div>
              </div>
              {options.map((option) => {
                const { id, amount, name, price } = option;
                return (
                  <div className="coffee-row" key={id}>
                    <div className="coffee-row-header">
                      <h4>{name}</h4>
                      <p>{`(${price}원)`}</p>
                    </div>
                    <div className="btn-row">
                      <button
                        onClick={() => modalQuantity("dec", id)}
                        className="minus"
                      >
                        <AiOutlineMinus className="icon" />
                      </button>
                      <span>{amount}</span>
                      <button
                        onClick={() => modalQuantity("inc", id)}
                        className="plus"
                      >
                        <AiOutlinePlus className="icon" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="item-total">
        <h3>{itemTotal.toLocaleString()}원</h3>
      </div>
    </article>
  );
};

export default OptionItem;
