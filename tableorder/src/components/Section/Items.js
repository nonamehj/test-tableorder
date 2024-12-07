import "./ItemsStyle.css";
import React from "react";
import { useGlobalContext } from "../../context";

const Items = ({ img, title, price, id, category }) => {
  const { isShowModal } = useGlobalContext();

  return (
    <article className="item-article" onClick={() => isShowModal(id, category)}>
      <div className="item-container">
        <div className="item-img">
          <img src={img} alt={title} className="single-item-img" />
        </div>

        <div className="item-info">
          <p>{title}</p>
          <p>{price.toLocaleString()}원</p>
        </div>
        <div className="item-btn">
          <button className="addItem-btn">옵션선택</button>
        </div>
      </div>
    </article>
  );
};

export default Items;
