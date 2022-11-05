import { useState } from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
  const [msg, setMsg] = useState('아무거나');
  const [isShow, setIsShow] = useState(false);

  const onShow1 = () => {
    const result = window.confirm('데이터를 삭제하시겠습니까?');
    if (result) {
      setMsg('Yes. 모두 삭제하세요.');
      setIsShow(true);
    } else {
      return;
    }
  };
  const onShow2 = () => {};

  return (
    <div>
      <p>
        <button onClick={onShow1}>메시지 1</button>
        <button onClick={onShow2}>메시지 2</button>
      </p>
      <hr />
      <Test7Sub msg={msg} isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Test7;
