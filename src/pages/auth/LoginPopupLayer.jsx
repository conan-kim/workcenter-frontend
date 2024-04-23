import {useState} from 'react'

export function LoginPopupLayer() {
  const [open, setOpen] = useState(false)

  const loginLayerToggle = () => {
    setOpen(!open)
  }

  const loginLayerClose = () => {
    setOpen(false)
  }

  const layerClass = open ? 'popup login-layer open' : 'popup login-layer'

  // 비밀번호 눈
  const [pwType, setpwType] = useState({
    type: 'password',
    visible: false
  })
  const handlePasswordType = () => {
    setpwType(() => {
      if (!pwType.visible) {
        return {type: 'text', visible: true}
      } else {
        return {type: 'password', visible: false}
      }
    })
  }

  return (
    <>
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={loginLayerToggle}>
        로그인 팝업 레이어
      </button>
      <div className={layerClass}>
        <div className="popup-contents login">
          <h2 className="login-title">LOGIN</h2>
          <div className="form-area">
            <div className="form-box">
              <div className="field-form">
                <div className="cont-line">
                  <div className="field clear">
                    <input type="text" placeholder="아이디를 입력해 주세요." value="ploonet@ploonet.com" />
                    <button type="button" className="btn-clear">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              {/* 에러일경우 error 클래스 추가 */}
              <div className="field-form">
                <div className="cont-line">
                  <div className="field clear add">
                    <input type="text" placeholder="비밀번호를 입력해 주세요." value="12341234" />
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
                      <button type="button" className="btn-clear">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
                <p className="error-message">형식이 맞지 않습니다.</p>
              </div>
            </div>
            <button type="button" className="login-button">
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
              <a href="#" className="login-find-email">
                아이디(이메일) 찾기
              </a>
              <a href="#" className="login-find-password">
                비밀번호 찾기
              </a>
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
              <a className="login-more-info" href="#">
                플루닛 통합서비스 안내 자세히보기
              </a>
            </div>
            <button type="button" className="button bd-brown login-bottom-button">
              통합회원가입
            </button>
          </div>
        </div>
        <button type="button" className="login-close-layer" onClick={loginLayerClose}>
          닫기
        </button>
      </div>
    </>
  )
}
