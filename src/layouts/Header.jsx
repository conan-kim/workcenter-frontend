import {useState} from 'react'
import {Link, useHref, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '@/reducer/user'
import {LoginLayer} from '@/pages/auth/LoginLayer'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const uri = useHref()
  const {isLogin} = useSelector((state) => state.user)

  // 로그인 레이어 상태관리
  const [openLoginLayer, setOpenLoginLayer] = useState(false)

  // 로그아웃
  const fnLogout = (e) => {
    console.log('logout')
    e.preventDefault()
    // TODO ...

    navigate('/')
    dispatch(logout())
  }

  return (
    <>
      <header
        className="header"
        style={
          uri === '/guide' ? {backgroundColor: 'rgba(96, 82, 73, .08)', borderBottomColor: 'rgb(243 242 241)'} : {}
        }
      >
        <div className="inner-wrap">
          <div className="header-wrap">
            <h1 className="header-logo">
              <Link to="/" className="logo-link">
                <img src="/assets/images/logo/img-work-center-logo.png" alt="WORK CENTER LOGO" />
              </Link>
            </h1>
            <div className="nav-container">
              <nav>
                <ul className="nav-list">
                  <li className="nav-menu">
                    <Link to="/" className="link">
                      홈
                    </Link>
                  </li>
                  <li className="nav-menu">
                    <Link to="/guide" className="link">
                      이용가이드
                    </Link>
                  </li>
                  <li className="nav-menu">
                    <Link to="/ai-service" className="link">
                      손비서
                    </Link>
                  </li>
                  <li className="nav-menu">
                    <Link to="/service-plan" className="link">
                      서비스플랜
                    </Link>
                  </li>
                  <li className="nav-menu">
                    <Link to="notice" className="link">
                      공지사항
                    </Link>
                  </li>
                  <li className="nav-menu">
                    <Link to="inquiry" className="link">
                      제휴문의
                    </Link>
                  </li>
                </ul>
              </nav>
              
              <div className="btn-nav">
                <Link to="/quick-start-step1" className="link">
                  무료시작하기
                </Link>
              </div>
            </div>
            <div className="user-menu-container">
              <ul className="user-menu-list">
                {/* 로그인 & 로그아웃 */}
                {isLogin ? (
                  <>
                    <li className="user-menu">
                      <Link to="/mypage">마이페이지</Link>
                    </li>
                    <li className="user-menu font-normal">
                      <a onClick={fnLogout}>로그아웃</a>
                    </li>
                  </>
                ) : (
                  <li className="user-menu">
                    <a onClick={() => setOpenLoginLayer(!openLoginLayer)}>로그인</a>
                  </li>
                )}
                <li className="user-menu work-link">
                  <Link href="#" className="link-box">
                    워크플레이스
                  </Link>
                  <div className="user-menu-tooltip">
                      <p className="text">
                        <span className="text-block">상담 관리와 상담서비스는</span>워크플레이스에서 사용하실 수
                        있습니다.
                      </p>
                      {/* 20230626 btn-close 클래스 추가 */}
                      <a className="btn-close">
                        <span className="blind">닫기</span>
                      </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <LoginLayer open={openLoginLayer} handleLayer={setOpenLoginLayer} />
    </>
  )
}

export default Header
