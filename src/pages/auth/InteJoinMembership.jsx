import {useState} from 'react'

export function InteJoinMembership() {
  // Tab 이벤트
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  // 개인으로 가입
  const [validIndividual, isValidIndividual] = useState(true)

  const fnPhoneAuthentication = () => {
    console.log('fnPhoneAuthentication')
  }

  // 기업으로 가입
  const [validCorporate, isValidCorporate] = useState(true)

  const fnNextCorporate = () => {
    console.log('fnNextCorporate')
  }

  return (
    <section className="contents">
      <div className="contents-wrap">
        <div className="contents-section medium">
          <div className="title-text-box">
            <h2 className="title1 lh-n">플루닛 통합회원가입</h2>
            <p className="description-text">
              플루닛 통합회원이 되시면 다양한 서비스를 하나의 ID로 이용하실 수 있습니다.
              <br />* 만 14세 이상만 가입 가능합니다.
            </p>
          </div>
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-cont">
                <div className="tab-wrap ico-tab">
                  <div className="tab-header">
                    <div className="tabs">
                      <button
                        type="button"
                        className={`tab-menu ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => handleTabClick(0)}
                      >
                        <span className="ico ico-personal"></span>
                        <span className="text">개인으로 가입</span>
                      </button>
                      <button
                        type="button"
                        className={`tab-menu ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                      >
                        <span className="ico ico-corporate"></span>
                        <span className="text">기업으로 가입</span>
                      </button>
                    </div>
                  </div>
                  <div className="tab-body auth-page">
                    {/* 개인으로 가입 */}
                    <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
                      <ul className="certification-info">
                        <li>∙ 휴대폰 본인인증 후 회원정보 입력이 가능합니다.</li>
                        <li>∙ 외국인(국내거주)은 외국인등록번호로 본인인증이 가능합니다.</li>
                      </ul>
                      <div className="agreeBox">
                        <div className="agreeAllBtn">
                          <label className="agreeAll">
                            <input className="check" type="checkbox" />
                            모든 약관에 동의합니다.
                          </label>
                        </div>
                        <div className="rulebox">
                          <label className="ruletext">
                            <input className="check" type="checkbox" />
                            <span className="textpoint">필수</span>
                            <span className="checkbox-title">통합서비스 이용약관 동의</span>
                          </label>
                          <a href="#" className="arrow right">
                            <span className="hide-text">자세히 보기</span>
                          </a>
                        </div>
                        <div className="rulebox">
                          <label className="ruletext">
                            <input className="check" type="checkbox" />
                            <span className="textpoint">필수</span>
                            <span className="checkbox-title">개인정보 수집∙이용 동의</span>
                          </label>
                          <a href="#" className="arrow right">
                            <span className="hide-text">자세히 보기</span>
                          </a>
                        </div>
                        <div className="rulebox">
                          <label className="ruletext">
                            <input className="check" type="checkbox" />
                            <span className="textpoint select">선택</span>
                            <span className="checkbox-title">광고성 정보 수신 및 마케팅 활용 동의</span>
                          </label>
                          <a href="#" className="arrow right">
                            <span className="hide-text">자세히 보기</span>
                          </a>
                          <div className="subcheckbox">
                            <label className="subselection">
                              <input className="check" type="checkbox" />
                              <span className="checkbox-title">SMS</span>
                            </label>
                            <label className="subselection">
                              <input className="check" type="checkbox" />
                              <span className="checkbox-title">E-mail</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="button-wrap">
                        <button
                          type="button"
                          className="button bd-brown"
                          disabled={!validIndividual}
                          onClick={fnPhoneAuthentication}
                        >
                          휴대폰 본인인증
                        </button>
                      </div>
                    </div>
                    {/* 기업으로 가입 */}
                    <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
                      <ul className="certification-info">
                        <li>∙ 이메일 인증 후 회원정보 입력이 가능합니다.</li>
                        <li>∙ 사업자등록번호 기준으로 한 개의 아이디만 가입 가능합니다.</li>
                      </ul>
                      <div className="content">
                        <div className="cont-area">
                          <div className="field-form">
                            <label className="title">
                              회사명
                              <sup className="important">
                                <span className="blind">필수항목</span>
                              </sup>
                            </label>
                            <div className="cont-line line">
                              <div className="field clear">
                                <input type="text" placeholder="회사명을 입력해주세요" />
                                <button type="button" className="btn-clear">
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* 에러일경우 error 클래스 추가 */}
                          <div className="field-form">
                            <label className="title">
                              사업자등록번호
                              <sup className="important">
                                <span className="blind">필수항목</span>
                              </sup>
                            </label>
                            <div className="cont-line">
                              <div className="field clear">
                                <input type="text" placeholder="‘-‘없이 10자리를 입력해주세요" />
                                <button type="button" className="btn-clear">
                                  Reset
                                </button>
                              </div>
                            </div>
                            <p className="error-message">숫자만 10자 입력해주세요.</p>
                          </div>
                          {/* 에러일경우 error 클래스 추가 */}
                          <div className="field-form">
                            <label className="title">
                              개업일자
                              <sup className="important">
                                <span className="blind">필수항목</span>
                              </sup>
                            </label>
                            <div className="cont-line">
                              <div className="field clear">
                                <input type="text" placeholder="‘-‘없이 8자리를 입력해주세요" />
                                <button type="button" className="btn-clear">
                                  Reset
                                </button>
                              </div>
                            </div>
                            <p className="error-message">숫자만 10자 입력해주세요.</p>
                          </div>
                          {/* 에러일경우 error 클래스 추가 */}
                          <div className="field-form">
                            <label className="title">
                              대표자명
                              <sup className="important">
                                <span className="blind">필수항목</span>
                              </sup>
                            </label>
                            <div className="cont-line">
                              <div className="field clear">
                                <input type="text" placeholder="대표자명을 입력해주세요" />
                                <button type="button" className="btn-clear">
                                  Reset
                                </button>
                              </div>
                            </div>
                            <p className="error-message">글자만 10자 입력해주세요.</p>
                          </div>
                          {/* 성공일경우 success 클래스 추가, 에러일경우 error 클래스 추가 */}
                          <div className="field-form address">
                            <label className="title">
                              이메일 주소
                              <sup className="important">
                                <span className="blind">필수항목</span>
                              </sup>
                            </label>
                            <div className="cont-line line">
                              <div className="field">
                                <input type="text" placeholder="이메일 주소를 입력해주세요" />
                              </div>
                              <button className="checkbutton bd-brown fixed">인증코드 발송</button>
                            </div>
                            <div className="cont-line line mt-8">
                              <div className="field">
                                <input type="text" placeholder="인증코드 6자리를 입력해주세요" />
                                <span className="time">09:59</span>
                              </div>
                              <button className="checkbutton brown fixed">인증코드 확인</button>
                            </div>
                            <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
                            <p className="success-message">이메일 인증이 완료되었습니다.</p>
                            <p className="error-message">이메일 인증번호가 일치하지 않습니다.</p>
                          </div>
                        </div>
                      </div>
                      <div className="agreeBox">
                        <div className="agreeAllBtn">
                          <label className="agreeAll">
                            <input className="check" type="checkbox" />
                            모든 약관에 동의합니다.
                          </label>
                        </div>
                        <div className="rulebox">
                          <label className="ruletext">
                            <input className="check" type="checkbox" />
                            <span className="textpoint">필수</span>
                            <span className="checkbox-title">통합서비스 이용약관 동의</span>
                          </label>
                          <a href="#" className="arrow right">
                            <span className="hide-text">자세히 보기</span>
                          </a>
                        </div>
                        <div className="rulebox">
                          <label className="ruletext">
                            <input className="check" type="checkbox" />
                            <span className="textpoint">필수</span>
                            <span className="checkbox-title">개인정보 수집∙이용 동의</span>
                          </label>
                          <a href="#" className="arrow right">
                            <span className="hide-text">자세히 보기</span>
                          </a>
                        </div>
                        <div className="rulebox">
                          <label className="ruletext">
                            <input className="check" type="checkbox" />
                            <span className="textpoint select">선택</span>
                            <span className="checkbox-title">광고성 정보 수신 및 마케팅 활용 동의</span>
                          </label>
                          <a href="#" className="arrow right">
                            <span className="hide-text">자세히 보기</span>
                          </a>
                          <div className="subcheckbox">
                            <label className="subselection">
                              <input className="check" type="checkbox" />
                              <span className="checkbox-title">SMS</span>
                            </label>
                            <label className="subselection">
                              <input className="check" type="checkbox" />
                              <span className="checkbox-title">E-mail</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-wrap">
              {/* 입력 정보가 완료 되었을 경우 disabled 삭제 */}
              <button type="button" className="button orange" disabled={!validCorporate} onClick={fnNextCorporate}>
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteJoinMembership
