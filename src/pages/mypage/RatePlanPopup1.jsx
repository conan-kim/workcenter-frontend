import {useState} from 'react'
import Modal from '@/components/modal/index'

export function RatePlanPopup1() {
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
        상품요금제취소 팝업
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
                사용 중인 상품 요금제 취소 신청을 하시겠습니까?
              </p>
              <p className="regular-text">
                취소신청을 하시면 사용 중인 요금제는 더 이상 사용할 수 없으며, 해당 요금제에 남아 있는 크레딧은 자동 소멸됩니다.
              </p>
              <div className="gray-box">
                <ul className="item-list">
                  <li className="item">
                    <span class="left">사용 중인 요금제</span>
                    <span class="right">베이직</span>
                  </li>
                  <li className="item">
                    <span class="left">남은 사용기간</span>
                    <span class="right">87일</span>
                  </li>
                  <li className="item">
                    <span class="left">결제 금액 (부가세 포함)</span>
                    <span class="right">33,000원</span>
                  </li>
                </ul>
              </div>
              {/* 20230615 type1 클래스명 추가 */}
              <div className="line-box type1">
                <div className="cradit-top">
                  <p className="cradit-tit"><strong>크레딧 내역</strong></p>
                </div>
                <ul className="list-item">
                  <li className="item">
                    <div className="cradit-total">
                      <strong>총 지급 크레딧</strong>
                      <em>60,000</em>
                    </div>
                    <ul className="cradit-details">
                      <li className="cradit-details-item">
                        <span className="left-bottom-box">결제</span>
                        <span>30,000</span>
                      </li>
                      <li className="cradit-details-item">
                        <span className="left-bottom-box">보너스</span>
                        <span>30,000</span>
                      </li>
                    </ul>
                  </li>
                  <li className="item">
                    <span>사용 크레딧</span>
                    <span>- 20,000</span>
                  </li>
                  <li className="item">
                    <strong>환불 가능 크레딧</strong>
                    <em>10,000</em>
                  </li>
                </ul>
              </div>
              <div className="line-box">
                <div className="payback-cost">
                  <strong>환불 예정 금액</strong>
                  <em>11,000원</em>
                </div>
              </div>
              <div className="notice-area">
                <dl>
                  <dt className="notice-title">상품 요금제 취소하기 유의사항</dt>
                  <dd>
                    <ul className="notice-list">
                      <li className="notice-list-item">∙ 플루닛 요금제 결제 시 지급된 보너스 크레딧은 취소신청 시 자동 소멸됩니다. </li>
                      <li className="notice-list-item">∙ 결제방식에 따라 최대 3일정도 소요될 수 있습니다.</li>
                      <li className="notice-list-item">∙ 취소 요청이 거절될 경우, 고객센터로 별도 문의주시기 바랍니다.</li>
                    </ul>
                  </dd>
                </dl>
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
              취소
            </button>
            <button
              className='button brown'
              onClick={() => {
                setOpen(false)
              }}
              type="button"
            >
              취소신청하기
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
    </>
  )
}
