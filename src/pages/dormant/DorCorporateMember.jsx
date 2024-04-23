import {useState} from 'react'

export function DorCorporateMember() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <section className="contents">
      <div className="contents-wrap">
        <div className="contents-section small">
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-top">
                <h2 className="title1">휴면 계정 안내</h2>
                <p className="box-info-txt">
                  회원님은 플루닛 통합계정에 로그인한지 1년 이상 지나 <br />
                  휴면상태로 전환되었습니다. <br />
                  사업자등록번호 또는 이메일 인증을 통해 휴면 해제해 주세요.
                </p>
              </div>
              <div className="box-cont">
                <div className="tab-wrap radio-tab">
                  <div className="tab-header">
                    <div className="tabs">
                      <button
                        type="button"
                        className={`tab-menu ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => handleTabClick(0)}
                      >
                        <span className="text">사업자등록번호</span>
                      </button>
                      <button
                        type="button"
                        className={`tab-menu ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                      >
                        <span className="text">이메일(아이디)</span>
                      </button>
                    </div>
                  </div>
                  <div className="tab-body">
                    <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
                      <div className="content dol-form">
                        <div className="cont-area">
                          <div className="field-form">
                            <label className="title">회사명</label>
                            <div className="cont-line">
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
                            <label className="title">사업자등록번호</label>
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
                            <label className="title">개업일자</label>
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
                            <label className="title">대표자명</label>
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
                        </div>
                      </div>
                      <div className="button-wrap">
                        <button type="button" className="button brown" disabled>
                          확인
                        </button>
                      </div>
                    </div>
                    <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
                      <div className="content dol-form">
                        <div className="cont-area">
                          <div className="field-form">
                            <label className="title">이메일(아이디)</label>
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
                          </div>
                        </div>
                      </div>
                      <div className="button-wrap">
                        <button type="button" className="button brown" disabled>
                          인증메일 요청
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
