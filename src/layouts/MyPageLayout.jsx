import {Outlet} from 'react-router-dom'
import Lnb from '@/layouts/Lnb'

function MyPageLayout() {
  return (
    <main className="body-container mypage">
      <div className="wrap">
        <section className="lnb">
          <Lnb />
        </section>
        <section className="contents">
          <Outlet />
        </section>
      </div>
    </main>
  )
}

export default MyPageLayout
