import {useState} from 'react'
import Modal from '@/components/modal/index'

export function QuickStartPopup1() {
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
        무료체험하기 팝업
      </button>
      <Modal isOpen={open} onOpenChange={setOpen} className="popup small">
        <Modal.Content>
          <div className="popup-contents alert">
            <p class="bold-text">
              워크센터를 정식 이용하시기 전에<br />
              무료체험 해보시겠어요?
            </p>
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
              아니요
            </button>
            <button
              className="button brown"
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
            >
              네, 해볼래요
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
    </>
  )
}
