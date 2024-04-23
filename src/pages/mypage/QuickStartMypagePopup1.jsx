import {useState} from 'react'
import Modal from '@/components/modal/index'

export function QuickStartMypagePopup1() {
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
        사업자등록번호 등록 팝업
      </button>
      <Modal isOpen={open} onOpenChange={setOpen} className="popup medium">
        <Modal.Content>
          <div className="popup-header">
            <h2 className="popup-title">사업자 등록증에 기재된 회사 정보를 입력해주세요.</h2>
          </div>
          <div className="popup-contents popup-change-password">
            {/* 에러일경우 error 클래스 추가 */}
            <div className="field-form">
              <label className="title">사업자등록번호</label>
              <div className="cont-line">
                <div className="field clear add">
                  <input type="text" placeholder="’-’없이 10자리를 입력해주세요" />
                  <div className="input-button-wrap">
                    <button type="button" className="btn-clear">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <p className="error-message">숫자만 10자 입력해주세요.</p>
            </div>
            {/* 에러일경우 error 클래스 추가 */}
            <div className="field-form">
              <label className="title">개업일자</label>
              <div className="cont-line">
                <div className="field clear add">
                  <input type="text" placeholder="’-’없이 8자리를 입력해주세요" />
                  <div className="input-button-wrap">
                    <button type="button" className="btn-clear">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <p className="error-message">숫자만 10자 입력해주세요.</p>
            </div>
            {/* 성공일경우 success 클래스 추가, 에러일경우 error 클래스 추가 */}
            <div className="field-form">
              <label className="title">대표자명</label>
              <div className="cont-line">
                <div className="field clear add">
                  <input type="text" placeholder="대표자명을 입력해주세요" />
                  <div className="input-button-wrap">
                    <button type="button" className="btn-clear">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <p className="error-message"></p>
            </div>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button bd-brown btn-small"
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
            >
              확인
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
    </>
  )
}
