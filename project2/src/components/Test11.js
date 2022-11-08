import { useState } from 'react';
import './Test11.css';

const Test11 = () => {
  const [isClass, setIsclass] = useState(false);
  const onAdd = () => {
    setIsclass(true);
  };
  const onRemove = () => {
    setIsclass(false);
  };
  const onToggle = () => {
    setIsclass(!isClass);
  };

  return (
    <div className="wrap">
      <p className="on">오늘은 토요일입니다.</p>
      <p className="on1">오늘은 토요일입니다.</p>
      <p className="test on">오늘은 토요일입니다.</p>
      <hr />
      <p className={isClass ? 'on' : ''}>오늘은 토요일입니다.</p>
      <p className={isClass ? 'on1' : ''}>오늘은 토요일입니다.</p>
      {/* 템플릿 리터럴을 사용해서 토글만들기 */}
      <p className={`test ${isClass ? 'on' : ''}`}>오늘은 토요일입니다.</p>
      <div>
        <button onClick={onAdd}>classList.add</button>
        <button onClick={onRemove}>classList.remove</button>
        <button onClick={onToggle}>classList.toggle</button>
      </div>
    </div>
  );
};

export default Test11;
