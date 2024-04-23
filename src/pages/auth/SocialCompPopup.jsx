import {useState} from 'react'
import Modal from '@/components/modal/index'

export function SocialCompPopup() {
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
        소셜계정 연동 팝업
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup small"
      >
        <Modal.Content>
          <div className="popup-contents alert">
            <p class="bold-text">소셜 계정 연동이 완료되었습니다.</p>
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
