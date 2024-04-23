import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Footer() {
  const [isActive, setIsActive] = useState(false)
  const [isActive1, setIsActive1] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <footer className="footer">
      <div className="inner-wrap">
        <div className="foot-top">
          <ul className="foot-menu-list">
            <li>
              <Link to="#" className="foot-link">
                회사소개
              </Link>
            </li>
            <li>
              <Link to="#" className="foot-link">
                서비스 운영정책
              </Link>
            </li>
            <li>
              <Link to="#" className="foot-link">
                이용약관
              </Link>
            </li>
            <li>
              <Link to="#" className="foot-link">
                개인정보처리방침
              </Link>
            </li>
          </ul>
          <div className="foot-family">
            <button className={`foot-family-link ${isActive ? 'active' : ''}`} onClick={handleClick}>
              <span className="text">Family Site</span>
              <span className="ico-plus"></span>
            </button>
            <ul className={`family-more-list ${isActive ? 'active' : ''}`}>
              <li className="list">
                <Link to="#" target="_blank" title="새 창 열림" className="link">
                  플루닛 브랜드사이트
                </Link>
              </li>
              <li className="list">
                <Link to="#" target="_blank" title="새 창 열림" className="link">
                  플루닛 스튜디오
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="left-info">
            <div className="workcenter-text">
              <p className="text">PLOONET</p>
              <p className="text">WORKCENTER</p>
            </div>
            <div className="address-info">
              <div className="copy-list">
                <dl className="text-box">
                  <dt>사업자등록번호 :</dt>
                  <dd>451-81-02812</dd>
                </dl>
                <dl className="text-box">
                  <dt>통신판매허가번호 :</dt>
                  <dd>2022-서울강남-06647</dd>
                </dl>
                <dl className="text-box">
                  <dt>대표이사 :</dt>
                  <dd>이경일</dd>
                </dl>
              </div>
              <div className="copy-list">
                <p>06196 서울특별시 강남구 삼성로85길 39(대치동 895-1) 가리온빌딩 6F</p>
              </div>
              <div className="copy-list">
                <dl className="text-box">
                  <dt>고객센터</dt>
                  <dd>
                    <Link to="tel:1533-6116">1533-6116</Link>
                  </dd>
                </dl>
                <dl className="text-box">
                  <dt>FAX.</dt>
                  <dd>02-3402-0082</dd>
                </dl>
                <dl className="text-box">
                  <dt>E-mail.</dt>
                  <dd>
                    <Link to="mailto:support@ploonet.com">support@ploonet.com</Link>
                  </dd>
                </dl>
              </div>
            </div>
            <p className="copyright">Ⓒ 2023 Copyright 2022 PLOONET. All rights reserved.</p>
          </div>
          <div className="right-info">
            <div className="escrow">
              <img src="/assets/images/img-footer-escrow.png" alt="KB 에스크로 인증 이미지" />
            </div>
            <ul className="social-list">
              <li>
                <Link to="#" target="_blank" title="새 창 열림" className="ico ico-facebook">
                  <span className="hide-text">페이스북</span>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="새 창 열림" className="ico ico-blog">
                  <span className="hide-text">블로그</span>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="새 창 열림" className="ico ico-youtube">
                  <span className="hide-text">유투브</span>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" title="새 창 열림" className="ico ico-insta">
                  <span className="hide-text">인스타그램</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 20230621 Top버튼 추가 */}
      <div className="scroll-container">
        <button type="button" className={`popup-btn ${isActive1 ? 'close-btn' : ''}`}  onClick={() => setIsActive1((isActive1) => !isActive1)}>
          <i className="icon"></i>
          <span className="text">서비스<br />사전체험</span>
        </button>
        <div className={`service-popup ${isActive1 ? 'active' : ''}`} >
          <div className="pop-title">
            사용방법을 영상으로 확인해보세요
          </div>
          <div className="video-wrap">
            <video controls>
              <source src="/assets/video/231030_Workcenter_v1.mp4" type="video/mp4" />
            </video>
          </div>
          <a href="https://coffee-pressure-f38.notion.site/WORKCENTER-351974e6ba81435ebfafcd1f35bc0e1c?pvs=4" target='_blank' className="faq-link">워크센터 FAQ</a>
          <div className="info-wrap">
            <p className="text">더 궁금하신 내용은 전문 가이드에게 편하게 연락주세요</p>
            <p className="tel">070-4500-0078</p>
            <p className="mail">
              <a href="mailto:support.workcenter@ploonet.com">support.workcenter@ploonet.com</a>
              </p>
          </div>
        </div>
        <a type="button" className="scroll-top-button">
          Top
        </a>
      </div>
    </footer>
  )
}

export default Footer
