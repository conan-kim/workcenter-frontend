import {useState} from 'react'

export function MyInquiryWrite() {
  // select option 박스
  const [selectLabel, setSelectLabel] = useState('문의 유형 선택')
  const [selectList, setSelectList] = useState(['회원', '메타휴먼', '결제/환불', '장애/오류', '개선제안', '기타'])
  const [showSelect, setShowSelect] = useState(false)

  const toggleSelect = () => setShowSelect((prev) => !prev)
  const changeLabel = (e) => {
    const {innerText} = e.target
    setSelectLabel(innerText)
    setShowSelect(false)
  }

  return (
    <>
      <div className="inquiry-title-box">
        <h3 className="title">문의글 남기기</h3>
        <p className="inqu-title-text">상담내용은 한번 등록하면 수정이 불가합니다.</p>
      </div>
      <section className="modify-box inquiry-page">
        {/* 20230615 title-align 클래스명 추가 */}
        <div className="myinfo-box _member_info title-align">
          <div>
            <div className="info-block">
              <div className="info-title">이름</div>
              <div className="info-cont">이수정</div>
            </div>
            <div className="info-block">
              <div className="info-title">아이디(이메일)</div>
              <div className="info-cont">sujeong.lee@gmail.com</div>
            </div>
            <div className="info-block">
              <div className="info-title">휴대폰 번호</div>
              <div className="info-cont">010-1234-4567</div>
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
            <div className="info-block exception">
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
            <div className="info-block exception">
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
            <div className="info-block">
              <div className="info-title">답변전송알림</div>
              <div className="info-cont">
                <div className="subcheckbox">
                  <label className="ruletext">
                    <input className="check" type="checkbox" />
                    <span className="checkbox-title">문자 (010-1234-5678)</span>
                  </label>
                  <label className="ruletext">
                    <input className="check" type="checkbox" />
                    <span className="checkbox-title">이메일 (sujeong.lee@gmail.com)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrap">
          <button type="button" className="button modi-black">
            나가기
          </button>
          <button type="button" className="button modi-brown">
            문의하기
          </button>
        </div>
      </section>
    </>
  )
}

export default MyInquiryWrite
