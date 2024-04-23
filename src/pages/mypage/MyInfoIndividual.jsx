export function MyInfoIndividual() {
  return (
    <>
      {/* 개인회원 */}
      <div className="mypage-title-box">
        {/* 20230615 title4 클래스 추가 */}
        <h3 className="title4">내 정보</h3>
      </div>
      <section className="modify-box">
        {/* 20230615 title-align 클래스명 추가 */}
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
              <div className="info-title">이름</div>
              <div className="info-cont">홍길동</div>
            </div>
            <div className="info-block">
              <div className="info-title">성별</div>
              <div className="info-cont">남자</div>
            </div>
            <div className="info-block">
              <div className="info-title">휴대폰 번호</div>
              <div className="info-cont between">
                <span className="phone-number">010-1523-4567</span>
                <span className="complete-tit">
                  <img src="/assets/images/icons/ic_check.png" alt="" />
                  본인인증 완료
                </span>
              </div>
            </div>
            {/* 20230615 pt-none 클래스 추가 */}
            <div className="info-block pt-none">
              <div className="info-title">SNS 로그인 연동</div>
              <div className="info-cont block">
                {/* sns-toggle에 active 추가시 연동중 state-message 추가 */}
                <div className="sns-toggle active">
                  <div className="toggle-title">
                    <img src="/assets/images/icons/ico-sns-kakao.png" alt="" />
                    카카오 계정 로그인
                  </div>
                  <div className="state-message">연동중 (2023. 01. 01)</div>
                  <div className="utcheck">
                    <label className="snscheck">
                      <input role="switch" type="checkbox" />
                    </label>
                  </div>
                </div>
                <div className="sns-toggle">
                  <div className="toggle-title">
                    <img src="/assets/images/icons/ico-sns-naver.png" alt="" />
                    네이버 계정 로그인
                  </div>
                  <div className="state-message">연동중 (2023. 01. 01)</div>
                  <div className="utcheck">
                    <label className="snscheck">
                      <input role="switch" type="checkbox" />
                    </label>
                  </div>
                </div>
                <div className="sns-toggle">
                  <div className="toggle-title">
                    <img src="/assets/images/icons/ico-sns-apple.png" alt="" />
                    Apple 계정 로그인
                  </div>
                  <div className="state-message">연동중 (2023. 01. 01)</div>
                  <div className="utcheck">
                    <label className="snscheck">
                      <input role="switch" type="checkbox" />
                    </label>
                  </div>
                </div>
              </div>
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
          <h4 className="modify-tit">추가 정보</h4>
          <div>
            {/* 20230615 exception 클래스명 추가 */}
            <div className="info-block exception">
              <div className="info-title">
                <label className="title">주소</label>
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
              <div className="info-title">프로필 이미지</div>
              <div className="info-cont">
                <div className="field-form enterlogo">
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

export default MyInfoIndividual
