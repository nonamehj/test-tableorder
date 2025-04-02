import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./../../../context";
import "./OrderCompleteStyle.css";
const OrderComplete = () => {
  const { isOrderCompleted, closeOrderModal, cartItem, cartAmount } =
    useGlobalContext();
  // useEffect(() => {
  //   const timeId = setTimeout(() => {
  //     closeOrderModal();
  //   }, 3000);
  //   return () => clearTimeout(timeId);
  // }, [isOrderCompleted]);

  return (
    <div
      className={`${
        isOrderCompleted
          ? "order-modal-container show-order-modal-container"
          : "order-modal-container"
      }`}
    >
      <div className="order-modal-content">
        <div className="order-title">
          <h2>주문완료</h2>
          <p>3초 뒤에 종료됩니다.</p>
        </div>
        <p className="order-message">주문 접수가 완료되었습니다.</p>
        <div className="order-items-list">
          {cartItem.map((item) => {
            const { uniqueId, amount, title } = item;
            return (
              <div key={uniqueId} className="order-item-container">
                <div className="order-item-details">
                  <p>{title}</p>
                  <span>{amount}개</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order-summary">
          <div className="order-total-info">
            <span>합계</span>
            <span>{cartAmount}개</span>
          </div>
          <button className="close-order-modal" onClick={closeOrderModal}>
            <FaTimes className="icon" />
            <span>닫기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
