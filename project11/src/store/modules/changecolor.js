const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

export const changecolor = () => ({ type: CHANGE_COLOR })

const initialState = { color: 'orange' }

const reducer = (state = initialState, action) => {}

export default reducer
