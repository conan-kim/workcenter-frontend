import {useState} from 'react'
import Modal from '@/components/modal/index'

export function MyWithdrawalPopup4() {
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
        회원탈퇴 처리중 팝업 (완료)
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup small"
      >
        <Modal.Content>
          <div className="popup-contents alert">
            <p class="bold-text">탈퇴 요청이 처리중입니다.</p>
            <p class="desc-text">
              회원님의 탈퇴 요청이 처리중이어서 로그인이 제한됩 <br />
              니다. 담당자가 승인을 완료하면 최종적으로 탈퇴가 <br />
              이루어집니다.
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
