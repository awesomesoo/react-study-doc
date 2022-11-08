const Sub = ({ name, age }) => {
  //props ={name:xxx, age:xxx}
  // const { name, age } = props;
  // 를 지우고 { name, age }를 props로 전달해도 동일하게나옴
  return (
    <div>
      <h3>
        {/* const { name, age } = props; 라고 썼기 떄문에 props는 지워도 됨  */}
        {/* 이름 : {props.name} / type : ({typeof props.name}) */}
        이름 : {name} / type : ({typeof name})
      </h3>
      <h3>
        나이 : {age} / type : ({typeof age})
      </h3>
      <hr />
    </div>
  );
};

const Test3 = () => {
  const dog = { name: '강아지', age: 3 };
  const cat = { name: '고양이', age: 2 };
  return (
    <>
      <Sub name="유재석" age="30" />
      <Sub name="김고은" age={25} />
      <Sub name={dog.name} age={dog.age} />
      <Sub name={cat.name} age={cat.age} />
      {/* 스프레드 연산자( {...} ) : dog 안에 키값을 넘거주기 위해 사용 */}
      <Sub {...dog} />
      <Sub {...cat} />
    </>
  );
};

export default Test3;
