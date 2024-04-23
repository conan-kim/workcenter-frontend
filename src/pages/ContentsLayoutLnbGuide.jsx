import Highlight from 'react-highlight'
import 'highlight.js/scss/vs2015.scss'

export function ContentsLayoutLnbGuide() {
  return (
    <>
      <Highlight>
        {`
{/* LNB 마크업 - 시작 */}
<div className="lnb-title-box">
  <h2 className="lnb-title">MyPage</h2>
</div>
<div className="user-info-box"> {/* User의 요금제 정보 노출란 */}
  <dl className="info-list">
    <dt className="info-title">사용 요금제</dt>
    <dd className="info-value">
      <Link to="/mypage/plan" className="rate-link">
        <span>99개</span>
        <span className="ico-arrow"></span>
      </Link>
    </dd>
  </dl>
  <dl className="info-list">
    <dt className="info-title">보유 크레딧</dt>
    <dd className="info-value">999,999,999</dd>
  </dl>
</div>
{/* LNB 메뉴 리스트 - 시작 */}
<div className="my-menu-section">
  <ul>
    <li className={classNames('my-menu', {active: uri === '/mypage'})}>
      <Link to="/mypage" className="lnb-link">
        내 정보
      </Link>
    </li>
    <li className={classNames('my-menu', {active: uri === '/mypage/inquiry'})}>
      <Link to="/mypage/inquiry" className="lnb-link">
        MY문의
      </Link>
    </li>
    <li className={classNames('my-menu', {active: uri === '/mypage/plan'})}>
      <Link to="/mypage/plan" className="lnb-link">
        요금제관리
      </Link>
    </li>
    <li className={classNames('my-menu', {active: uri === '/mypage/payment'})}>
      <Link to="/mypage/payment" className="lnb-link">
        결제내역
      </Link>
    </li>
    <li className={classNames('my-menu', {active: uri === '/mypage/credit'})}>
      <Link to="/mypage/credit" className="lnb-link">
        크레딧내역
      </Link>
    </li>
    <li className={classNames('my-menu', {active: uri === '/mypage/service-usage'})}>
      <Link to="/mypage/service-usage" className="lnb-link">
        서비스 사용내역
      </Link>
    </li>
  </ul>
</div>
{/* LNB 메뉴 리스트 - 끝 */}
{/* LNB 마크업 마크업 - 끝 */}

{/* 컨텐츠 마크업 따로 감싸서 진행 할 필요 없음 */}
{/* 컨텐츠 내 전체 감싸는 태그가 없을경우 */}
<>
  컨텐츠 시작
</>
        `}
      </Highlight>
    </>
  )
}
