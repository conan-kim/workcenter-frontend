import {useState} from 'react'
import Modal from '@/components/modal/index'


function DrawalInfoTextarea() {
  // const text = "고객정보 이용기록 / 결제내역 / 크레딧 내역 등\n개인정보에 관한 탈퇴정책 영역";
  const text = "∙ 회원탈퇴 시 플루닛 통합 회원에서 탈퇴되는 것으로, 플루닛 브랜드 사이트를 포함한 플루닛 스튜디오, 워크센터, 손비서 등 플루닛 관련 서비스를 이용하실 수 없습니다.\n∙ 탈퇴 후에 고객님의 모든 콘텐츠와 활동 기록, 크레딧 충전/적립/사용 내역이 모두 삭제되며, 삭제된 정보는 복구가 불가하오니 신중하게 결정해 주세요."

  return (
    <textarea cols="30" rows="10" placeholder="" disabled value={text} />
  );
}
export function MyWithdrawalPopup1() {
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
        회원탈퇴 팝업
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup medium"
      >
        <Modal.Content>
          <div className="popup-header">
            <h2 className='popup-title'>회원 탈퇴</h2>
          </div>
          <div className="popup-contents">
            <div className="drawal-reason">
              <p className="bold-text-1">정말 회원탈퇴를 하시겠어요?</p>
              <p>어떤 점이 불편해서 탈퇴를 결심하셨는지 이유를 알려주세요.</p>
            </div>
            <div className="drawal-form">
              <div className="select-box">
                <button className="label">탈퇴 사유를 선택해주세요</button>
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
            <div className="drawal-info">
              <p className="bold-text-1">플루닛을 떠나기 전, 안내 사항을 꼭 확인해주세요!</p>
              <p className="regular-text">탈퇴 후에 고객님의 모든 콘텐츠와 활동 기록, 크레딧 충전/적립/사용 내역이 모두 삭제되며, 삭제된 정보는 복구가 불가하오니 신중하게 결정해 주세요.</p>
            </div>
            <div className="textarea-wrap">
              <DrawalInfoTextarea/>
            </div>
            <div>
              <label className="ruletext">
                <input className="check" type="checkbox" />
                <span className="checkbox-title">안내사항을 모두 확인하였으며, 이에 동의합니다.</span>
              </label>
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
                onCloseCallback()
                
              }}
              type="button"
              disabled
            >
              탈퇴신청
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
    </>
  )
}
