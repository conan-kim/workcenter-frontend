import {useState} from 'react'
export function InteCorporateForm() {
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
              이메일 인증이 완료되었습니다. <br />
              <strong className="title1">기업회원 정보를 입력해주세요.</strong>
            </h2>
          </div>
          <div className="box-wrap">
            <div className="box-layer">
              <div className="content">
                <div className="cont-area">
                  <div className="field-form">
                    <label className="title">
                      회사명
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field">
                        <input type="text" placeholder="플루닛" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="field-form">
                    <label className="title">
                      사업자등록번호
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field">
                        <input type="text" placeholder="1234567890" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="field-form">
                    <label className="title">
                      개업일자
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field">
                        <input type="text" placeholder="2021231" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="field-form">
                    <label className="title">
                      대표자명
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field">
                        <input type="text" placeholder="이경일" readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="field-form">
                    <label className="title">
                      아이디(이메일)
                      <sup className="important">
                        <span className="blind">필수항목</span>
                      </sup>
                    </label>
                    <div className="cont-line">
                      <div className="field">
                        <input type="text" placeholder="ploonet@saltlux.com" readOnly />
                      </div>
                    </div>
                  </div>
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
                  </div>
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
                    <h2 className="cont-title">회사 정보</h2>
                    <div className="cont-area">
                      <div className="field-form address">
                        <label className="title">회사 주소</label>
                        <div className="cont-line line">
                          <div className="field">
                            <input type="text" placeholder="주소를 검색해주세요" readOnly />
                          </div>
                          <button className="checkbutton bd-brown">주소검색</button>
                        </div>
                        <div className="cont-line mt-12">
                          <div className="field">
                            <input type="text" placeholder="상세주소를 입력해주세요" readOnly />
                          </div>
                        </div>
                      </div>
                      <div className="field-form">
                        <label className="title">회사 대표전화</label>
                        <div className="cont-line line">
                          <div className="field clear">
                            <input type="text" placeholder="‘-‘없이 회사 대표전화를 입력해주세요" />
                            <button type="button" className="btn-clear">
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="field-form">
                        <label className="title">회사 홈페이지</label>
                        <div className="cont-line line">
                          <div className="field clear">
                            <input type="text" placeholder="회사 홈페이지를 입력해주세요" />
                            <button type="button" className="btn-clear">
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="field-form enterlogo">
                        <label className="title">회사 로고 등록</label>
                        <div className="cont-line line">
                          <div className="logo enter">
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
                    <h2 className="cont-title">담당자 정보</h2>
                    <div className="cont-area">
                      <div className="field-form">
                        <label className="title">담당자 이름</label>
                        <div className="cont-line">
                          <div className="field clear">
                            <input type="text" placeholder="담당자 이름을 입력해주세요" />
                            <button type="button" className="btn-clear">
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="field-form">
                        <label className="title">담당자 이메일</label>
                        <div className="cont-line">
                          <div className="field clear">
                            <input type="text" placeholder="담당자 이메일을 입력해주세요" />
                            <button type="button" className="btn-clear">
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="field-form">
                        <label className="title">소속부서</label>
                        <div className="cont-line">
                          <div className="field clear">
                            <input type="text" placeholder="소속부서를 입력해주세요" />
                            <button type="button" className="btn-clear">
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="field-form">
                        <label className="title">직책</label>
                        <div className="cont-line">
                          <div className="field clear">
                            <input type="text" placeholder="직책을 입력해주세요" />
                            <button type="button" className="btn-clear">
                              Reset
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="field-form">
                        <label className="title">회사 내선번호</label>
                        <div className="cont-line">
                          <div className="field clear">
                            <input type="text" placeholder="회사 내선번호를 입력해주세요" />
                            <button type="button" className="btn-clear">
                              Reset
                            </button>
                          </div>
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
