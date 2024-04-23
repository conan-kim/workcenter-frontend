import {useState} from 'react'
import Modal from '@/components/modal/index'

export function RatePlanManaPopup3() {
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
        구독요금제취소 팝업(완료)
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup small"
      >
        <Modal.Content>
          <div className="popup-contents alert">
            <p className="bold-text">해지 신청이 완료되었습니다.</p>
            <p className="desc-text">요금제는 <strong className="bold">2023. 04. 31</strong> 까지 이용하실 수 있습니다.</p>
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
