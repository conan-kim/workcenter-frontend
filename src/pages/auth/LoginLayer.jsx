import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login} from '@/reducer/user'
import classNames from 'classnames'

export function LoginLayer({open, handleLayer}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // 아이디, 비밀번호
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  // 비밀번호 눈 아이콘
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false
  })
  const handlePasswordType = () => {
    setPwType(() => {
      if (!pwType.visible) {
        return {type: 'text', visible: true}
      } else {
        return {type: 'password', visible: false}
      }
    })
  }

  // 로그인
  const fnLogin = () => {
    console.log('login')
    // TODO ...

    // 로그인 처리 후 redux 사용자 구성 (@/reducer/user.jsx)
    /*
     * 테스트를 위해 ID 에 회원 구분
     * - ptest : 개인 - SNS
     * - btest : 사업자
     * - 그 외 : 개인 - 이메일
     */
    const payload = {
      key: 'test', // 사용자키
      sns: id === 'ptest' ? true : false, // false 이메일, true SNS (사업자는 이메일만 존재?)
      type: id === 'btest' ? 'B' : 'P' // P 개인, B 사업자
    }

    handleLayer(false)
    dispatch(login(payload))
  }

  // 열기/닫기 시 초기화
  useEffect(() => {
    setId('')
    setPw('')
    setPwType({type: 'password', visible: false})
  }, [open])

  return (
    <div className={classNames('popup', 'login-layer', {open: open})}>
      <div className="popup-contents login">
        <h2 className="login-title">LOGIN</h2>
        <div className="form-area">
          <div className="form-box">
            <div className="field-form">
              <div className="cont-line">
                <div className="field clear">
                  <input
                    type="text"
                    placeholder="아이디를 입력해 주세요."
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <button type="button" className="btn-clear" onClick={() => setId('')}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
            {/* 에러일경우 error 클래스 추가 */}
            <div className="field-form">
              <div className="cont-line">
                <div className="field clear add">
                  <input
                    type={pwType.type}
                    placeholder="비밀번호를 입력해 주세요."
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                  />
                  <div className="input-button-wrap">
                    <button type="button" className="btn-eyes">
                      <span onClick={handlePasswordType}>
                        {pwType.visible ? (
                          <span className="show">
                            <div className="icon">
                              <div className="img"></div>
                            </div>
                          </span>
                        ) : (
                          <span className="hide">
                            <div className="icon">
                              <div className="img"></div>
                            </div>
                          </span>
                        )}
                      </span>
                    </button>
                    <button type="button" className="btn-clear" onClick={() => setPw('')}>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <p className="error-message">형식이 맞지 않습니다.</p>
            </div>
          </div>
          <button type="button" className="login-button" onClick={fnLogin}>
            로그인
          </button>
        </div>
        <div className="login-id-check">
          <div>
            <label className="ruletext">
              <input className="check" type="checkbox" />
              <span className="checkbox-title">아이디 저장</span>
            </label>
          </div>
          <div>
            <Link to="/auth/find-id" className="login-find-email" onClick={() => handleLayer(false)}>
              아이디(이메일) 찾기
            </Link>
            <Link to="/auth/find-pw" className="login-find-password" onClick={() => handleLayer(false)}>
              비밀번호 찾기
            </Link>
          </div>
        </div>
        <div className="sns-area">
          <div className="sns-area-text">SNS계정으로 간편 로그인</div>
          <div className="sns-link">
            <button type="button" className="login-kakao">
              카카오로 로그인
            </button>
            <button type="button" className="login-apple">
              애플로 로그인
            </button>
            <button type="button" className="login-naver">
              네이버로 로그인
            </button>
          </div>
        </div>
        <div className="login-bottom-area">
          <div>
            <p className="bottom-area-text">아직 플루닛 통합회원이 아니신가요?</p>
            <p className="bottom-area-text">통합회원이 되사면 다양한 서비스를 하나의 ID로 이용하실 수 있습니다.</p>
            <Link to="/auth/service-info" className="login-more-info" onClick={() => handleLayer(false)}>
              플루닛 통합서비스 안내 자세히보기
            </Link>
          </div>
          <button
            type="button"
            className="button bd-brown login-bottom-button"
            onClick={() => {
              handleLayer(false)
              navigate('/auth/join')
            }}
          >
            통합회원가입
          </button>
        </div>
      </div>
      <button type="button" className="login-close-layer" onClick={() => handleLayer(false)}>
        닫기
      </button>
    </div>
  )
}

export default LoginLayer
