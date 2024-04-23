export function DorIndEmail({handlePass}) {
  // 휴대폰 본인인증
  const fnAuthentification = () => {
    // TODO ...

    // 처리 후 성공이면 handlePass 호출
    handlePass()
  }
  return (
    <section className="contents">
      {/* 20230615 dormant 클래스명 추가 */}
      <div className="contents-wrap dormant">
        <div className="contents-section small">
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-top">
                <h2 className="title1">휴면 계정 안내</h2>
                <p className="box-info-txt">
                  회원님은 플루닛 통합계정에 로그인한지 1년 이상 지나 <br />
                  휴면상태로 전환되었습니다. <br />
                  이메일 인증을 통해 휴면 해제해 주세요.
                </p>
              </div>
              <div className="button-wrap">
                <button type="button" className="button bd-brown" onClick={fnAuthentification}>
                  휴대폰 본인인증
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
