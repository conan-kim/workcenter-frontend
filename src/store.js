import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
// FIXME ... storage (local)
import storage from 'redux-persist/lib/storage'
// FIXME ... storage (session)
//import storage from 'redux-persist/lib/storage/session'
// reducers
import user from '@/reducer/user'

export const store = configureStore({
  reducer: persistReducer(
    // persist config
    {
      key: 'root',
      version: 1,
      storage,
    },
    // reducers
    combineReducers({
      user: user
    })
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export default store
