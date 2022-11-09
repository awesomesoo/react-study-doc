import React from 'react';
// import Todos from './components/todos/Todos';
// import Friend from './components/friend/Friend/Friend';

/*
 * 작업물이 많을 때는 아래와 같이 쓰면 단축이 된다.
 */
// import { Friend, Todos } from './components';
// import { Friend, Todos } from './componentsReview';
import Test from './sampleTest';

import './assets/css/reset.css';

const App = () => {
  return (
    <div>
      <Test />
      {/* <Todos /> */}
      {/* <hr /> */}
      {/* <Friend /> */}
    </div>
  );
};

export default App;
