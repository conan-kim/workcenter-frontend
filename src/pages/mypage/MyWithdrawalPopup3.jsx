import {useState} from 'react'
import Modal from '@/components/modal/index'

export function MyWithdrawalPopup3() {
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
        회원탈퇴 팝업 (완료)
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup small"
      >
        <Modal.Content>
          <div className="popup-contents alert">
            <p class="bold-text">탈퇴신청이 완료되었습니다.</p>
            <p class="desc-text">
              회원탈퇴는 운영자 승인 후 처리되며, <br />
              탈퇴완료되면 고객님의 휴대폰번호와 <br />
              이메일로 안내 메세지를 발송해드립니다.
            </p>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className='button brown'
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
