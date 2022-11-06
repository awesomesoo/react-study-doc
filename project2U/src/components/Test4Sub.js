import PropTypes from 'prop-types';

// {}블록이 반드시 들어가야함. 에러조차 나오지 않음
const Test4Sub = ({ name, age, addr, tel, color, bgcolor, done }) => {
  // const { name, age, addr, tel, color, bgcolor, done } = props;
  return (
    <div
      style={{
        width: 350,
        padding: 15,
        margin: '30px auto',

        // 문제 : borderColor를 color로 변경, backgroundColor는 bgcolor
        border: `5px solid ${color}`,
        // 템플릿 리터럴 형식
        backgroundColor: bgcolor,
      }}
    >
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>주소 : {addr}</li>
        <li>전화 : {tel}</li>
        <li>컬러 : {color}</li>
        <li>배경색 : {bgcolor}</li>
        {/* true는 동의, false는 비동의 */}
        <li>동의여부 : {done ? '동의' : '비동의'}</li>
      </ul>
    </div>
  );
};

//하나의 자식만 요구하기
Test4Sub.propTypes = {
  name: PropTypes.string.isRequired, //필수
  age: PropTypes.number.isRequired, //필수
  addr: PropTypes.string,
  tel: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  done: PropTypes.bool,
};

//초기 Prop 값
Test4Sub.defaultProps = {
  name: '홍길동',
  age: 20,
  addr: '지구',
  tel: '010-0000-0000',
  color: 'skyblue',
  bgcolor: 'lime',
  done: true,
};

export default Test4Sub;
/* 

여러분의 앱이 커짐에 따라 타입 검사를 활용하면 많은 버그를(bug) 잡을 수 있습니다. 
특정 애플리케이션에서는 전체 애플리케이션의 타입 검사를 위해 Flow 또는 
TypeScript와 같은 JavaScript 도구(Extensions)를 사용할 수 있습니다. 
이러한 것들을 사용하지 않더라도 React는 내장된 타입 검사 기능들을 가지고 있습니다. 
컴포넌트의 props에 타입 검사를 하려면 다음과 같이 
특별한 프로퍼티인 propTypes를 선언할 수 있습니다.


PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 
다양한 유효성 검사기(Validator)를 내보냅니다. 






import PropTypes from 'prop-types';

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};


import PropTypes from 'prop-types';

해당컴포넌트.propTypes = {
  props명: PropTypes.타입
  props명: PropTypes.타입.isRequired
  props명: PropTypes.타입.필수여부
};





초기 Prop 값
defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있습니다.

// props의 초깃값을 정의합니다.
Greeting.defaultProps = {
  name: 'Stranger'
};

자식컴포넌트.defaultProps = {
  props명: 초기값
};

*/
