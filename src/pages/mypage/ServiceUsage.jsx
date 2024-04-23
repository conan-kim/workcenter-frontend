export default function ServiceUsage() {
  return (
    <>
      {/* 서비스 사용내역 */}
      <div className="mypage-title-box">
        <h3 className="title2">서비스 사용내역</h3>
        <div className="explanation">
          <span className="txt">2023. 02. 20 00:00:00 ~ 2023. 02. 20 23:59:59 기준</span>
          <span className="txt">채널별 사용 건 수 합계 (단위: 건)</span>
        </div>
      </div>
      <div className="grid-wrap four-column">
        <div className="item">
          <div className="card-type1">
            <div className="card-top">
              <div className="title-box">
                <img src="/assets/images/icons/ico-call.png" alt="전화" />
                <strong className="card-title">전화</strong>
              </div>
            </div>
            <div className="card-bottom">
              <div className="data-box">
                <span className="data-text">언바운드</span>
                <span className="data-value">354,500</span>
              </div>
              <div className="data-box">
                <span className="data-text">아웃바운드</span>
                <span className="data-value">8,354,500</span>
              </div>
            </div>
          </div>
        </div>

        <div className="item one-row">
          <div className="card-type2">
            <div className="card-top">
              <div className="title-box">
                <img src="/assets/images/icons/ico-message.png" alt="전화" />
                <strong className="card-title">문자</strong>
              </div>
            </div>
            <div className="card-bottom">
              <div className="data-box">
                <span className="data-text">SMS</span>
                <span className="data-value">21,447,800</span>
              </div>
              <div className="data-box">
                <span className="data-text">LMS</span>
                <span className="data-value">4,155</span>
              </div>
              <div className="data-box">
                <span className="data-text">MMS</span>
                <span className="data-value">20,488</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card-type1">
            <div className="card-top">
              <div className="title-box">
                <img src="/assets/images/icons/ico-group.png" alt="카카오톡" />
                <strong className="card-title">카카오톡</strong>
              </div>
            </div>
            <div className="card-bottom">
              <div className="data-box">
                <span className="data-text">알림톡</span>
                <span className="data-value">45,354,500</span>
              </div>
              <div className="data-box">
                <span className="data-text">친구톡</span>
                <span className="data-value">4,500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
