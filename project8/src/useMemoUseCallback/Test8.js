import React, { useState } from 'react'
import Test8Sub from './Test8Sub'

const Test8 = () => {
  const [color, setColor] = useState('')
  const [food, setFood] = useState('')
  const onColor = () => {}
  const onFood = () => {}
  return (
    <>
      <h2>좋아하는 색</h2>
      <article>
        <input type="text" value={color} onChange={onColor} />
        <p>red, green, blue</p>
      </article>
      <h2>좋아하는 음식</h2>
      <article>
        <p>
          <input type="radio" name="food" value="불고기" onChange={onFood} />
          <label>불고기</label>
        </p>
        <p>
          <input type="radio" name="food" value="라면" onChange={onFood} />
          <label>라면</label>
        </p>
        <p>
          <input type="radio" name="food" value="쫄면" onChange={onFood} />
          <label>쫄면</label>
        </p>
      </article>
      <hr />
      <Test8Sub color={color} food={food} />
    </>
  )
}

export default Test8

/* 

import React, { useState } from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    const [ color , setColor ] = useState('')
    const [ food , setFood ] = useState('')

    const onColor  = (e) => {
        setColor( e.target.value )
    }
    
    const onFood  = (e) => {
        setFood( e.target.value )
    }


    return (
        <div>
            <h2>좋아하는 색 </h2>
            <article>
                <input type="text" value={color} onChange={ onColor } />
                <p>red, green, blue</p>
            </article>
            <article>
                <h2> 좋아하는 음식 </h2>
                <p><input type="radio" name="food" value="불고기" onChange={onFood}/>
                   <label>불고기</label> 
                </p>
                <p><input type="radio" name="food" value="라면" onChange={onFood}/>
                   <label>라면</label> 
                </p>
                <p><input type="radio" name="food" value="쫄면" onChange={onFood}/>
                   <label>쫄면</label> 
                </p>
            </article>
            <hr/>
            <Test8Sub color={color} food={food} />
        </div>
    );
};

export default Test8;

*/
