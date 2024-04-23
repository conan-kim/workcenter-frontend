import {useState} from 'react'
import Modal from '@/components/modal/index'

export function CorporatePopup2() {
  const [open, setOpen] = useState(false)

  const onOpenCallback = () => {
    console.log('open modal!')
  }
  const onCloseCallback = () => {
    console.log('close modal!')
  }
  return (
    <>
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen((prev) => !prev)}>
        기가입계정있음 팝업
      </button>
      <Modal isOpen={open} onOpenChange={setOpen} className="popup small">
        <Modal.Content>
          <div className="popup-contents alert">
            <p class="bold-text">이미 가입된 계정이 있습니다.</p>
            <p class="desc-text">
              이미 가입된 회원 아이디가 있습니다.
              <br />
              &#40;<span>plo****@naver.com</span>&#41;
              <br />
              로그인 페이지로 이동하시겠습니까?
            </p>
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
            >
              확인
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
    </>
  )
}
