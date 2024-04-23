import {createSlice} from '@reduxjs/toolkit'

const m = {
  // 로그인 여부
  isLogin: false,
  // 로그인 사용자 키값
  key: undefined,
  // SNS 로그인 여부?종류? (TODO ...)
  sns: undefined,
  // 개인 P, 사업자 B
  type: undefined
}

export const user = createSlice({
  name: 'user',
  initialState: Object.assign({}, m),
  reducers: {
    login(state, action) {
      console.log('login', action)
      state.isLogin = true
      // TODO ...
      state.key = action.payload.key
      state.sns = action.payload.sns
      state.type = action.payload.type
      return state
    },
    logout(state) {
      console.log('logout', state)
      return Object.assign(state, m)
    }
  }
})

export const {login, logout} = user.actions
export default user.reducer
