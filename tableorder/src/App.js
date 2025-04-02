import "./index.css";
import { useEffect } from "react";
import {
  Navbar,
  Category,
  MenuList,
  OrderSummary,
  ItemCart,
  ModalItem,
  OrderComplete,
  OrderDetails,
} from "./components";
function App() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    const setMainContainerHeight = () => {
      const mainElement = document.querySelector(".main-container");
      if (mainElement) {
        mainElement.style.height = `calc(var(--vh) * 100)`;
      }
    };

    const handleResize = () => {
      setViewportHeight();
      setMainContainerHeight();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <Navbar />
        <Category />
        <MenuList />
        <OrderSummary />
        <ItemCart />
        <ModalItem />
        <OrderComplete />
        <OrderDetails />
      </div>
    </div>
  );
}

export default App;
