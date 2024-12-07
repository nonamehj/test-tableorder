import "./index.css";
import {
  Navbar,
  Category,
  MenuList,
  OrderSummary,
  ItemCart,
  ModalItem,
} from "./components";
function App() {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <Navbar />
        <Category />
        <MenuList />
        <OrderSummary />
        <ItemCart />
        <ModalItem />
      </div>
    </div>
  );
}

export default App;
