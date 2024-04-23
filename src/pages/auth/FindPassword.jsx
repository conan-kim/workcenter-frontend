export function FindPassword() {
  return (
    <section className="contents">
      <div className="contents-wrap">
        <div className="contents-section small">
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-top">
                <h2 className="title1">비밀번호 찾기</h2>
              </div>
              <div className="box-cont">
                <div className="content find-form">
                  <div className="cont-area">
                    {/* 에러일경우 error 클래스 추가 */}
                    <div className="field-form">
                      <label className="title">가입한 아이디(이메일)을 입력해주세요.</label>
                      <div className="cont-line">
                        <div className="field clear">
                          <input type="text" placeholder="이메일 주소를 입력해 주세요." />
                          <button type="button" className="btn-clear">
                            Reset
                          </button>
                        </div>
                      </div>
                      <p className="error-message">유효하지 않은 이메일 형식입니다.</p>
                    </div>
                  </div>
                </div>
                <div className="button-wrap">
                  <button type="button" className="button brown" disabled>
                    임시비밀번호 받기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindPassword
