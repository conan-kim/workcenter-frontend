import {useState} from 'react'
import Modal from '@/components/modal/index'

export function LoginPopup1() {
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
        SNS미연결유저_SNS로그인시 팝업
      </button>
      <Modal isOpen={open} onOpenChange={setOpen} className="popup small">
        <Modal.Content>
          <div className="popup-contents alert">
            <p class="bold-text">
              SNS 간편 로그인은 통합회원<br />
              가입 후 이용 가능합니다.
            </p>
            <p class="desc-text">
              마이페이지 &gt; 내 정보 &gt; SNS 로그인 연동
            </p>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
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
