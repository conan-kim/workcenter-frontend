export function LoginSns() {
  return (
    <section className="contents">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section small sns-login">
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-cont">
                <div className="sns-login-top">
                  <p className="sns-top-text">이메일로 가입된 회원정보가 있습니다.</p>
                  <strong>h*******@gmail.com</strong>
                </div>
                <div className="sns-login-bottom">
                  <p className="sns-bottom-text">SNS계정을 연결하시면 간편하게 로그인을 하실 수 있습니다.</p>
                  <div className="sns-login-area">
                    <ul className="sns-login-list">
                      <li className="sns-login-item">
                        <button type="button" className="sns-button kakao">카카오로 로그인</button>
                      </li>
                      <li className="sns-login-item">
                        <button type="button" className="sns-button apple">애플로 로그인</button>
                      </li>
                      <li className="sns-login-item">
                        <button type="button" className="sns-button naver">네이버로 로그인</button>
                      </li>
                    </ul>
                  </div> 
                  <div className="button-wrap sns-account-button">
                    <button type="button" className="button brown">기존 계정 로그인</button>
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
