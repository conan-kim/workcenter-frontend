import {useState} from 'react'
import {Link} from 'react-router-dom'
import MyInquiryWeb from '@/pages/mypage/MyInquiryWeb'
import MyInquiryPhone from '@/pages/mypage/MyInquiryPhone'

export function MyInquiry() {
  // 탭 구분 (W 웹문의, P 전화문의)
  const [tabs, setTabs] = useState('W')

  return (
    <>
      <div className="ploonian-banner">
        <div className="left-cont">
          <div className="user-box">
            <img src="/assets/images/ploonian-complete-face.png" alt="플루니안 이미지" />
          </div>
          <div className="info-box">
            <h3 className="title2">홍길동님의 플루니안 앨리스입니다.</h3>
            <p className="description">
              플루닛 서비스 이용 중 궁금한 것, 도움이 필요한 것을 언제든 문의해주세요. <br />
              전화는 24시간 당신을 위해 대기하고 있어요.
            </p>
            <dl className="tel-info">
              <dt className="title">앨리스 전화번호</dt>
              <dd className="text">070-1233-4567</dd>
            </dl>
          </div>
        </div>
        <div className="right-cont">
          <Link to="/mypage/inquiry-write" className="button brown">
            문의글 남기기
          </Link>
        </div>
      </div>
      {tabs === 'W' ? <MyInquiryWeb handleTabs={setTabs} /> : <MyInquiryPhone handleTabs={setTabs} />}
    </>
  )
}

export default MyInquiry
