import {useState} from 'react'
import Modal from '@/components/modal/index'

export function PaymentDetailPopup2() {
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
        취소상세정보 팝업 (결제취소 완료)
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup small"
      >
        <Modal.Content>
          <div className="popup-header">
            <h2 className='popup-title'>취소상세정보</h2>
          </div>
          <div className="popup-contents">
              <ul className="details-info-list cancel">
                <li className="details-info-item">
                  <span className="left bold-text">최초 결제 금액</span>
                  <span className="right bold-cost">33,000원</span>
                </li>
                <li className="details-info-item">
                  <span className="left">결제수단</span>
                  <span className="right">신용카드</span>
                </li>
              </ul>
              <ul className="details-info-list cancel">
                <li className="details-info-item">
                  <span className="left">요금제명</span>
                  <span className="right">베이직 플러스</span>
                </li>
                <li className="details-info-item">
                  <span className="left">결제 크레딧</span>
                  <span className="right">30,000</span>
                </li>
                <li className="details-info-item">
                  <span className="left">사용 크레딧</span>
                  <span className="right">- 20,000</span>
                </li>
              </ul>
              <ul className="details-info-list cancel">
                <li className="details-info-item">
                  <span className="left bold-text">환불 금액</span>
                  <span className="right bold-cost">
                    11,000원
                    <span className="desc-text">부가세 포함</span>
                  </span>
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
