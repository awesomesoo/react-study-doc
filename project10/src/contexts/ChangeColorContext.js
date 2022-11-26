import React, { createContext } from 'react'

export const ChangeColorContext = createContext()

const ChangeColorProvider = props => {
  return (
    <ChangeColorContext.Provider value="">
      {props.children}
    </ChangeColorContext.Provider>
  )
}

export default ChangeColorProvider
