/* import React from 'react'

const Test4Sub = ({ text, count }) => {
  console.log(text, count)
  return (
    <div style={{ color: 'tomato', marginBottom: 20, fontSize: 30 }}>
      {text} : {count}
    </div>
  )
}

export default React.memo(Test4Sub)
 */

/*

작업을 한 후 
rscm

*/

import React, { memo } from 'react'

const Test4ReactMemoSub = memo(({ text, count }) => {
  console.log(text, count)
  return (
    <div style={{ color: 'tomato', marginBottom: 20, fontSize: 30 }}>
      {text} : {count}
    </div>
  )
})

export default Test4ReactMemoSub
