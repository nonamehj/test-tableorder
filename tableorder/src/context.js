import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import data from "./data";
import reducer from "./reducer";
const AppContext = createContext();

const initialState = {
  menus: data,
  count: 0, //한 테이블의 구매 수량
  isAddItemOpen: false, //아이템 선택시 모달 오픈(옵션선택)
  isOrderDetails: false, // 주문내역
  isModalOpen: false, //옵션 선택 모달 오픈
  isOrderCompleted: false, //장바구니 주문완료 오픈
  isCartOpen: false, //장바구니 넣었을시 오픈
  modalItem: [], //모달 아이템 들어갈곳
  cartItem: [], //장바구니 아이템
  orderItems: [], //장바구니 주문하기 완료했을시 주문내역
  // selectedItems: [],
  // itemsList: [],
  total: 0, // 결제 전 선택했을대 가격
  totalPrice: 0, //주문내역에 총 가격
  // totalAmount: 0,
  cartAmount: 0, //주문시 장바구니 안에 수량
  cartTotalAmount: 0, //장바구니 총 수량- 주문내역 총수량
  orderId: 0, //아이디
  table: 1, //테이블 번호
  // quantity: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("cart", state.cartItem);
  // console.log("state", state);
  // console.log("orderitem", state.orderItems);

  const toggleCategories = useCallback((category) => {
    let tempItem;
    if (category === "전체") {
      tempItem = data;
      dispatch({ type: "CATEGORY_BTN", payload: { category, tempItem } });
    } else {
      tempItem = data.filter((item) => item.category === category);
      dispatch({ type: "CATEGORY_BTN", payload: { category, tempItem } });
    }
  }, []);

  /*모달 열기*/
  const isShowModal = useCallback((id, category) => {
    dispatch({ type: "SHOW_MODAL", payload: { id, category } });
  }, []);

  /*모달 닫기*/
  const isCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  /*음료 타입  */
  const addDrinkType = (type) => {
    dispatch({ type: "MODAL_DRINK_TYPE", payload: type });
  };
  /*음료 사이즈 */
  const addDrinkSize = (size) => {
    dispatch({ type: "MODAL_DRINK_SIZE", payload: size });
  };
  /* 음료 수량*/
  const modalAmount = (type) => {
    dispatch({ type: "MODAL_ITEM_AMOUNT", payload: type });
  };
  /*옵션 수량 */
  const modalQuantity = (type, id) => {
    dispatch({ type: "MODAL_QUANTITY", payload: { type, id } });
  };
  /*모달에서 장바구니 담기 */
  const addItemCart = () => {
    dispatch({ type: "ADD_ITEM_CART" });
  };
  /*footer카트 오픈 */
  const isShowCart = () => {
    dispatch({ type: "SHOW_CART", payload: state.isCartOpen });
  };
  /*장바구니 닫기 */
  const isItemCartClose = () => {
    dispatch({ type: "CLOSE_CART" });
  };
  /*장바구니 수량 증가 감소 */
  const cartItemQuantity = (actionType, uniqueId) => {
    dispatch({ type: "CART_ITEM_QUANTITY", payload: { actionType, uniqueId } });
  };

  /*장바구니 아이템 삭제 */
  const cartItemsDelete = (id) => {
    dispatch({ type: "CART_ITEMS_DELETE", payload: id });
  };
  /*장바구니 주문하기 */
  const submitOrder = () => {
    dispatch({ type: "ORDER_ITEMS" });
  };
  /*주문후 주문 완료  */
  const isOrderClose = () => {
    dispatch({ type: "CLOSE_ORDER" });
  };
  /*footer 주문내역 열기 */
  const orderDetails = () => {
    dispatch({ type: "ORDER_DETAILS_OPEN" });
  };
  const closeOrderDetails = () => {
    dispatch({ type: "ORDER_DETAILS_CLOSE" });
  };
  useEffect(() => {
    if (state.cartItem.length > 0) {
      dispatch({
        type: "CART_AMOUNT",
        payload: {
          cartAmount: state.cartItem.reduce(
            (prev, cur) => (prev += cur.amount),
            0
          ),
        },
      });
    } else {
      dispatch({
        type: "CART_AMOUNT",
        // payload: { isCartOpen: false },
      });
    }
  }, [state.cartItem]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleCategories,
        isShowModal,
        isCloseModal,
        isShowCart,
        modalQuantity,
        addDrinkType,
        addDrinkSize,
        modalAmount,
        addItemCart,
        isItemCartClose,
        cartItemsDelete,
        submitOrder,
        isOrderClose,
        orderDetails,
        closeOrderDetails,
        cartItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
