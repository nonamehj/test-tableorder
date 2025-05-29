# ☕ TableOrder

카페 테이블오더 UI - 사용자 친화적인 음료 주문 시스템

## 📌 프로젝트 소개

**TableOrder**는 카페를 위한 프론트엔드 기반 테이블오더 UI입니다.  
사용자는 메뉴 카테고리를 선택하고, 옵션을 지정한 뒤, 장바구니에 담아 주문을 완료할 수 있습니다.  
결제 기능은 포함되어 있지 않으며, **메뉴 선택 → 옵션 설정 → 주문 흐름**을 직관적으로 구현했습니다.

---

## 🎯 주요 기능 및 흐름

### ✅ 반응형 UI

**미디어 쿼리 기준:**

- max-width: `479`
- min-width ~ max-width : `480 ~ 767`
- min-width ~ max-width : `768 ~ 1023`
- min-width ~ max-width : `1024 ~ 1279`
- min-width ~ max-width : `1280 ~ 1439`
- min-width : `1440 이상`

**768px 미만 (모바일/태블릿)**

- 세로형 구조 중심의 UI

**768px 이상 (PC 화면)**

- 상단: `Navbar`
- 중단: `카테고리(1fr) : 메뉴 리스트(2fr)`
- 하단: `Footer` (호출, 장바구니, 주문내역 버튼)

### ✅ 주요 UI 흐름

1. **카테고리 선택** → 해당 메뉴 리스트 렌더링
2. **메뉴 클릭** → 옵션 선택 모달
3. **옵션 선택 후** → 장바구니 담기
4. **장바구니 / 주문내역 / 주문완료** → 모달로 처리

---

## 📁 폴더 구조 (src/)

```js
src/
├── components/
│   ├── category/
│   │   ├── Category.js
│   │   └── CategoryStyle.css
│   ├── footer/
│   │   ├── OrderSummary.js
│   │   └── OrderSummaryStyle.css
│   ├── modal/
│   │   ├── itemcart/
│   │   │   ├── ItemCart.js
│   │   │   ├── ItemCartStyle.css
│   │   │   ├── ItemCartDetails.js
│   │   │   └── ItemCartDetailsStyle.css
│   │   ├── modalitems/
│   │   │   ├── ModalItem.js
│   │   │   ├── ModalItemStyle.css
│   │   │   ├── OptionItem.js
│   │   │   └── OptionItemStyle.css
│   │   ├── ordercomplete/
│   │   │   ├── OrderComplete.js
│   │   │   └── OrderCompleteStyle.css
│   │   ├── orderdetails/
│   │   │   ├── OrderDetails.js
│   │   │   ├── OrderDetailsStyle.css
│   │   │   ├── OrderOptions.js
│   │   │   └── OrderOptionsStyle.css
│   ├── navbar/
│   │   ├── Navbar.js
│   │   └── NavbarStyle.css
│   ├── section/
│   │   ├── Items.js
│   │   ├── ItemsStyle.css
│   │   ├── MenuList.js
│   │   └── MenuListStyle.css
├── action.js
├── App.js
├── index.css
├── context.js
├── data.js
└── reducer.js

```

## 🧩 컴포넌트 및 주요 로직 파일 설명

### 📁 컴포넌트

#### Category (Category/Category.js)

메뉴 카테고리를 선택할 수 있는 버튼들을 제공하는 컴포넌트입니다.

#### OrderSummary (Footer/OrderSummary)

하단에 위치한 주문 관련 버튼들을 포함합니다.

- 호출 버튼: 직원을 호출하는 버튼으로, 클릭 시 모달 없이 버튼이 흔들리는 애니메이션이 동작합니다.
- 장바구니 버튼: 선택된 물품 수량이 표시되며 클릭 시 장바구니 화면이 열립니다.
- 주문내역 버튼: 주문 완료 후 주문내역을 확인할 수 있습니다.

#### ItemCart (Modal/ItemCart/ItemCart)

- 장바구니 버튼 클릭 시 나타나는 모달 컴포넌트입니다.
  선택된 물품 전체 수량, 총 가격, 닫기 및 주문하기 버튼이 포함되어 있습니다.
- 자식 컴포넌트: `ItemCartDetails`

#### ItemCartDetails (Modal/ItemCart/ItemCartDetails)

- 개별 선택 항목에 대한 정보 (이름, 수량 증감 버튼, 삭제 버튼, 가격)를 보여주는 컴포넌트입니다.

#### ModalItem (Modal/ModalItems/ModalItem)

- 아이템 선택 시 옵션을 선택할 수 있는 모달입니다.
  닫기 버튼과 장바구니 담기 버튼이 포함됩니다.

- 자식 컴포넌트: `OptionItem`

#### OptionItem (Modal/ModalItems/OptionItem)

- 선택한 음료의 옵션(온도, 사이즈, 수량 등)을 설정하고 가격을 표시하는 컴포넌트입니다.

#### OrderComplete (Modal/OrderComplete/OrderComplete)

- 장바구니에서 주문하기를 클릭했을 때 나타나는 주문 완료 알림입니다.
  간단한 주문 정보(아이템 이름, 수량)가 표시되고, 5초 후 자동으로 닫힙니다.

#### OrderDetails (Modal/OrderDetails/OrderDetails)

