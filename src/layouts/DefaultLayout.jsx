import {Outlet} from 'react-router-dom'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
