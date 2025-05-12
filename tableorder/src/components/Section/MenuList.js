import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import "./MenuListStyle.css";
import Items from "./Items";
const MenuList = () => {
  const { menus } = useGlobalContext();
  const valueRef = useRef();

  useEffect(() => {
    if (valueRef.current) {
      valueRef.current.scrollTop = 0;
    }
  }, [menus]);
  return (
    <section className="section">
      <div className="menulist-container" ref={valueRef}>
        <div className="menulist-center">
          {menus.map((item) => {
            return <Items key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
