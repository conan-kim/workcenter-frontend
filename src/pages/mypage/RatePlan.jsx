export function RatePlan() {
  return (
    <>
      <div className="mypage-title-box">
        <h3 className="title2">요금제관리</h3>
      </div>
      <div className="grid-wrap">
        <div className="item">
          {/* 엔터프라이즈 일경우 enterprise 추가 */}
          <div className="card enterprise">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                {/* 결제하기 일경우 clearly class 추가 */}
                <a href="javascript:(0);" className="card-status clearly">
                  결제하기
                </a>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 엔터프라이즈 일경우 enterprise 추가 */}
          <div className="card enterprise">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <a href="javascript:(0);" className="card-status">
                  해지하기
                </a>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 엔터프라이즈 일경우 enterprise 추가 */}
          <div className="card enterprise">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                {/* 결제하기 일경우 clearly class 추가 */}
                <a href="javascript:(0);" className="card-status">
                  해지하기
                </a>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 구독요금제 일경우 subscribe 추가 */}
          <div className="card subscribe">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">프로페셔널 플러스 프로페셔널 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                <a href="javascript:(0);" className="card-status">
                  해지하기
                </a>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 상품요금제 일경우 product 추가 */}
          <div className="card product">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">베이직</strong>
                <span className="badge">상품</span>
              </div>
              <div className="card-status-box">
                <a href="javascript:(0);" className="card-status">
                  취소하기
                </a>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
                <span className="date-value">2023. 04. 21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 상품요금제 일경우 product 추가 */}
          <div className="card product">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">베이직</strong>
                <span className="badge">상품</span>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 해지완료 및 결제취소 일경우 termination 추가 */}
          <div className="card termination">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                {/* 링크가 없는 경우 추가 */}
                <span className="card-status">해지완료</span>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
              </div>
            </div>
          </div>
        </div>
        {/* 사용중인 요금제가 1개인 경우 two-column class 추가 */}
        <div className="item two-column">
          {/* 요금제 더보기 배너일때 banner class 추가 */}
          <div className="card banner">
            <div className="banner-wrap">
              <p className="text">
                <span className="text-block">나에게 알맞는</span> 다양한 요금제를 둘러보세요.
              </p>
              <div className="btn-wrap">
                <a href="#" className="button brown">
                  요금제 보러가기
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 상품요금제 일경우 product 추가 */}
          <div className="card product">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">베이직</strong>
                <span className="badge">상품</span>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 해지완료 및 결제취소 일경우 termination 추가 */}
          <div className="card termination">
            <div className="card-top">
              <div className="title-box">
                <strong className="card-title">엔터프라이즈 플러스 엔터프라이즈 플러스</strong>
                <span className="badge">구독</span>
              </div>
              <div className="card-status-box">
                {/* 링크가 없는 경우 추가 */}
                <span className="card-status">해지완료</span>
              </div>
            </div>
            <div className="card-bottom">
              <div className="date-box">
                <span className="date-text">사용기간</span>
                <span className="date-value">2023. 01. 01 ~ 2023. 12. 31</span>
              </div>
              <div className="date-box">
                <span className="date-text">다음 결제 예정일</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          {/* 요금제 더보기 배너일때 banner class 추가 */}
          <div className="card banner">
            <div className="banner-wrap">
              <p className="text">
                <span className="text-block">나에게 알맞는</span> 다양한 요금제를 둘러보세요.
              </p>
              <div className="btn-wrap">
                <a href="#" className="button brown">
                  요금제 보러가기
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 사용중인 요금제가 없을 경우 three-column class 추가 */}
        <div className="item three-column">
          {/* 요금제 더보기 배너일때 banner class 추가 */}
          <div className="card banner full-size">
            <div className="banner-wrap">
              <p className="text">
                <span className="text-block">나에게 알맞는</span> 다양한 요금제를 둘러보세요.
              </p>
              <div className="btn-wrap">
                <a href="#" className="button brown">
                  요금제 보러가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rate-plan-info-text">
        <span className="ico-refer hide-text">아이콘</span>
        <p className="text">
          정기구독 결제수단 추가 및 변경은
          <a href="#" className="text-link">
            플루닛 통합 브랜드사이트
          </a>
          에서 가능합니다.
        </p>
      </div>
    </>
  )
}

export default RatePlan
