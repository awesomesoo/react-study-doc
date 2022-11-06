import Test4Sub from './Test4Sub';

const Test4 = () => {
  return (
    <div>
      {/* 배운게 없기 때문에 name과 같은 속성을 넣는것이지 실제 작업은 이렇게 넣지 않는다. props를 보여주기 위함임 */}
      <Test4Sub
        name="김고은"
        age={25}
        addr="제주"
        tel="010-2134-5678"
        color="hotpink"
        bgcolor="yellow"
        done={true}
      />
      <Test4Sub
        name="한지민"
        age={30}
        addr="서울"
        color="blue"
        bgcolor="aqua"
        done={false}
      />
      <Test4Sub name="김태희" age={44} />
    </div>
  );
};

export default Test4;
