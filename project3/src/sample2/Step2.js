import React from 'react';

const Step2 = ({ job, email, gender, inter, changeInput }) => {
  return (
    <div>
      <h3>Step 2</h3>
      <p>
        <label>직업</label>
        <input type="text" name="job" value={job} onChange={changeInput} />
      </p>
      <p>
        <label>이메일</label>
        <input type="text" name="email" value={email} onChange={changeInput} />
      </p>
      <p>
        <label>성별</label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={changeInput}
        />
      </p>
      <p>
        <label>관심분야</label>
        <input type="text" name="inter" value={inter} onChange={changeInput} />
      </p>
      <p>
        <button>이전</button>
        <button>다음</button>
      </p>
    </div>
  );
};

export default Step2;
