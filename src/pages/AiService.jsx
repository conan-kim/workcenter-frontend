import { useEffect, useRef, useState } from "react";

export function AiService() {
  // 현재 스텝
  const [currentStep, setCurrentStep] = useState(0);
  // 각 스텝 offset값
  let offsets = useRef([]);

  useEffect(()=>{
    const $steps = document.querySelectorAll('.motion-box');
    offsets.current = [];
    $steps.forEach((item)=>{
      offsets.current.push(item.offsetTop);
    })
    window.addEventListener('scroll', function(){
      if (offsets.current[0] * 0.3 < this.scrollY && this.scrollY < offsets.current[2]) {
        setCurrentStep(1)
      }
      if (offsets.current[1] * 0.7 <= this.scrollY && this.scrollY < offsets.current[3]) {
        setCurrentStep(2)
      }
      if (offsets.current[2] * 0.7 <= this.scrollY && this.scrollY < offsets.current[4]) {
        setCurrentStep(3)
      }
      if (offsets.current[3] * 0.7 <= this.scrollY) {
        setCurrentStep(4)
      }
      if (offsets.current[4] * 0.7 <= this.scrollY) {
        setCurrentStep(5)
      }
    })
  },[]);
  return (
    <>
      <div className="body-container ai-service">
        <div className="wrap">
          <div className="contents">
            <section className="section1">
              <span className="logo-icon"></span>
              <div className="title-box">
                전화 한 통, 기록 한 줄까지 <br />
                <em>어느 하나 놓치지 않는 AI비서</em>
              </div>
              <p className="text">
                내가 운전 중일때는 부재중 전화도 읽어주고 맛집,날씨,이런저런 대화도 하고 통화녹음도 해주고 <br />
                내 전화 내용도 기록해주는 이런 신기하고 똑똑한 비서, 대기업 사장님만 채용 가능하냐구요? <br />
                회원가입만 하면 여러분도 지금 바로 채용가능하세요!
                {/* 정식 출시 후 노출 */}
                {/* <a href="https://coffee-pressure-f38.notion.site/FAQ-f560dca4a250491ba905cdb4998da701" target="_blank" className="btn-link">손비서 사용법 알아보기</a> */}
              </p>
              <div className="banner-box">
                <p className="text">
                  <span>개인용 AI비서 모바일APP ‘손비서’</span>
                  <strong>클로즈 베타 테스터를 모집합니다!</strong>
                </p>
                <p className="sub-text">플루닛의 새로운 서비스를 가장 먼저 체험해보시고 풍성한 선물도 받아보세요</p>
                <div className="btns-wrap">
                  <a href="https://docs.google.com/forms/d/1D7yXOjiBpYNkzgjFyztIoulh6tNK9u0rl-vcd8L_Vmc/viewform?pli=1&pli=1&edit_requested=true" target="_blank">테스터 신청하기</a>
                  <a href="/" className="border-btn">자세히 보기</a>
                </div>
              </div>
              {/* 정식 출시 후 banner-box 교체 */}
              {/* <div className="banner-box">
                <p className="text">
                  <strong className="str">개인용 AI비서 모바일APP ‘손비서’</strong>
                  지금 바로 만나보세요!
                </p>
                <div className="btns-wrap">
                  <a href="/" className="store-btn apple">앱 스토어</a>
                  <a href="/" className="store-btn google">구글 플레이</a>
                </div>
              </div> */}
              <div className="img-box">
                <img src="/assets/images/ai-service-img/visual-img.png" alt="손비서 이미지" />
              </div>
            </section>
            <section className="section2">
              <div className="title-box">
                보이싱피싱, 스팸, 업무전화만 받기도 바쁜데 <br />
                <em>이제 손비서에게 맡기시고 스마트한 워라밸을 누려보세요</em>
              </div>
              <ul className={`icon-list motion-box ${currentStep > 0 ? 'active' : ''}`}>
                <li>
                  <img src="/assets/images/ai-service-img/icon01.png" alt="아이콘 이미지" />
                </li>
                <li>
                  <img src="/assets/images/ai-service-img/icon02.png" alt="아이콘 이미지" />
                </li>
                <li>
                  <img src="/assets/images/ai-service-img/icon03.png" alt="손비서" />
                </li>
                <li>
                  <img src="/assets/images/ai-service-img/icon04.png" alt="아이콘 이미지" />
                </li>
                <li>
                  <img src="/assets/images/ai-service-img/icon05.png" alt="아이콘 이미지" />
                </li>
              </ul>
            </section>

            <section className="section3">
              <div className={`motion-box ${currentStep > 1 ? 'active' : ''}`}>
                <div className="text-wrap">
                  <strong>
                    이제 아이폰 통화녹음도 OK <br />
                    텍스트로 읽기 쉽게
                  </strong>
                  <p>
                    손비서는 착신전환을 이용한 통화녹음 서비스로, 아이폰도 통화 녹음이 가능합니다.<br />
                    모든 통화 내용은 실시간으로 녹음되며 텍스트로도 변환되어 확인하실 수 있습니다.
                  </p>
                </div>
                <div className="img-box">
                  <img src="/assets/images/ai-service-img/motion-img01.png" alt="손비서 이미지" />
                </div>
              </div>
              <div className={`motion-box ${currentStep > 2 ? 'active' : ''}`}>
                <div className="img-box">
                  <img src="/assets/images/ai-service-img/motion-img02.png" alt="손비서 이미지" />
                </div>
                <div className="text-wrap">
                  <strong>
                    12명의 손비서가 <br />
                    채용을 기다리고 있습니다
                  </strong>
                  <p>
                    다양한 외형과 목소리를 가진 12명의 캐릭터 중 나의 스타일에 맞는 손비서를 선택하세요. <br />
                    실시간으로 나의 정보를 학습하여 맞춤 비서로 활용할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className={`motion-box ${currentStep > 3 ? 'active' : ''}`}>
                <div className="text-wrap">
                  <strong>
                    직접 연락하기 어려울 때, <br />
                    손비서가 대신 답장
                  </strong>
                  <p>
                    고객이 남긴 메모를 확인하고 바쁠 때나 연락이 어려울 때 손비서를 통해 <br />
                    문자나 전화로 즉시 답장 요청이 가능합니다.
                  </p>
                </div>
                <div className="img-box">
                  <img src="/assets/images/ai-service-img/motion-img03.png" alt="손비서 이미지" />
                </div>
              </div>
              <div className={`motion-box ${currentStep > 4 ? 'active' : ''}`}>
                <div className="img-box">
                  <img src="/assets/images/ai-service-img/motion-img04.png" alt="손비서 이미지" />
                </div>
                <div className="text-wrap">
                  <strong>
                    누구랑 무슨 대화를 했더라? <br />
                    기억나지 않는 내용은 통화 검색
                  </strong>
                  <p>
                    통화 내용이나 부재메시지 내용이 기억나지 않을 때는 <br />
                    검색 기능으로 원하는 구간을 다시 들어보거나 다운로드해보세요!
                  </p>
                </div>
              </div>
              <div className={`banner-box ${currentStep > 4 ? 'active' : ''}`}>
                <p className="text">
                  <strong className="str">개인용 AI비서 모바일APP ‘손비서’</strong>
                  지금 바로 만나보세요!
                </p>
                <div className="btns-wrap">
                  <a href="/" className="store-btn apple">테스터 신청하기</a>
                  <a href="/" className="store-btn google">자세히 보기</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiService
