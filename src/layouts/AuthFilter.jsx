import {Outlet, Navigate, useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function AuthFilter() {
  const {pathname} = useLocation()
  const {isLogin} = useSelector((state) => state.user)

  return !isLogin ? <Navigate to={'/auth/login?r=' + pathname} /> : <Outlet />
}
