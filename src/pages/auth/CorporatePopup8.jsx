import {useState} from 'react'
import Modal from '@/components/modal/index'

export function CorporatePopup8() {
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
      워크센터 둘러보기
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup video-pop"
      >
        <Modal.Content>
          
          <button className="close-btn" onClick={() => setOpen((prev) => !prev)}>팝업 닫기</button>
          <div className="video-wrap">
            <video controls>
              <source src="/assets/video/231030_Workcenter_v1.mp4" type="video/mp4" />
            </video>
          </div>
        </Modal.Content>
      </Modal>
    </>
  )
}
