import {useState} from 'react'

export function MyInfoPasswordEmail({handlePass}) {
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

  // 비밀번호 확인
  const fnConfirm = () => {
    // TODO ...

    // 처리 후 성공이면 handlePass 호출
    handlePass()
  }

  return (
    <>
      {/* 비밀번호확인-이메일가입자(개인기업) */}
      <section className="contents">
        <div className="contents-wrap myinfo">
          <div className="contents-section small">
            <div className="box-wrap">
              <div className="box-layer">
                <div className="box-top">
                  <h2 className="title1">비밀번호 재확인</h2>
                  <p className="box-info-txt">
                    고객님의 개인정보를 안전하게 보호하기 위해
                    <br />
                    비밀번호를 다시 확인합니다.
                  </p>
                </div>
                <div className="box-cont">
                  <div className="content auth-form pdt-0">
                    <div className="cont-area">
                      {/* error 클래스 추가 시 error-message 활성화 */}
                      <div className="field-form">
                        <div className="cont-line">
                          <div className="field clear add">
                            <input type={pwType.type} placeholder="비밀번호를 입력해 주세요." onChange={onchange} />
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
                        <p className="error-message">비밀번호가 일치하지 않습니다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="button-wrap">
                    {/* 비활성화 하려면 disabled 추가 */}
                    <button type="button" className="button brown" onClick={fnConfirm}>
                      확인
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyInfoPasswordEmail
