import React from 'react'

const Test5Sub = ({ text, result }) => {
  console.log('Test5Sub', text, result)
  return (
    <div
      style={{
        border: '1px solid #000',
        margin: 20,
        padding: '15px 20px',
        fontSize: 30,
      }}
    >
      {text} / {result}
    </div>
  )
}

export default React.memo(Test5Sub)
