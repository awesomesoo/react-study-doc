import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// redux, react-redux 불러오기
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store' // 이름(=rootReducer)은 맘대로

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

/* 

4. index.js에 스토어 생성해서 3번 리듀서 자식(자손)컴포넌트에 전달하기 

src/index.js

  import { createStore } from 'redux';
  import { Provider } from 'react-redux'; 

  //스토어 생성
  const store = createStore( 합쳐진리듀서 ); 

  <Provider store={ store }> 
    <App />
  </Provider>

*/
