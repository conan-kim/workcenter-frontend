import { useState } from 'react'
import Modal from '@/components/modal/index'

export function Inquiry() {
  // select option 박스
  const [selectLabel, setSelectLabel] = useState('문의 유형 선택')
  const [selectList, setSelectList] = useState(['회원', '메타휴먼', '결제/환불', '장애/오류', '개선제안', '기타'])
  const [showSelect, setShowSelect] = useState(false)
  // 개인정보이용동의 모달
  const [isOpenRuleModal, setIsOpenRuleModal] = useState(false);
  const [isCheckedAgree, setIsCheckedAgree] = useState(false);
  const toggleSelect = () => setShowSelect((prev) => !prev)
  const changeLabel = (e) => {
    const { innerText } = e.target
    setSelectLabel(innerText)
    setShowSelect(false)
  }
  /* 텍스트 리셋 */
  const onchange = (e) => {
    setText(e.target.value)
  }
  const onReset = () => {
    setText('')
  }
  return (<>
    <div className='body-container mypage inquiry'>
      <div className="wrap">
        <div className='contents'>
          <div className="inquiry-title-box">
            <h3 className="title">제휴문의</h3>
            <p className="inqu-title-text">워크센터에 대해 궁금하신 점을 남겨주시면 답변드릴게요.</p>
          </div>
          <section className="modify-box inquiry-page">
            <div className="myinfo-box _member_info title-align">
              <div>
                <div className="info-block">
                  <div className="info-title">
                    <label className="title">
                      이름
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                  </div>
                  <div className="info-cont">
                    <div className="field-form">
                      <div className="cont-line">
                        <div className="field clear">
                          <input type="text" placeholder="이름을 입력해주세요" maxLength={100} />
                          <button type="button" className="btn-clear">
                            Reset
                          </button>
                        </div>
                      </div>
                      <p className="success-message"></p>
                      <p className="error-message">필수값 입니다.</p>
                    </div>
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-title">
                    <label className="title">
                      휴대폰 번호
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                  </div>
                  <div className="info-cont">
                    <div className="field-form">
                      <div className="cont-line">
                        <div className="field clear">
                          <input type="text" placeholder="이름을 입력해주세요" maxLength={100} />
                          <button type="button" className="btn-clear">
                            Reset
                          </button>
                        </div>
                      </div>
                      <p className="success-message"></p>
                      <p className="error-message">형식이 맞지 않습니다.</p>
                    </div>
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-title">
                    <label className="title">
                      문의유형
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                  </div>
                  <div className="info-cont">
                    <div className="select-box">
                      <button type="button" onClick={toggleSelect} className="label">
                        {selectLabel}
                      </button>
                      {showSelect && (
                        <ul className="option">
                          {selectList.map((item) => (
                            <li onClick={changeLabel} key={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-title">
                    <label className="title">
                      제목
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                  </div>
                  <div className="info-cont">
                    <div className="field-form">
                      <div className="cont-line">
                        <div className="field clear">
                          <input type="text" placeholder="제목을 입력해주세요" maxLength={100} />
                          <button type="button" className="btn-clear">
                            Reset
                          </button>
                        </div>
                      </div>
                      <p className="success-message">사용할 수 있는 아이디 입니다.</p>
                      <p className="error-message">형식이 맞지 않습니다.</p>
                    </div>
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-title">
                    <label className="title">
                      문의내용
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                  </div>
                  <div className="info-cont">
                    <div className="field_form">
                      <div className="cont_line">
                        <div className="field">
                          <textarea
                            className="mCustomScrollbar"
                            placeholder="문의하실 내용을 입력해 주세요. *기재 시 주민등록번호 등 개인정보가 포함되지 않도록 유의하시기 바랍니다."
                            maxLength={1500}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-block">
                  <div className="info-title">
                    <label className="title">첨부파일</label>
                  </div>
                  <div className="info-cont">
                    <div className="field-form">
                      <div className="cont-line line">
                        <div className="field clear">
                          <input type="text" placeholder="첨부파일을 선택해주세요" />
                        </div>
                        <div className="file-button-wrap">
                          <label htmlFor="fileUpload" className="checkbutton bd-brown">
                            파일선택
                          </label>
                          <input type="file" id="fileUpload" className="button-file" />
                        </div>
                      </div>
                      <p className="condition">
                        최대1개, 30MB 이하 / 파일지원형식: gif, jpg, png, pdf, mp4 파일만 등록 가능
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agree-privacy-rule">
                <label className="ruletext">
                  <input className="check" type="checkbox" checked={isCheckedAgree} onChange={()=>setIsCheckedAgree(!isCheckedAgree)} />
                  <span className="checkbox-title" onClick={()=>setIsOpenRuleModal(true)}>개인정보 수집 및 이용 동의에 동의합니다. &gt;</span>
                </label>
              </div>
            </div>
            <div className="button-wrap">
              <button type="button" className="button modi-black">
                취소
              </button>
              <button type="button" className="button modi-brown">
                문의하기
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Modal
        isOpen={isOpenRuleModal}
        onOpenChange={setIsOpenRuleModal}
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
                setIsOpenRuleModal(false)
                onCloseCallback()
              }}
              type="button"
            >
              확인
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
  </>)
}

export default Inquiry
