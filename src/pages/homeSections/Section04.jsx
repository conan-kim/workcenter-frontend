import imgMain03 from '/assets/images/home-img/img-main-03.png';


export function Section04() {
  return (
    <section className="section-04">
      <div className="title">
        <span className="en">Strong Point</span>
        <h2>
          <em>워크센터,</em> 이런 점이 다릅니다!
        </h2>
      </div>
      <div className="strong-point">
        <ul className="circle-list">
          <li>
            <span>
              챗봇, AI 서비스 도입을 위한<br/>솔루션 설치 과정 없음
            </span>
          </li>
          <li>
            <span>
              구독형 SaaS 방식으로<br/>가입 후 바로 실무 적용 가능
            </span>
          </li>
          <li>
            <span>
              적용 즉시 <br/>오버플로우 콜 제거 가능
            </span>
          </li>
          <li>
            <span>
              순차적 단계별 <br/>업무 확대 가능
            </span>
          </li>
        </ul>
        <div className="ellipis">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="strong-point-phrase">
          <p className='fc-ivory'>AI 솔루션을 도입하기 위한 <em>사전 준비 단계 시간 불필요</em></p>
          <p className='fc-white'><span className='fc-dark'>업무 적용을 위한 장시간의 구축과 학습시간 없이 </span><br />AI 직원 채용과 상담 환경 설정으로 지금 바로 사용 가능!</p>
        </div>
      </div>
    </section>
  )
}
export default Section04