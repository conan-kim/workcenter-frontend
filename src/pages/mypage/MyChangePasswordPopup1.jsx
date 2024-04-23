import {useState} from 'react'
import Modal from '@/components/modal/index'

export function MyChangePasswordPopup1() {
  const [open, setOpen] = useState(false)

  const onOpenCallback = () => {
    console.log('open modal!')
  }
  const onCloseCallback = () => {
    console.log('close modal!')
  }

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
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen((prev) => !prev)}>
        비밀번호 변경 팝업
      </button>
      <Modal isOpen={open} onOpenChange={setOpen} className="popup medium">
        <Modal.Content>
          <div className="popup-header">
            <h2 className="popup-title">비밀번호 변경</h2>
          </div>
          <div className="popup-contents popup-change-password">
            {/* 에러일경우 error 클래스 추가 */}
            <div className="field-form">
              <label className="title">현재 비밀번호</label>
              <div className="cont-line">
                <div className="field clear add">
                  <input type="text" placeholder="현재 비밀번호를 입력해주세요" />
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
                  <input type="text" placeholder="새로운 비밀번호를 입력해주세요" />
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
                  <input type="text" placeholder="새로운 비밀번호를 한번 더 입력해주세요" />
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
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button bd-brown"
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
            >
              취소
            </button>
            <button
              className="button brown"
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
              disabled
            >
              비밀번호 변경하기
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
    </>
  )
}
