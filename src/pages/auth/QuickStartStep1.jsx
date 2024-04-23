import {useState} from 'react'
export function QuickStartStep1() {
  // 비밀번호 눈
  const [pwType, setpwType] = useState({
    type: 'password',
    visible: false
  })
  const handlePasswordType = () => {
    setpwType(() => {
      if (!pwType.visible) {
        return {type: 'text', visible: true}
      } else {
        return {type: 'password', visible: false}
      }
    })
  }

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
    <section className="contents quick-start-join">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section medium">
          <div className="title-text-box">
            <h2 className="title3">
              워크센터의 AI직원에게 <br />
              <strong className="title1">고객님의 정보를 알려주세요.</strong>
            </h2>
          </div>

          <div className="box-wrap">
            {/* process breadcrumb */}
            <ul className="page-breadcrumb">
              <li className="on">
                <span>간편계정 만들기</span>
              </li>
              <li>
                <span>약관동의</span>
              </li>
              <li>
                <span>AI직원 대화 시작</span>
              </li>
            </ul>

            <div className="box-layer">
              <div className="tab-wrap ico-tab">
                <div className="tab-header">
                  <div className="tabs">
                    <button
                      type="button"
                      className={`tab-menu ${activeTab === 0 ? 'active' : ''}`}
                      onClick={() => handleTabClick(0)}
                    >
                      <span className="ico ico-personal"></span>
                      <span className="text">개인</span>
                    </button>
                    <button
                      type="button"
                      className={`tab-menu ${activeTab === 1 ? 'active' : ''}`}
                      onClick={() => handleTabClick(1)}
                    >
                      <span className="ico ico-corporate"></span>
                      <span className="text">기업</span>
                    </button>
                  </div>
                </div>
                <div className="tab-body auth-page">
                  {/* 개인으로 가입 */}
                  <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
                    <div className="content">
                      <div className="cont-area">
                        {/* 에러일경우 error 클래스 추가 */}
                        <div className="field-form">
                          <label className="title">
                            아이디(이메일)
                            <sup className="important">
                              <span className="blind">필수항목</span>
                            </sup>
                          </label>
                          <div className="cont-line line">
                            <div className="field clear">
                              <input type="text" placeholder="아이디가 될 이메일 정보를 입력해주세요." />
                              <button type="button" className="btn-clear">
                                Reset
                              </button>
                            </div>
                            <button className="checkbutton bd-brown">중복확인</button>
                          </div>
                          <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
                          <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                        </div>

                        <div className="field-form">
                          <label className="title">
                            이름
                            <sup className="important">
                              <span className="blind">필수항목</span>
                            </sup>
                          </label>
                          <div className="cont-line">
                            <div className="field">
                              <input type="text" placeholder="AI가 전화 응대 시 안내할 고객님의 이름 혹은 업체명을 입력해주세요." />
                            </div>
                          </div>
                        </div>

                        {/* 성공일경우 success 클래스 추가, 에러일경우 error 클래스 추가 */}
                        <div className="field-form">
                          <label className="title">
                            비밀번호
                            <sup className="important">
                              <span className="blind">필수항목</span>
                            </sup>
                          </label>
                          <div className="cont-line">
                            <div className="field clear add">
                              <input type={pwType.type} placeholder="비밀번호를 입력해주세요" onChange={onchange} />
                              <div className="input-button-wrap">
                                <button type="button" className="btn-eyes">
                                  <span onClick={handlePasswordType}>
                                    {pwType.visible ? (
                                      <span className="show">
                                        <div className="icon">
                                          <div className="img"></div>
                                        </div>
                                      </span>
                                    ) : (
                                      <span className="hide">
                                        <div className="icon">
                                          <div className="img"></div>
                                        </div>
                                      </span>
                                    )}
                                  </span>
                                </button>
                                <button type="button" className="btn-clear">
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="condition">영문, 숫자, 특수문자( !, @, $, ^, *, -, -)를 혼합하여 8~16자로 사용</p>
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
                    </div>
                  </div>

                  {/* 기업으로 가입 */}
                  <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
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
                              <input type="text" placeholder="사업자등록증에 기재된 회사이름을 기재해주세요." />
                              <button type="button" className="btn-clear">
                                Reset
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* 에러일경우 error 클래스 추가 */}
                        <div className="field-form">
                          <label className="title">
                            담당자명
                            <sup className="important">
                              <span className="blind">필수항목</span>
                            </sup>
                          </label>
                          <div className="cont-line">
                            <div className="field clear">
                              <input type="text" placeholder="담당자명을 입력해주세요" />
                              <button type="button" className="btn-clear">
                                Reset
                              </button>
                            </div>
                          </div>
                          <p className="error-message">글자만 10자 입력해주세요.</p>
                        </div>

                        {/* 에러일경우 error 클래스 추가 */}
                        <div className="field-form">
                          <label className="title">
                            아이디(이메일)
                            <sup className="important">
                              <span className="blind">필수항목</span>
                            </sup>
                          </label>
                          <div className="cont-line line">
                            <div className="field clear">
                              <input type="text" placeholder="아이디가 될 이메일 정보를 입력해주세요." />
                              <button type="button" className="btn-clear">
                                Reset
                              </button>
                            </div>
                            <button className="checkbutton bd-brown">중복확인</button>
                          </div>
                          <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
                          <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                        </div>

                        {/* 성공일경우 success 클래스 추가, 에러일경우 error 클래스 추가 */}
                        <div className="field-form">
                          <label className="title">
                            비밀번호
                            <sup className="important">
                              <span className="blind">필수항목</span>
                            </sup>
                          </label>
                          <div className="cont-line">
                            <div className="field clear add">
                              <input type={pwType.type} placeholder="비밀번호를 입력해주세요" onChange={onchange} />
                              <div className="input-button-wrap">
                                <button type="button" className="btn-eyes">
                                  <span onClick={handlePasswordType}>
                                    {pwType.visible ? (
                                      <span className="show">
                                        <div className="icon">
                                          <div className="img"></div>
                                        </div>
                                      </span>
                                    ) : (
                                      <span className="hide">
                                        <div className="icon">
                                          <div className="img"></div>
                                        </div>
                                      </span>
                                    )}
                                  </span>
                                </button>
                                <button type="button" className="btn-clear">
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="condition">영문, 숫자, 특수문자( !, @, $, ^, *, -, -)를 혼합하여 8~16자로 사용</p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-wrap">
              {/* 입력 정보가 완료 되었을 경우 disabled 삭제 */}
              <button className="button orange" type="button" disabled>
                다음
              </button>
            </div>

            <div className="links-wrap">
              <p className="link-login">
                <span>이미 계정이 있으신가요?</span>
                <a href="#" >로그인</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
