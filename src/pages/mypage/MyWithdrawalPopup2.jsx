import {useState} from 'react'
import Modal from '@/components/modal/index'

export function MyWithdrawalPopup2() {
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
        회원탈퇴 팝업 (이용중 요금제)
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup small"
      >
        <Modal.Content>
          <div className="popup-contents">
            <div className="drawal-cradit">
              <p className="bold-text-1">이용중인 요금제와 <br /> 크레딧이 남아 있습니다.</p>
              <p className="regular-text">요금제 취소 또는 해지 후 탈퇴가 가능합니다.</p>
              <p className="regular-text">
                단, 상품요금제는 취소기간이 지났을 경우 <br />
                크레딧을 모두 소진하거나 유효기간(3개월)이후에 <br />
                탈퇴신청이 가능합니다.
              </p>
              <div className="gray-box">
                <ul className="item-list">
                  <li className="item">
                    <span>지급 크레딧</span>
                    <span>60,000</span>
                  </li>
                  <li className="item">
                    <span>사용 크레딧</span>
                    <span>- 30,000</span>
                  </li>
                  <li className="item">
                    <span className="bold">남은 크레딧</span>
                    <span className="bold">30,000</span>
                  </li>
                </ul>
              </div>
            </div>
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
