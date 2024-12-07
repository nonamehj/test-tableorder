const calculateItemTotal = (items) => {
  return items.map((item) => {
    let tempTypePrice =
      item.category === "커피" && item.drinkType === "hot"
        ? item.price - 500
        : item.price;
    let sizePrice = 0;
    if (item.category === "커피") {
      sizePrice =
        item.size === "tall"
          ? 500
          : item.size === "grande"
          ? 1000
          : item.size === "venti"
          ? 1500
          : 0;
    }
    if (item.category === "스무디") {
      sizePrice = item.size === "large" ? 500 : 0;
    }
    if (item.category === "라떼&음료") {
      sizePrice = item.size === "grande" ? 500 : 0;
    }
    if (item.category === "에이드") {
      sizePrice = item.size === "large" ? 500 : 0;
    }

    let optionPrice = item.options.reduce(
      (prev, cur) => prev + cur.amount * cur.price,
      0
    );
    let itemTotal = (tempTypePrice + sizePrice + optionPrice) * item.amount;
    return itemTotal;
  });
};

const reducer = (state, action) => {
  /*카테고리 버튼 */
  if (action.type === "CATEGORY_BTN") {
    return { ...state, menus: action.payload.tempItem };
  }
  /*선택시 옵션 모달 오픈 */
  if (action.type === "SHOW_MODAL") {
    let tempItem = state.menus
      .filter((item) => item.id === action.payload.id)
      .map((item) => {
        const { drinkOption, price, coffeeSize } = item;
        let defaultDrinkType = "";
        let defaultDrinkPrice = 0;
        if (drinkOption.length === 1) {
          defaultDrinkType = drinkOption[0];
          defaultDrinkPrice = price;
        }
        const optionAmount = item.options.map((option) => {
          return { ...option, amount: 0 };
        });
        return {
          ...item,
          amount: 1,
          itemTotal: defaultDrinkPrice,
          drinkType: defaultDrinkType,
          size: coffeeSize[0],
          options: optionAmount,
        };
      });

    return { ...state, isModalOpen: true, modalItem: tempItem };
  }
  /*모달 닫기 */
  if (action.type === "CLOSE_MODAL") {
    return { ...state, modalItem: [], isModalOpen: false };
  }
  /*음료 핫&아이스 */
  if (action.type === "MODAL_DRINK_TYPE") {
    let tempItem = state.modalItem.map((item) => {
      const updateItem = { ...item, drinkType: action.payload };
      const [itemTotal] = calculateItemTotal([updateItem]);
      return { ...updateItem, itemTotal };
    });
    return { ...state, modalItem: tempItem };
  }
  /*음료 사이즈 */
  if (action.type === "MODAL_DRINK_SIZE") {
    let tempItem = state.modalItem.map((item) => {
      const updateItem = { ...item, size: action.payload };
      const [itemTotal] = calculateItemTotal([updateItem]);
      return { ...updateItem, itemTotal };
    });
    return { ...state, modalItem: tempItem };
  }
  /*모달 아이템 수량 */
  if (action.type === "MODAL_ITEM_AMOUNT") {
    let tempItem = state.modalItem.map((item) => {
      let updatedAmount = item.amount;
      if (action.payload === "inc") {
        updatedAmount = Math.min(item.amount + 1, 50);
      } else {
        updatedAmount = Math.max(item.amount - 1, 1);
      }
      const updatedItem = { ...item, amount: updatedAmount };
      const [itemTotal] = calculateItemTotal([updatedItem]);
      return { ...updatedItem, itemTotal };
    });
    return { ...state, modalItem: tempItem };
  }
  /*모달아이템 옵션 선택 */
  if (action.type === "MODAL_QUANTITY") {
    const { id, type } = action.payload;

    const tempItem = state.modalItem.map((item) => {
      const newQuantity = item.options.map((option) => {
        if (option.id === id) {
          let updatedAmount = option.amount;
          if (type === "inc") {
            updatedAmount = Math.min(option.amount + 1, 50);
          } else {
            updatedAmount = Math.max(option.amount - 1, 0);
          }
          return { ...option, amount: updatedAmount };
        }
        return option;
      });
      const updatedItem = { ...item, options: newQuantity };
      const [itemTotal] = calculateItemTotal([updatedItem]);
      return { ...updatedItem, itemTotal };
    });

    return { ...state, modalItem: tempItem };
  }
  /*모달선택 아이템 장바구니 담기 */
  if (action.type === "ADD_ITEM_CART") {
    let tempItem = state.modalItem.map((item) => {
      return { ...item, uniqueId: `${item.id}-${Date.now()}` };
    });
    return {
      ...state,
      modalItem: [],
      cartItem: [...state.cartItem, ...tempItem],
      isModalOpen: false,
    };
  }
  /*footer 장바구니 카트 오픈 */
  if (action.type === "SHOW_CART") {
    let tempTotal = state.cartItem.reduce((prev, cur) => {
      prev += cur.itemTotal;
      return prev;
    }, 0);
    if (state.cartItem.length === 0) {
      return { ...state, isCartOpen: false };
    }
    return { ...state, isCartOpen: true, total: tempTotal };
  }
  /*장바구니 닫기 */
  if (action.type === "CLOSE_CART") {
    return { ...state, isCartOpen: false };
  }
  if (action.type === "CART_AMOUNT") {
    let cartAmount = state.cartItem.reduce((prev, cur) => {
      prev += cur.amount;
      return prev;
    }, 0);
    return { ...state, cartAmount };
  }
  /*장바구니 아이템 수량 */
  if (action.type === "CART_ITEM_QUANTITY") {
    let tempItem = state.cartItem.map((item) => {
      if (item.uniqueId === action.payload.uniqueId) {
        let updatedAmount = item.amount;
        if (action.payload.actionType === "inc") {
          updatedAmount = Math.min(item.amount + 1, 50);
        } else {
          updatedAmount = Math.max(item.amount - 1, 1);
        }
        const updatedItem = { ...item, amount: updatedAmount };
        const [itemTotal] = calculateItemTotal([updatedItem]);
        return { ...updatedItem, itemTotal };
      }
      return item;
    });
    let tempTotal = tempItem.reduce((prev, cur) => prev + cur.itemTotal, 0);
    return { ...state, cartItem: tempItem, total: tempTotal };
  }
  /*장바구니 아이템 삭제 */
  if (action.type === "CART_ITEMS_DELETE") {
    // let tempItem = state.cartItem.filter(
    //   (item) => item.uniqueId !== action.payload
    // );

    let updatedCartItems = state.cartItem.filter(
      (item) => item.uniqueId !== action.payload
    );
    let updatedTotal = updatedCartItems.reduce(
      (prev, cur) => prev + cur.itemTotal,
      0
    );
    let isCartOpen = updatedCartItems.length > 0 ? state.isCartOpen : false;
    return {
      ...state,
      cartItem: updatedCartItems,
      total: updatedTotal,
      isCartOpen,
    };
    // return { ...state, cartItem: tempItem };
  }

  /*장바구니 주문하기 */
  if (action.type === "ORDER_ITEMS") {
    return {
      ...state,
      orderItems: [...state.orderItems, ...state.cartItem],
      cartTotalAmount: state.cartTotalAmount + state.cartAmount,
      isOrderCompleted: true,
      isCartOpen: false,
      totalPrice: state.totalPrice + state.total,
      // cartItem: [],
    };
  }
  /*주문하기 완료 후  주문내역 닫기버튼  */
  if (action.type === "CLOSE_ORDER") {
    return { ...state, isOrderCompleted: false, cartItem: [], total: 0 };
  }
  /*footer 주문내역 열기 */
  if (action.type === "ORDER_DETAILS_OPEN") {
    return { ...state, isOrderDetails: true };
  }
  /*footer 주문내역 닫기 */
  if (action.type === "ORDER_DETAILS_CLOSE") {
    return { ...state, isOrderDetails: false };
  }
  /* 상품 수량*/
  if (action.type === "CART_AMOUNT") {
    // let cartAmount = state.cartItem.reduce((prev, cur) => {
    //   prev += cur.amount;
    //   return prev;
    // }, 0);

    let cartAmount = action.payload.cartAmount ? action.payload.cartAmount : 0;
    // let isCartOpen = action.payload.isCartOpen
    //   ? action.payload.isCartOpen
    //   : state.isCartOpen;

    return {
      ...state,
      cartAmount,
      // isCartOpen,
    };
  }

  return state;
};

export default reducer;
