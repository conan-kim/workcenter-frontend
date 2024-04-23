import {Outlet} from 'react-router-dom'

function PageLayout() {
  return (
    <main className="body-container">
      <div className="wrap">
        <Outlet />
      </div>
    </main>
  )
}

export default PageLayout
