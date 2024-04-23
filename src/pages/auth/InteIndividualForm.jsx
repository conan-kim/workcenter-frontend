import {useState} from 'react'
export function InteIndividualForm() {
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

  // 아코디언
  const [show, setShow] = useState(false)

  const onSelectShow = () => {
    setShow((prev) => !prev)
  }
  return (
    <section className="contents">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section medium">
          <div className="title-text-box">
            <h2 className="title3">
              본인 인증이 완료되었습니다. <br />
              <strong className="title1">회원 정보를 입력해주세요.</strong>
            </h2>
          </div>
          <div className="box-wrap">
            <div className="box-layer">
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
                        <input type="text" placeholder="아이디(이메일)를 입력해 주세요." />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                      <button className="checkbutton bd-brown">중복확인</button>
                    </div>
                    <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                  {/* 에러일경우 error 클래스 추가 */}
                  <div className="field-form">
                    <label className="title">
                      비밀번호
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field clear add">
                        <input type={pwType.type} placeholder="비밀번호를 입력해 주세요." onChange={onchange} />
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
                    <p className="error-message">비밀번호를 확인해 주세요.</p>
                  </div>
                  {/* 성공일경우 success 클래스 추가, 에러일경우 error 클래스 추가 */}
                  <div className="field-form">
                    <label className="title">
                      비밀번호 확인
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field clear add">
                        <input type={pwType.type} placeholder="비밀번호를 한번 더 입력해 주세요." onChange={onchange} />
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
                    <p className="success-message">비밀번호가 일치합니다.</p>
                    <p className="error-message">비밀번호가 일치하지 않습니다.</p>
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
                        <input type="text" placeholder="홍길동" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="field-form">
                    <label className="title">
                      성별
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field">
                        <input type="text" placeholder="성별" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="field-form">
                    <label className="title">
                      휴대폰 번호
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field">
                        <input type="text" placeholder="010-1234-5678" readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion-title">
                  <button className={`headline ${show ? 'show' : ''}`} onClick={onSelectShow}>
                    추가 정보 입력 (선택)
                  </button>
                </div>
                {show && (
                  <div className="accordion-content">
                    <div className="cont-area">
                      <div className="field-form address">
                        <label className="title">주소</label>
                        <div className="cont-line line">
                          <div className="field">
                            <input type="text" placeholder="주소를 검색해주세요" readOnly={true} />
                          </div>
                          <button className="checkbutton bd-brown">주소검색</button>
                        </div>
                        <div className="cont-line mt-12">
                          <div className="field">
                            <input type="text" placeholder="상세주소를 입력해주세요" readOnly={true} />
                          </div>
                        </div>
                      </div>
                      <div className="field-form enterlogo">
                        <label className="title">프로필 이미지</label>
                        <div className="cont-line line">
                          <div className="logo">
                            <img src="/assets/images/icons/camera.png" alt="" className="camera" />
                            <input type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg" />
                            {/* 이미지파일 첨부 시 src 이미지 경로 추가 */}
                            <div className="img-wrap">
                              <div className="img-area">
                                {/* <img src="/assets/images/sample/sample-penguin.png" /> */}
                              </div>
                            </div>
                          </div>
                          <div className="txt">5MB 미만 / 이미지 파일(jpg, png)만 첨부 가능</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="button-wrap">
              {/* 입력 정보가 완료 되었을 경우 disabled 삭제 */}
              <button className="button orange" type="button" disabled>
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
