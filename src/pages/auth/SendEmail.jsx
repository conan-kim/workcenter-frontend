export function SendEmail() {
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
                <div className="auth-log-box">
                  <div className="info-text-box pdt-0">
                    <p className="text">
                      임시비밀번호가 이메일로 발송되었습니다. <br />
                      로그인 후 비밀번호를 변경해 주세요.
                    </p>
                  </div>
                  <div className="button-wrap">
                    <button type="button" className="button brown">
                      로그인
                    </button>
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
