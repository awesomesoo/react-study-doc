import React, { useEffect, useState } from 'react';

const Test5Sub = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    console.log('onMove');
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMove);
  });
  return (
    <div>
      <h2>
        x축 : {x} / y축 : {y}
      </h2>
    </div>
  );
};

export default Test5Sub;
