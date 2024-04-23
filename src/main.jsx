import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from '@/router'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import store from '@/store'

import '@/assets/scss/main.scss'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
