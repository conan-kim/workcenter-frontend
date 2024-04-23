import {useState} from 'react'

export function ChangePassword() {
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
    <section className="contents">
      <div className="contents-wrap">
        <div className="contents-section small change-password-info">
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-top border-bottom">
                <h2 className="title1">비밀번호 변경 안내</h2>
                <p className="box-info-txt">새로운 비밀번호로 소중한 개인정보를 보호해 주세요.</p>
                <p className="box-info-txt">안전한 개인정보를 위해 90일 주기로 비밀번호 변경 안내를 드립니다.</p>
              </div>
              <div className="box-cont">
                {/* 에러일경우 error 클래스 추가 */}
                <div className="field-form">
                  <label className="title">현재 비밀번호</label>
                  <div className="cont-line">
                    <div className="field clear add">
                      <input type={pwType.type} placeholder="현재 비밀번호를 입력해주세요" />
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
                  <p className="error-message">현재 비밀번호가 잘못 입력 되었습니다.</p>
                </div>
                {/* 에러일경우 error 클래스 추가 */}
                <div className="field-form">
                  <label className="title">새 비밀번호</label>
                  <div className="cont-line">
                    <div className="field clear add">
                      <input type={pwType.type} placeholder="새로운 비밀번호를 입력해주세요" />
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
                  <p className="condition">영문, 숫자, 특수문자( !, @, $, ^, *, -, -)를 혼합하여 8~16자로 사용</p>
                  <p className="error-message">비밀번호를 확인해 주세요.</p>
                </div>
                {/* 성공일경우 success 클래스 추가, 에러일경우 error 클래스 추가 */}
                <div className="field-form">
                  <label className="title">새 비밀번호 확인</label>
                  <div className="cont-line">
                    <div className="field clear add">
                      <input type={pwType.type} placeholder="새로운 비밀번호를 한번 더 입력해주세요" />
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
                  <p className="success-message">새 비밀번호가 일치합니다.</p>
                  <p className="error-message">새 비밀번호가 일치하지 않습니다.</p>
                </div>
                <div className="button-wrap">
                  <button className="button bd-brown">90일간 보지않기</button>
                  <button className="button brown" disabled>
                    비밀번호 변경하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
