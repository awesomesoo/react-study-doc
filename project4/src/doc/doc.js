import React, { useRef, useState } from "react";

const doc = () => {
  const [data, setData] = useState(dataList);
  const no = useRef(data.length + 1);

  // 삭제
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // 추가
  const onAdd = (text) => {
    setData([...data, { id: no.current++, text, isChk: false }]);
  };

  // 수정
  const onMod = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isChk: !item.isChk } : item
      )
      // ★ 주의 : !isChk 만 쓰면 안되고 해당하는 것에 대한 key를 가져와야 하기 떄문에 !item.isChk 라고 써야한다.
    );
  };
  return <div>기능 정리</div>;
};

export default doc;