- 주문내역 버튼 클릭 시 나타나는 주문 내역 모달입니다.
  지금까지 주문한 전체 아이템 목록, 옵션, 수량, 총합계가 표시됩니다.

- 자식 컴포넌트: `OrderOptions`

#### OrderOptions (Modal/OrderDetails/OrderOptions)

- 주문 아이템의 세부 옵션 정보를 보여주는 토글 방식의 컴포넌트입니다.

#### Navbar (Navbar/Navbar)

- 로고와 함께 현재 테이블 번호를 표시하는 상단 바입니다.

#### MenuList (Section/MenuList)

- 전체 아이템들을 grid 형태로 나열하는 레이아웃 컨테이너 역할을 합니다.

- 자식 컴포넌트: `Items`

#### Items (Section/Items)

- 음료의 이미지, 이름, 가격, 옵션 선택 버튼을 보여주는 개별 메뉴 카드 컴포넌트입니다.

#### App

- 전체 앱의 루트 컴포넌트입니다. 위에 언급된 주요 컴포넌트들을 포함하여 렌더링합니다.

#### ✅ 파일

#### data

- 실제 API 호출 없이 사용자가 정의한 정적 데이터 파일입니다.
  음료 이름, 가격, 이미지, 사이즈, 옵션 정보 등이 포함되어 있습니다.

#### context

전역 상태 관리를 위한 Context 설정 파일입니다.
각 컴포넌트에서 reducer로 상태를 전달받을 수 있도록 구성되어 있습니다.

#### reducer

- 앱 내 상태 변화(예: 항목 선택, 수량 변경, 모달 열기 등)를 처리하는 로직을 포함한 리듀서 함수입니다.
  각 상황에 따른 동작들을 정의하여 UI 상태를 제어합니다.

#### action

- reducer에서 사용되는 action type 들을 분리하여 정의한 상수 모음입니다.
  액션의 목적을 명확히 하고 유지 보수를 쉽게 하기 위해 사용됩니다.

---

## 🛠️ 사용 기술 및 라이브러리

✅ React 기본 훅

- React Hooks: useState, useReducer, useCallback, useRef, useEffect, useContext

✅ Context
createContext, useContext, useGlobalContext

✅ 아이콘

- react-icons

✅ data

- 직접 정의한 더미 데이터 사용 (API 비사용)

### 🚀 설치 및 실행 방법

- npx create-react-app tableorder
- cd tableorder
- npm install
- npm start

---

## 💡 개발 목적 및 계기

식당에서 실제 테이블오더 시스템을 보고, 그리드 기반 UI로 구현해볼 수 있겠다는 생각으로 시작하게 되었습니다.
메뉴 리스트만 나열하는 것이 아닌, 옵션 선택과 모달 전환을 통해 실제 사용 흐름과 유사하게 구현했습니다.
UI 구성은 손으로 그려가며 시각화 후 개발을 진행했고, 레이아웃 설계에 큰 도움이 되었습니다.

## 🧠 개발하며 느낀 점

초기에는 `useState`를 사용했으나 컴포넌트 간 `props` 전달이 많아지며 상태 관리가 복잡해져 `Context API`로 전환하게 되었습니다.
이후 상태 변화가 많고 깊어지는 구조로 인해 `useReducer`를 적용하여 상태와 로직을 분리했습니다.

하지만 `useReducer`를 사용하는 과정에서 액션이 많아지고 로직이 복잡해지면서 의도와 다르게 동작하는 문제를 직접 겪게 되었고,
이 경험을 통해 **상태 자체를 복잡하게 구성하기보다는 코드 구조를 단순하고 명확하게 유지하는 것이 더 효율적**이라는 점을 실감했습니다.

또한 `Context + Reducer` 조합을 사용할 때는 `useCallback`, `useMemo` 등의 최적화를 무분별하게 사용하기보다는
**정확한 타이밍과 필요성에 따라 적용하는 것이 중요하다는 점도 깨달았습니다.**

이러한 경험들을 바탕으로, 이후에는 **유지보수가 쉽고 흐름이 명확한 구조**를 우선으로 설계하고자 합니다.

## 🌱 개선점 및 향후 계획

- **결제 기능**은 현재 포함되어 있지 않으며, 추후 백엔드 학습 후
  `KakaoPay`, `Toss` 등의 결제 API 연동을 직접 구현해볼 계획입니다.

- **화면 높이가 긴 태블릿** 환경에서 UI가 지나치게 길게 느껴지는 문제를 인지했으며,
  미디어쿼리를 활용해 글자 크기, 버튼 간격 등 **세부적인 반응형 디자인 개선**을 준비 중입니다.

- 코드 구조 개선을 위해 `reducer`, `action types`, `상수 파일` 등
  기능별로 모듈화하여 유지보수와 협업에 적합한 구조로 리팩토링할 예정입니다.

- 백엔드와의 연동은 처음부터 협업보다는, **프론트엔드에 충분히 익숙해진 후**
  `Node.js`, `Express` 등을 직접 학습해보며 프로젝트를 확장해볼 계획입니다.

---

## 📸 프로젝트 데모 및 기타

📸 프로젝트 데모
👉 [https://gptonline.ai/ko](https://gptonline.ai/ko)
💻 GitHub 코드
👉 [https://gptonline.ai/ko](https://gptonline.ai/ko)
