export function MyInfoCorporate() {
  return (
    <>
      {/* 기업회원 */}
      <div className="mypage-title-box">
        {/* 20230615 title4 클래스 추가 */}
        <h3 className="title4">내 정보</h3>
      </div>
      <section className="modify-box">
        {/* 20230622 title-align 클래스명 추가 */}
        <div className="myinfo-box title-align">
          <h4 className="modify-tit">기본 정보</h4>
          <div>
            <div className="info-block">
              <div className="info-title">아이디(이메일)</div>
              <div className="info-cont">ploonet@saltlux.com</div>
            </div>
            <div className="info-block">
              <div className="info-title">비밀번호</div>
              <div className="info-cont">
                <button className="checkbutton bd-black" type="button">
                  비밀번호 변경
                </button>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">회사명</div>
              <div className="info-cont">플루닛</div>
            </div>
            <div className="info-block">
              <div className="info-title">사업자등록번호</div>
              <div className="info-cont btn-box"> {/* 2023.10.31 btn-box 클래스 추가 */}
                123-45-78978
                <button className="button bd-brown">사업자 등록번호 등록</button> {/* 2023.10.31 버튼 추가 */}
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">개업일자</div>
              <div className="info-cont">2020-12-31</div>
            </div>
            <div className="info-block">
              <div className="info-title">대표자명</div>
              <div className="info-cont">이경일</div>
            </div>

            {/* 나의 플루니안 CASE 1: 기존 통합회원 / 무료 시작하기 진행하지 않은 회원 */}
            <div className="info-block">
              <div className="info-title">나의 플루니안</div>
              <div className="info-cont block">
                <div className="my-flunian-wrap">
                  <div className="flunian-content">
                    <p className="title">AI직원으로 채용을 하셨네요!</p>
                    <div className="flunian-info-wrap">
                      <figure className="character">
                        <img src="/assets/images/sample/sample-character.png" alt="" />
                      </figure>
                      <div className="flunian-info">
                        <p className="info-hour">
                          고객님의 AI직원 전용 전화번호는 <strong className="f-color-brown">00년 00월 00일까지로 만료되었습니다.</strong> <br />
                          이제 플루니안은 고객님 전담 CS 직원으로 계속 이용하실 수 있습니다.
                        </p>
                        <p className="info-more">
                          <span>
                            더 많은 AI업무를 경험해보고 싶으시다면 <br />
                            AI직원을 정식으로 채용해주세요!
                          </span>
                          <a href="#" className="link-text">
                            AI직원 만나러가기
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-flunian-link">
                    <button type="button" className="checkbutton">
                      상세보기
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 나의 플루니안 CASE 2: 기존 통합회원 / 무료시작하기 진행한 회원 / AI번호 유효기간 1개월 지나지 않은 회원 */}
            <div className="info-block">
              <div className="info-title">나의 플루니안</div>
              <div className="info-cont block">
                <div className="my-flunian-wrap">
                  <div className="flunian-content">
                    <div className="flunian-info-wrap">
                      <figure className="character">
                        <img src="/assets/images/sample/sample-character.png" alt="" />
                      </figure>
                      <div className="flunian-info">
                        <p className="info-hour">
                        고객님의 AI직원 전용 전화번호는 <strong>00년 00월 00일까지 무료 사용</strong>하실 수 있습니다.
                        </p>
                        <p className="info-tel">070-4500-0018</p>
                        <p className="info-more">
                          <span>
                            더 많은 AI업무를 경험해보고 싶으시다면 <br />
                            유료 기능 사전체험을 해보세요!
                          </span>
                          <a href="#" className="link-text">
                            기능 둘러보기
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-flunian-link">
                    <button type="button" className="checkbutton">
                      상세보기
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 나의 플루니안 CASE 3: 기존 통합회원 / 무료시작하기 진행한 회원 / AI번호 유효기간 1개월 종료된 회원 */}
            <div className="info-block">
              <div className="info-title">나의 플루니안</div>
              <div className="info-cont block">
                <div className="my-flunian-wrap">
                  <div className="flunian-content">
                    <div className="flunian-info-wrap">
                      <figure className="character">
                        <img src="/assets/images/sample/sample-character.png" alt="" />
                      </figure>
                      <div className="flunian-info">
                        <p className="info-hour">
                          고객님의 전담 CS 직원입니다. <br />
                          플루니안이 <strong>경영지원, 장애접수, 예약 업무</strong>도 대신할 수 있어요.
                        </p>
                        <p className="info-more">
                          <a href="#" className="link-text">
                            워크센터 바로가기
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-flunian-link">
                    <button type="button" className="checkbutton">
                      상세보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 20230615 title-align 클래스명 추가 */}
        <div className="myinfo-box title-align">
          <h4 className="modify-tit">회사 정보</h4>
          <div>
            {/* 20230613 exception 클래스명 추가 */}
            <div className="info-block exception">
              <div className="info-title">
                <label className="title">회사주소</label>
              </div>
              <div className="info-cont">
                <div className="field-form address">
                  <div className="cont-line line">
                    <div className="field">
                      <input type="text" placeholder="주소를 검색해주세요" readOnly />
                    </div>
                    <button type="button" className="checkbutton bd-brown">
                      주소검색
                    </button>
                  </div>
                  <div className="cont-line mt-12">
                    <div className="field clear">
                      <input type="text" placeholder="상세주소를 입력해주세요" readOnly />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">
                <label className="title">회사 대표전화</label>
              </div>
              <div className="info-cont">
                <div className="cont-area">
                  <div className="field-form">
                    <div className="cont-line">
                      <div className="field clear">
                        <input type="text" placeholder="" />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                    </div>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">
                <label className="title">회사 홈페이지</label>
              </div>
              <div className="info-cont">
                <div className="cont-area">
                  <div className="field-form">
                    <div className="cont-line">
                      <div className="field clear">
                        <input type="text" placeholder="" />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                    </div>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">회사 로고</div>
              <div className="info-cont">
                <div className="field-form enterlogo">
                  <div className="cont-line line">
                    <div className="logo enter">
                      <img src="/assets/images/icons/camera.png" alt="" className="camera" />
                      <input type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg" />
                      {/* 이미지파일 첨부 시 src 이미지 경로 추가 */}
                      <div className="img-wrap">
                        <div className="img-area">
                          {/* 테스트용이미지 */}
                          {/* <img src="/assets/images/sample/sample-penguin.png" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="txt">5MB 미만 / 이미지 파일(jpg, png)만 첨부 가능</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 20230615 title-align 클래스명 추가 */}
        <div className="myinfo-box title-align">
          <h4 className="modify-tit">담당자 정보</h4>
          <div>
            <div className="info-block">
              <div className="info-title">
                <label className="title">담당자 이름</label>
              </div>
              <div className="info-cont">
                <div className="cont-area">
                  <div className="field-form">
                    <div className="cont-line">
                      <div className="field clear">
                        <input type="text" placeholder="" />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                    </div>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">
                <label className="title">담당자 이메일</label>
              </div>
              <div className="info-cont">
                <div className="cont-area">
                  <div className="field-form">
                    <div className="cont-line">
                      <div className="field clear">
                        <input type="text" placeholder="" />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                    </div>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">
                <label className="title">소속부서</label>
              </div>
              <div className="info-cont">
                <div className="cont-area">
                  <div className="field-form">
                    <div className="cont-line">
                      <div className="field clear">
                        <input type="text" placeholder="" />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                    </div>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">
                <label className="title">직책</label>
              </div>
              <div className="info-cont">
                <div className="cont-area">
                  <div className="field-form">
                    <div className="cont-line">
                      <div className="field clear">
                        <input type="text" placeholder="" />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                    </div>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-title">
                <label className="title">회사 내선번호</label>
              </div>
              <div className="info-cont">
                <div className="cont-area">
                  <div className="field-form">
                    <div className="cont-line">
                      <div className="field clear">
                        <input type="text" placeholder="" />
                        <button type="button" className="btn-clear">
                          Reset
                        </button>
                      </div>
                    </div>
                    <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="myinfo-box">
          <h4 className="modify-tit">수신설정</h4>
          <div>
            <div className="info-block">
              <div className="info-title">서비스∙이벤트 정보</div>
              <div className="info-cont block">
                <div className="rulebox">
                  <div className="selectbox">
                    <label className="ruletext">
                      <input className="check" type="checkbox" />
                      <span className="textpoint select">선택</span>
                      <span className="checkbox-title">광고성 정보 수신 및 마케팅 활용 동의</span>
                    </label>
                    <a className="arrow right" href="javascript:void(0)">
                      <span className="hide-text">자세히 보기</span>
                    </a>
                  </div>
                  <div className="subcheckbox">
                    <label className="ruletext">
                      <input className="check" type="checkbox" />
                      <span className="checkbox-title">SMS</span>
                    </label>
                    <label className="ruletext">
                      <input className="check" type="checkbox" />
                      <span className="checkbox-title">E-mail</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrap">
          <button type="button" className="button modi-brown">
            저장하기
          </button>
        </div>
        <div className="withdrawal-box">
          <p className="withdrawal-text">플루닛 통합회원 탈퇴를 원하시면 회원탈퇴 버튼을 눌러주세요.</p>
          <button type="button" className="withdrawal-btn">
            회원 탈퇴
          </button>
        </div>
      </section>
    </>
  )
}

export default MyInfoCorporate