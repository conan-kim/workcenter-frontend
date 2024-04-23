import {useState} from 'react'
import Modal from '@/components/modal/index'

export function RatePlanManaPopup2() {
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
        구독요금제취소 팝업(사유)
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
                구독 요금제를 해지하시는 이유를 알려주세요.
              </p>
              <p className="regular-text">
                설문에 응답해주시면 더 좋은 서비스를 만드는데 도움이 됩니다.
              </p>
              <div>
                <div className="select-box">
                  <button className="label">해지 사유를 선택해주세요</button>
                  {/* <ul className="option">
                    <span className="line"></span>
                    <li>
                      <a href="javascript:;" data-value="Service 전체">
                        전체
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-value="A Service">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-value="B Service">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-value="C Service">
                        3
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-value="가 Service">
                        4
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-value="나 Service">
                        5
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-value="다 Service">
                        6
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" data-value="라 Service">
                        7
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="field_form">
                  <div className="cont_line">
                    <div className="field">
                      <textarea className="mCustomScrollbar" placeholder="이 외 불편하셨던 점이 있으면 알려주세요. (선택)"></textarea>
                    </div>
                  </div>
                </div>
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
