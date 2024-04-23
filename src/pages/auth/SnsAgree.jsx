export function SnsAgree() {
  return (
    <section className="contents">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section medium sns-login">
          <div className="title-text-box">
            <h2 className="title1">서비스 이용을 위해 약관에 동의해주세요.</h2>
          </div>
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-cont">
                <div className="agreeBox">
                  <div className="agreeAllBtn">
                    <label className="agreeAll">
                      <input className="check" type="checkbox" />
                      모든 약관에 동의합니다.
                    </label>
                  </div>
                  {/* 개별 체크박스 */}
                  <div className="rulebox">
                    <label className="ruletext">
                      <input className="check" type="checkbox" />
                      <span className="textpoint">필수</span>
                      <span className="checkbox-title">만 14세 이상입니다</span>
                    </label>
                    <a href="#" className="arrow right">
                      <span className="hide-text">자세히 보기</span>
                    </a>
                  </div>
                  <div className="rulebox">
                    <label className="ruletext">
                      <input className="check" type="checkbox" />
                      <span className="textpoint">필수</span>
                      <span className="checkbox-title">이용약관</span>
                    </label>
                    <a href="#" className="arrow right">
                      <span className="hide-text">자세히 보기</span>
                    </a>
                  </div>
                  <div className="rulebox">
                    <label className="ruletext">
                      <input className="check" type="checkbox" />
                      <span className="textpoint select">선택</span>
                      <span className="checkbox-title">마케팅 동의</span>
                    </label>
                    <a href="#" className="arrow right">
                      <span className="hide-text">자세히 보기</span>
                    </a>
                    <div className="subcheckbox">
                      <label className="subselection">
                        <input className="check" type="checkbox" />
                        <span className="checkbox-title">SMS</span>
                      </label>
                      <label className="subselection">
                        <input className="check" type="checkbox" />
                        <span className="checkbox-title">E-mail</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-wrap">
              <button type="button" className="button brown" disabled>다음</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
