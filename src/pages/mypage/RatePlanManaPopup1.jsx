import {useState} from 'react'
import Modal from '@/components/modal/index'

export function RatePlanManaPopup1() {
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
        구독요금제취소 팝업
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup medium"
      >
        <Modal.Content>
        <div className="popup-contents">
            <div className="product-cancel">
              <p className="bold-text-1">
                사용 중인 구독 요금제 해지 신청을 하시겠습니까?
              </p>
              <p className="regular-text">
              해지신청을 하시면 익월 결제일인 <strong class="bold">2023.05. 01</strong> 에 구독이 해지되며, 해당 날짜까지 요금제를 사용하실 수 있습니다.
              </p>
              <div className="gray-box">
                <ul className="item-list">
                  <li className="item">
                    <span class="left">사용 중인 요금제</span>
                    <span class="right">베이직 플러스</span>
                  </li>
                  <li className="item">
                    <span class="left">남은 사용기간</span>
                    <span class="right">6개월 23일</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
          <button
              className='button bd-brown'
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
            >
              유지하기
            </button>
            <button
              className='button brown'
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
            >
              해지신청하기
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
    </>
  )
}
