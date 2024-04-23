import {useState} from 'react'
import Modal from '@/components/modal/index'

export function PaymentDetailPopup1() {
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
        결제상세정보 팝업
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup small"
      >
        <Modal.Content>
          <div className="popup-header">
            <h2 className='popup-title'>결제상세정보</h2>
          </div>
          <div className="popup-contents">
            <ul className="details-info-list payment">
              <li className="details-info-item">
                <span className="left bold-cost">33,000원</span>
                <span className="right">
                  <button className="button-receipt" type="button">전자영수증</button>
                </span>
              </li>
              <li className="details-info-item">
                <span className="left">요금제명</span>
                <span className="right">베이직 플러스</span>
              </li>
              <li className="details-info-item">
                <span className="left">요금제 금액</span>
                <span className="right">33,000원</span>
              </li>
              <li className="details-info-item">
                <span className="left">결제일시</span>
                <span className="right">2023. 04. 27</span>
              </li>
              <li className="details-info-item">
                <span className="left">결제수단</span>
                <span className="right">간편결제 (카카오페이)</span>
              </li>
            </ul>
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
