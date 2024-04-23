import {useState} from 'react'

export function FindId() {
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
                <h2 className="title1">아이디 찾기</h2>
              </div>
              <div className="box-cont">
                <div className="tab-wrap">
                  <div className="tab-header">
                    <div className="tabs">
                      <button
                        type="button"
                        className={`tab-menu ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => handleTabClick(0)}
                      >
                        <span className="text">개인 회원</span>
                      </button>
                      <button
                        type="button"
                        className={`tab-menu ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                      >
                        <span className="text">기업 회원</span>
                      </button>
                    </div>
                    <div className="tab-indicator" style={{left: `calc(calc(100% / 2) * ${activeTab})`}}></div>
                  </div>
                  <div className="tab-body">
                    <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
                      {/* 개인회원 초기 인증화면 */}
                      <div className="auth-log-box">
                        <div className="info-text-box">
                          <p className="text">
                            휴대폰 본인인증을 통해 <br />
                            아이디(이메일)을 찾을 수 있습니다.
                          </p>
                        </div>
                        <div className="button-wrap">
                          <button type="button" className="button bd-brown">
                            휴대폰 본인인증
                          </button>
                        </div>
                      </div>

                      {/* 개인회원 가입정보 화면 */}
                      <div className="auth-log-box">
                        <div className="info-text-box">
                          <p className="text">가입된 이메일 아이디를 찾았습니다.</p>
                          <p className="text">
                            <strong className="user-mail-info">h******@gmail.com</strong>
                          </p>
                        </div>
                        <div className="button-wrap">
                          <button type="button" className="button bd-brown">
                            비밀번호 찾기
                          </button>
                          <button type="button" className="button brown">
                            로그인
                          </button>
                        </div>
                      </div>

                      {/* 가입정보 없음 */}
                      <div className="auth-log-box">
                        <div className="info-text-box">
                          <p className="text">
                            아직 플루닛에 가입되지 않은 정보입니다. <br />
                            가입하고 플루닛의 다양한 서비스를 이용해 보세요.
                          </p>
                        </div>
                        <div className="button-wrap">
                          <button type="button" className="button brown">
                            통합회원가입
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
                      <div className="content auth-form">
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
                          <div className="field-form error">
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

export default FindId
