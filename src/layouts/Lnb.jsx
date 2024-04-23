import {Link, useHref} from 'react-router-dom'
import classNames from 'classnames'

function Lnb() {
  const uri = useHref()
  return (
    <>
      <div className="lnb-title-box">
        <h2 className="lnb-title">MyPage</h2>
      </div>
      <div className="user-info-box">
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
      <div className="my-menu-section">
        <ul>
          <li className={classNames('my-menu', {active: uri === '/mypage'})}>
            <Link to="/mypage" className="lnb-link">
              내 정보
            </Link>
          </li>
          <li className={classNames('my-menu', {active: uri.startsWith('/mypage/inquiry')})}>
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
    </>
  )
}

export default Lnb
