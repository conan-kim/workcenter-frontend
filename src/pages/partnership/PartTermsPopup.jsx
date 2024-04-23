import {useState} from 'react'
import Modal from '@/components/modal/index'

export function PartTermsPopup() {
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
        개인정보 수집 및 이용 동의 팝업
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup medium"
      >
        <Modal.Content>
          <div className="popup-header">
            <h2 className='popup-title'>개인정보 수집 및 이용 동의</h2>
          </div>
          <div className="popup-contents scroll">
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>
            <p className="agreement-reject-text">위 정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 제휴 문의가 제한될 수 있습니다.</p>
            <ol className="agreement-order-list">
              <li className="agreement-order-item">1. 목적 : 제휴 문의에 따른 연락처 정보 확인</li>
              <li className="agreement-order-item">2. 항목 : 이름, 연락처, 이메일</li>
              <li className="agreement-order-item">3. 보유기간 : 제휴 가능성 판단을 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</li>
            </ol>

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
