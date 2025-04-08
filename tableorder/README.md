# ☕ BevOrder

카페 테이블오더 UI - 사용자 친화적인 음료 주문 시스템  
👉 [포트폴리오 바로가기](https://gptonline.ai/ko)

## 📌 프로젝트 소개

**BevOrder**는 카페를 위한 프론트엔드 기반 테이블오더 UI입니다.  
사용자는 메뉴 카테고리를 선택하고, 옵션을 지정한 뒤, 장바구니에 담아 주문을 완료할 수 있습니다.  
결제 기능은 포함되어 있지 않으며, **메뉴 선택 → 옵션 설정 → 주문 흐름**을 직관적으로 구현했습니다.

## 🎯 주요 기능 및 흐름

### ✅ 반응형 UI

**미디어 쿼리 기준:**

- `max-width`: 479, 480 ~ 767, 768 ~ 1023, 1024 ~ 1439, 1440 이상

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

## 📁 폴더 구조 (src/)

```bash
src/
├── category/                 # 카테고리 버튼 UI
│   └── Category.jsx
│
├── footer/                   # 하단 주문 요약 버튼
│   └── OrderSummary.jsx
│
├── modal/
│   ├── itemcart/
│   │   ├── ItemCart.jsx
│   │   └── ItemCartDetails.jsx
│   ├── modalitems/
│   │   ├── ModalItem.jsx
│   │   └── OptionItem.jsx
│   ├── ordercomplete/
│   │   └── OrderComplete.jsx
│   └── orderdetails/
│       ├── OrderDetails.jsx
│       └── OrderOptions.jsx
│
├── navbar/
│   └── Navbar.jsx
│
├── section/
│   ├── Items.jsx
│   └── MenuList.jsx
🛠️ 사용 기술 및 라이브러리
CRA (Create React App)

React Hooks: useState, useReducer, useCallback, useRef, useEffect, useContext

Context API: useGlobalContext

react-icons

직접 정의한 더미 데이터 사용 (API 비사용)

🚀 설치 및 실행 방법
npx create-react-app bevorder
cd bevorder
npm install
npm start
💡 개발 목적 및 계기
식당에서 실제 테이블오더 시스템을 보고 "그리드 기반 UI로 직접 구현해볼 수 있겠다" 는 아이디어로 시작하게 되었습니다.
메뉴 리스트만 나열하는 것이 아닌, 옵션 선택과 모달 전환을 통해 실제 사용 흐름과 유사하게 구현했습니다.
UI 구성은 손으로 그려가며 시각화 후 개발을 진행했고, 레이아웃 설계에 큰 도움이 되었습니다.

### 🧠 개발하며 느낀 점

초기에는 `useState`를 사용했으나 컴포넌트 간 `props` 전달이 많아지며 상태 관리가 복잡해져 `Context API`로 전환하게 되었습니다.
이후 상태 변화가 많고 깊어지는 구조로 인해 `useReducer`를 도입해 상태와 로직을 분리했습니다.

하지만 `useReducer`를 사용하는 과정에서 액션이 많아지고 로직이 복잡해지며, 의도와 다르게 동작하는 문제를 직접 겪게 되었고,
이 경험을 통해 **상태 자체를 복잡하게 구성하기보다는 코드 구조를 단순하고 명확하게 유지하는 것이 더 효율적**이라는 점을 실감했습니다.

또한 `Context + Reducer` 조합을 사용할 때는 `useCallback`, `useMemo` 등의 최적화를 무분별하게 사용하기보다는
**정확한 타이밍과 필요성에 따라 적용하는 것이 중요하다는 점도 깨달았습니다.**

이러한 경험들을 바탕으로, 이후에는 **유지보수가 쉽고 흐름이 명확한 구조**를 우선으로 설계하고자 합니다.

### 🌱 개선점 및 향후 계획

- **결제 기능**은 현재 포함되어 있지 않으며, 추후 백엔드 학습 후
  `KakaoPay`, `Toss`, `Stripe` 등의 결제 API 연동을 직접 구현해볼 계획입니다.

- **화면 높이가 긴 태블릿** 환경에서 UI가 지나치게 길게 느껴지는 문제를 인지했으며,
  미디어쿼리 기준으로 폰트 크기, 버튼 간격 등 **세부적인 반응형 디자인 개선**을 준비 중입니다.

- 코드 구조 개선을 위해 `reducer`, `action types`, `상수 파일` 등
  기능별로 모듈화하여 유지보수와 협업에 적합한 구조로 리팩토링할 예정입니다.

- 백엔드와의 연동은 처음부터 협업보다는, **프론트엔드에 충분히 익숙해진 후**
  `Node.js`, `Express` 등을 직접 학습해보며 프로젝트 확장을 시도하고자 합니다.

---

### 📸 스크린샷 및 데모

프로젝트 데모는 포트폴리오 웹사이트에서 확인하실 수 있습니다:
👉 [https://gptonline.ai/ko](https://gptonline.ai/ko)

※ 추후 GIF 및 스크린샷을 추가하여 더욱 직관적인 소개도 고려 중입니다.

---

### 📎 기타 정보

- 포트폴리오 웹사이트 주소: [https://gptonline.ai/ko](https://gptonline.ai/ko)
- GitHub 레포지토리 연동 예정






-------------------------------------------------------------------
☕ BevOrder

카페 테이블오더 UI - 사용자 친화적인 음료 주문 시스템👉 포트폴리오 바로가기

📌 프로젝트 소개

BevOrder는 카페를 위한 프론트엔드 기반 테이블오더 UI입니다.사용자는 메뉴 카테고리를 선택하고, 옵션을 지정한 뒤, 장바구니에 담아 주문을 완료할 수 있습니다.결제 기능은 포함되어 있지 않으며, 메뉴 선택 → 옵션 설정 → 주문 흐름을 직관적으로 구현했습니다.

🎯 주요 기능 및 흐름

✅ 반응형 UI

미디어 쿼리 기준:

max-width: 479, 480 ~ 767, 768 ~ 1023, 1024 ~ 1439, 1440 이상

768px 미만 (모바일/태블릿)

세로형 구조 중심의 UI

768px 이상 (PC 화면)

상단: Navbar

중단: 카테고리(1fr) : 메뉴 리스트(2fr)

하단: Footer (호출, 장바구니, 주문내역 버튼)

✅ 주요 UI 흐름

카테고리 선택 → 해당 메뉴 리스트 렌더링

메뉴 클릭 → 옵션 선택 모달

옵션 선택 후 → 장바구니 담기

장바구니 / 주문내역 / 주문완료 → 모달로 처리

📁 폴더 구조 (src/)

src/
├── category/                 # 카테고리 버튼 UI
│   └── Category.jsx
│
├── footer/                   # 하단 주문 요약 버튼
│   └── OrderSummary.jsx
│
├── modal/
│   ├── itemcart/
│   │   ├── ItemCart.jsx
│   │   └── ItemCartDetails.jsx
│   ├── modalitems/
│   │   ├── ModalItem.jsx
│   │   └── OptionItem.jsx
│   ├── ordercomplete/
│   │   └── OrderComplete.jsx
│   └── orderdetails/
│       ├── OrderDetails.jsx
│       └── OrderOptions.jsx
│
├── navbar/
│   └── Navbar.jsx
│
├── section/
│   ├── Items.jsx
│   └── MenuList.jsx

🛠️ 사용 기술 및 라이브러리

Create React App (CRA)

React Hooks: useState, useReducer, useCallback, useRef, useEffect, useContext

Context API: useGlobalContext

react-icons

직접 정의한 더미 데이터 사용 (API 비사용)

🚀 설치 및 실행 방법

npx create-react-app bevorder
cd bevorder
npm install
npm start

💡 개발 목적 및 계기

식당에서 실제 테이블오더 시스템을 접한 후, 그리드 기반 UI로 구현해볼 수 있겠다는 생각으로 시작하게 되었습니다.
단순한 메뉴 리스트 나열이 아닌, 옵션 선택 및 모달 전환을 포함하여 실제 사용자 흐름과 유사한 UI를 목표로 개발했습니다.
UI 설계는 손으로 직접 그려가며 구조를 시각화했고, 이 과정은 레이아웃 구성에 큰 도움이 되었습니다.

🧠 개발하며 느낀 점

초기에는 useState를 활용해 상태를 관리했으나, 컴포넌트 간 props 전달이 많아지면서 점차 구조가 복잡해졌고,
이로 인해 Context API를 도입하게 되었습니다. 이후 상태가 점점 깊어지고 변화가 많아지면서 useReducer를 적용하여 상태와 로직을 분리하였습니다.

하지만 useReducer를 사용하는 과정에서 액션의 수가 늘어나고 로직이 복잡해지면서 일부 기능이 의도와 다르게 동작하는 문제를 경험했습니다.
이러한 문제를 통해 복잡한 상태를 구성하는 것보다 구조 자체를 단순하고 명확하게 유지하는 것이 더 중요하다는 사실을 체감할 수 있었습니다.

또한, Context + Reducer 조합에서는 useCallback, useMemo 등의 최적화 훅을 무분별하게 사용하는 것이 오히려 유지보수를 어렵게 만들 수 있으며,
최적화는 꼭 필요한 시점과 상황에서만 적용해야 한다는 교훈을 얻었습니다.

이 경험을 통해 앞으로는 유지보수성과 가독성을 고려한 단순하고 명확한 코드 설계를 지향하게 되었습니다.

🌱 개선점 및 향후 계획

결제 기능은 현재 포함되어 있지 않으며, 추후 백엔드 학습 후 KakaoPay, Toss, Stripe 등 결제 API 연동을 직접 구현해볼 계획입니다.

화면 높이가 긴 태블릿 환경에서는 UI가 다소 길어 보이는 문제를 확인하였고, 미디어 쿼리를 활용해 글자 크기, 버튼 간격 등 세부적인 반응형 디자인 개선을 준비하고 있습니다.

코드의 구조적 개선을 위해 reducer, action types, 상수 파일 등 기능별로 모듈을 분리하고, 유지보수와 협업에 적합한 아키텍처로 리팩토링할 예정입니다.

백엔드와의 연동은 협업보다는, 프론트엔드에 충분히 익숙해진 이후 Node.js, Express 등을 직접 학습하여 프로젝트를 확장해볼 계획입니다.

📸 스크린샷 및 데모

프로젝트 데모는 포트폴리오 웹사이트에서 확인하실 수 있습니다:👉 https://gptonline.ai/ko

※ 추후 GIF 및 스크린샷을 추가하여 더욱 직관적인 소개 구성을 계획하고 있습니다.

📎 기타 정보

포트폴리오 웹사이트 주소: https://gptonline.ai/ko

GitHub 레포지토리 연동 예정


--최종 ----------------
# ☕ BevOrder

카페 테이블오더 UI - 사용자 친화적인 음료 주문 시스템
👉 [포트폴리오 바로가기](https://gptonline.ai/ko)

## 📌 프로젝트 소개

**BevOrder**는 카페를 위한 프론트엔드 기반 테이블오더 UI입니다.
사용자는 메뉴 카테고리를 선택하고, 옵션을 지정한 뒤, 장바구니에 담아 주문을 완료할 수 있습니다.
결제 기능은 포함되어 있지 않으며, **메뉴 선택 → 옵션 설정 → 주문 흐름**을 직관적으로 구현했습니다.

## 🎯 주요 기능 및 흐름

### ✅ 반응형 UI

**미디어 쿼리 기준:**

- `max-width`: 479, 480 ~ 767, 768 ~ 1023, 1024 ~ 1439, 1440 이상

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

## 📁 폴더 구조 (src/)

src/
├── category/                 # 카테고리 버튼 UI
│   └── Category.jsx
│
├── footer/                   # 하단 주문 요약 버튼
│   └── OrderSummary.jsx
│
├── modal/
│   ├── itemcart/
│   │   ├── ItemCart.jsx
│   │   └── ItemCartDetails.jsx
│   ├── modalitems/
│   │   ├── ModalItem.jsx
│   │   └── OptionItem.jsx
│   ├── ordercomplete/
│   │   └── OrderComplete.jsx
│   └── orderdetails/
│       ├── OrderDetails.jsx
│       └── OrderOptions.jsx
│
├── navbar/
│   └── Navbar.jsx
│
├── section/
│   ├── Items.jsx
│   └── MenuList.jsx
🛠️ 사용 기술 및 라이브러리
CRA (Create React App)

React Hooks: useState, useReducer, useCallback, useRef, useEffect, useContext

Context API: useGlobalContext

react-icons

직접 정의한 더미 데이터 사용 (API 비사용)

🚀 설치 및 실행 방법
npx create-react-app bevorder
cd bevorder
npm install
npm start
💡 개발 목적 및 계기
식당에서 실제 테이블오더 시스템을 보고 "그리드 기반 UI로 직접 구현해볼 수 있겠다"는 아이디어로 시작하게 되었습니다.
메뉴 리스트만 나열하는 것이 아닌, 옵션 선택과 모달 전환을 통해 실제 사용 흐름과 유사하게 구현했습니다.
UI 구성은 손으로 그려가며 시각화 후 개발을 진행했고, 레이아웃 설계에 큰 도움이 되었습니다.

🧠 개발하며 느낀 점
초기에는 useState를 사용했으나 컴포넌트 간 props 전달이 많아지며 상태 관리가 복잡해져 Context API로 전환하게 되었습니다.
이후 상태 변화가 많고 깊어지는 구조로 인해 useReducer를 도입해 상태와 로직을 분리했습니다.

하지만 useReducer를 사용하는 과정에서 액션이 많아지고 로직이 복잡해지며, 의도와 다르게 동작하는 문제를 직접 겪게 되었고,
이 경험을 통해 상태 자체를 복잡하게 구성하기보다는 코드 구조를 단순하고 명확하게 유지하는 것이 더 효율적이라는 점을 실감했습니다.

또한 Context + Reducer 조합을 사용할 때는 useCallback, useMemo 등의 최적화를 무분별하게 사용하기보다는 정확한 타이밍과 필요성에 따라 적용하는 것이 중요하다는 점도 깨달았습니다.

이러한 경험들을 바탕으로, 이후에는 유지보수가 쉽고 흐름이 명확한 구조를 우선으로 설계하고자 합니다.

🌱 개선점 및 향후 계획
결제 기능은 현재 포함되어 있지 않으며, 추후 백엔드 학습 후
KakaoPay, Toss, Stripe 등의 결제 API 연동을 직접 구현해볼 계획입니다.

화면 높이가 긴 태블릿 환경에서 UI가 지나치게 길게 느껴지는 문제를 인지했으며,
미디어쿼리 기준으로 폰트 크기, 버튼 간격 등 세부적인 반응형 디자인 개선을 준비 중입니다.

코드 구조 개선을 위해 reducer, action types, 상수 파일 등
기능별로 모듈화하여 유지보수와 협업에 적합한 구조로 리팩토링할 예정입니다.

백엔드와의 연동은 처음부터 협업보다는, 프론트엔드에 충분히 익숙해진 후
Node.js, Express 등을 직접 학습해보며 프로젝트 확장을 시도하고자 합니다.

📸 스크린샷 및 데모
프로젝트 데모는 포트폴리오 웹사이트에서 확인하실 수 있습니다:
👉 https://gptonline.ai/ko

※ 추후 GIF 및 스크린샷을 추가하여 더욱 직관적인 소개도 고려 중입니다.

📎 기타 정보
포트폴리오 웹사이트 주소: https://gptonline.ai/ko

GitHub 레포지토리 연동 예정

```
