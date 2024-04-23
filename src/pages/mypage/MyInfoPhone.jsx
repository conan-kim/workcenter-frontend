export function MyInfoPhone({handlePass}) {
  // 휴대폰 본인인증
  const fnAuthentification = () => {
    // TODO ...

    // 처리 후 성공이면 handlePass 호출
    handlePass()
  }

  return (
    <>
      {/* 휴대폰본인인증(SNS가입자) */}
      <section className="contents">
        <div className="contents-wrap myinfo">
          <div className="contents-section small">
            <div className="box-wrap">
              <div className="box-layer">
                <div className="box-top">
                  <h2 className="title1">휴대폰 본인인증</h2>
                  <p className="box-info-txt">
                    고객님의 개인정보를 안전하게 보호하기 위해
                    <br />
                    비밀번호를 다시 확인합니다.
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
    </>
  )
}

export default MyInfoPhone
