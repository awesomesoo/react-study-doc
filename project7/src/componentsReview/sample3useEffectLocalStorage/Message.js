import React from 'react';
import { useEffect } from 'react';

const Message = ({ msg, isShow, setIsShow }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div className={`message ${isShow ? 'on' : ''}`}>메시지 : {msg}</div>
    </>
  );
};

export default Message;
