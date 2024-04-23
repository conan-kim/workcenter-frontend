import {useState} from 'react'
export function QuickStartStep2() {
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
  return (
    <section className="contents quick-start-join">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section medium">
          <div className="title-text-box">
            <h2 className="title3">
            심민지님의 <br />
              <strong className="title1">동의가 필요해요.</strong>
            </h2>
          </div>

          <div className="box-wrap">
            {/* process breadcrumb */}
            <ul className="page-breadcrumb">
              <li>
                <span>간편계정 만들기</span>
              </li>
              <li className="on">
                <span>약관동의</span>
              </li>
              <li>
                <span>AI직원 대화 시작</span>
              </li>
            </ul>

            <div className="box-layer">
              <div className="agreeBox">
                <div className="agreeAllBtn">
                  <label className="agreeAll">
                    <input className="check" type="checkbox" />
                    모든 약관에 동의합니다.
                  </label>
                </div>
                <div className="rulebox">
                  <label className="ruletext">
                    <input className="check" type="checkbox" />
                    <span className="textpoint">필수</span>
                    <span className="checkbox-title">통합서비스 이용약관 동의</span>
                  </label>
                  <a href="#" className="arrow right">
                    <span className="hide-text">자세히 보기</span>
                  </a>
                </div>
                <div className="rulebox">
                  <label className="ruletext">
                    <input className="check" type="checkbox" />
                    <span className="textpoint">필수</span>
                    <span className="checkbox-title">개인정보 수집∙이용 동의</span>
                  </label>
                  <a href="#" className="arrow right">
                    <span className="hide-text">자세히 보기</span>
                  </a>
                </div>
                <div className="rulebox">
                  <label className="ruletext">
                    <input className="check" type="checkbox" />
                    <span className="textpoint select">선택</span>
                    <span className="checkbox-title">광고성 정보 수신 및 마케팅 활용 동의</span>
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
            <div className="button-wrap">
              {/* 입력 정보가 완료 되었을 경우 disabled 삭제 */}
              <button className="button orange" type="button" disabled>
                다음
              </button>
            </div>

            <div className="links-wrap">
              {/* <p className="link-login">
                <span>이미 계정이 있으신가요?</span>
                <a href="#" >로그인</a>
              </p> */}
              <div className="btn-wrap">
                <button type="button" className="btn-prev">
                  이전 단계로
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
