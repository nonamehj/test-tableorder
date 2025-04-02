import "./OrderDetailsStyle.css";
import { useGlobalContext } from "./../../../context";
import { FaTimes } from "react-icons/fa";
import OrderOptions from "./OrderOptions";
const OrderDetails = () => {
  const {
    orderItems,
    isOrderDetails,
    cartTotalAmount,
    totalPrice,
    closeOrderDetails,
  } = useGlobalContext();
  // const [openItem, setOpenItem] = useState(0);
  // const handleToggle = (id) => {
  //   setOpenItem(openItem === id ? null : id);
  // };

  // useEffect(() => {
  //   if (!isOrderDetails) setOpenItem(0);
  // }, [isOrderDetails]);

  return (
    <div className={`${isOrderDetails ? "details show-details" : "details"}`}>
      <div className="details-modal-content">
        <div className="details-title">
          <h2>주문내역</h2>
        </div>
        <div className="details-items-list">
          {orderItems.map((item) => {
            // const { uniqueId, amount, title, options, size } = item;
            return <OrderOptions key={item.uniqueId} {...item} />;
          })}
        </div>
        <div className="details-summary">
          <div className="details-total-info">
            <span>총 합계</span>
            <span>{cartTotalAmount}개</span>
          </div>
          <div className="details-total-price">
            <span>총 가격</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <button className="close-details" onClick={closeOrderDetails}>
            <FaTimes className="icon" />
            <span>닫기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
