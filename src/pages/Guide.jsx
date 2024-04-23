import { useEffect, useRef, useState } from "react";
import imgStep01Slot01 from '/assets/images/guide-img/img-step-01-slot-01.png';
import imgStep01Slot02 from '/assets/images/guide-img/img-step-01-slot-02.png';
import imgStep01Slot03 from '/assets/images/guide-img/img-step-01-slot-03.png';
import imgStep01Slot04 from '/assets/images/guide-img/img-step-01-slot-04.png';

import imgStep02Slot01 from '/assets/images/guide-img/img-step-02-slot-01.png';
import imgStep02Slot02 from '/assets/images/guide-img/img-step-02-slot-02.png';
import imgStep02Slot03 from '/assets/images/guide-img/img-step-02-slot-03.png';

import imgStep03Slot01 from '/assets/images/guide-img/img-step-03-slot-01.png';
import imgStep03Slot02 from '/assets/images/guide-img/img-step-03-slot-02.png';
import imgStep03Slot03 from '/assets/images/guide-img/img-step-03-slot-03.png';

export function Guide() {
  // 현재 스텝
  const [currentStep, setCurrentStep] = useState(1);
  // 각 스텝 offset값
  let offsets = useRef([]);
  

  function anchor (index){
    setTimeout(function(){
      setCurrentStep(index)
    }, 700);
  }
  useEffect(()=>{
    const $steps = document.querySelectorAll('.step-wrap');
    offsets.current = [];
    $steps.forEach((item, index)=>{
      offsets.current.push(item.offsetTop);
    })
    window.addEventListener('scroll', function(){
      const adjustment = 5;
      if( this.scrollY > offsets.current[0] &&  offsets.current[1] - adjustment > this.scrollY){
        setCurrentStep(1)
      } else if( offsets.current[1] <= this.scrollY && this.scrollY < offsets.current[2] ){
        setCurrentStep(2)
      } else if( offsets.current[2] <= this.scrollY ){
        setCurrentStep(3)
      }
    })
  },[]);
  return <>
    <div className="body-container guide">
      <div className="wrap">
        <div className="contents">
          <div className="title-box">
            <h3>
              <span className="en">Use Guide</span>
              워크센터 <em>이용가이드</em>
            </h3>
          </div>
          <div className="how-to-use">
            <div className="guide-lnb">
              <ul>
                <li className={currentStep === 1? "current":""}>
                  <a href="#step1" onClick={()=>anchor(1)}>
                    <span className="title">Step 1</span>
                    <span className="text">AI직원을 채용해보세요.</span>
                  </a>
                </li>
                <li className={currentStep === 2? "current":""}>
                  <a href="#step2" onClick={()=>anchor(2)}>
                    <span className="title">Step 2</span>
                    <span className="text">상담을 위한 설정이 필요해요.</span>
                  </a>
                </li>
                <li className={currentStep === 3? "current":""}>
                  <a href="#step3" onClick={()=>anchor(3)}>
                    <span className="title">Step 3</span>
                    <span className="text">상담을 시작해볼까요?</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="guide-steps">
              <div id="step1" className="step-wrap">
                <div className="step-header">
                  <div className="step">
                    Step 1
                  </div>
                  <div className="description">나 대신 응대해주는 AI직원을 채용해볼까요?</div>
                </div>
                <div className="step-body">
                  <div className="slot ltr">
                    <div className="slot-img">
                      <img src={imgStep01Slot01} alt="직무선택 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        직무∙업무
                      </div>
                      <div className="title">
                        채용하실 AI직원의<br/> 직무를 선택해 주세요.
                      </div>
                      <div className="sub-text">
                        나 대신 전화를 받아주는 AI직원이 수행할 직무를 선택해 주세요. 선택하신 직무에 따라 AI직원이 처리할 수 있는 업무 종류가 다르게 제공됩니다.
                      </div>
                    </div>
                  </div>
                  <div className="slot rtl">
                    <div className="slot-img">
                      <img src={imgStep01Slot02} alt="업무선택 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        업무 메뉴얼
                      </div>
                      <div className="title">
                        업무를 선택하시고, <br/>업무 매뉴얼을 설정해 주세요.
                      </div>
                      <div className="sub-text">
                        선택한 직무와 업무에 따라 상세한 업무 매뉴얼이 다르게 제공됩니다. 여러 개의 업무를 선택할 수 있고, AI직원은 설정한 업무 매뉴얼에 따라 대응할 수 있어요.
                      </div>
                    </div>
                  </div>
                  <div className="slot ltr">
                    <div className="slot-img">
                      <img src={imgStep01Slot03} alt="근무시간선택 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        근무 요일∙시간
                      </div>
                      <div className="title">
                        AI직원이 근무해야하는 <br/>요일과 시간을 설정해 주세요.
                      </div>
                      <div className="sub-text">
                        설정하신 요일과 시간에 AI직원이 대신 전화를 받아줍니다. 설정하신 근무시간 외에 전화를 하실 경우 연결된 담당자와 상담을 진행할 수도 있습니다.
                      </div>
                    </div>
                  </div>
                  <div className="slot rtl">
                    <div className="slot-img">
                      <img src={imgStep01Slot04} alt="테스트 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        인터뷰
                      </div>
                      <div className="title">
                        채용완료 전에 설정하신 업무와 정보를 <br/>AI직원이 잘 이해했는지 테스트해보세요.
                      </div>
                      <div className="sub-text">
                        설정한 AI직원에게서 전화가 오면 인터뷰를 진행해 주세요. 적용한 업무 매뉴얼에 만족하시면 채용을 완료해주세요. 만족스럽지 않으시면, 이전 단계로 돌아가서 수정하실 수 있습니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="step2" className="step-wrap">
                <div className="step-header">
                  <div className="step">
                    Step 2
                  </div>
                  <div className="description">효율적인 상담을 위해 필요한 설정을 해볼까요?</div>
                </div>
                <div className="step-body">
                  <div className="slot ltr">
                    <div className="slot-img">
                      <img src={imgStep02Slot01} alt="담당자설정 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        담당자 설정
                      </div>
                      <div className="title">
                      AI직원과 연결된 <br/>담당자를 설정해주세요.
                      </div>
                      <div className="sub-text">
                        담당자란 AI직원이 상담을 처리하지 못할 경우 연결되는 상담사를 뜻해요. AI직원을 응대하는 담당자가 본인이 아니라면 직접 등록하실 수 있어요.
                      </div>
                    </div>
                  </div>
                  <div className="slot rtl">
                    <div className="slot-img">
                      <img src={imgStep02Slot02} alt="착신번호설정 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        착신번호 설정
                      </div>
                      <div className="title">
                        착신번호를 설정해주세요.
                      </div>
                      <div className="sub-text">
                      사용자에게 전화를 걸 경우 AI직원으로 우선 연결되는 착신번호를 설정하셔야 이용이 가능합니다.
                      </div>
                    </div>
                  </div>
                  <div className="slot ltr">
                    <div className="slot-img">
                      <img src={imgStep02Slot03} alt="전화번호설정 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        발신번호 설정
                      </div>
                      <div className="title">
                        고객에게 발신 시 안내될 <br/>전화번호를 설정해주세요.
                      </div>
                      <div className="sub-text">
                        마케팅 기능을 통해 고객에게 먼저 메시지나 안내전화를 할 수 있습니다. 고객에게 마케팅 채널인 문자 또는 안내전화를 발송 시 설정한 발신번호로 보여집니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="step3" className="step-wrap">
                <div className="step-header">
                  <div className="step">
                    Step 3
                  </div>
                  <div className="description">상담을 시작해볼까요?</div>
                </div>
                <div className="step-body">
                  <div className="slot ltr">
                    <div className="slot-img">
                      <img src={imgStep03Slot01} alt="상담 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        고객 상담
                      </div>
                      <div className="title">
                        고객이 전화를 걸어 <br/>AI직원과 상담을 시작해요.
                      </div>
                      <div className="sub-text">
                        설정하신 업무와 정보를 기반으로 적절하게 응대하여 상담을 진행합니다. AI직원이 해결하지 못하는 업무는 담당자와 연결할 수 있습니다.
                      </div>
                    </div>
                  </div>
                  <div className="slot rtl">
                    <div className="slot-img">
                      <img src={imgStep03Slot02} alt="워크플러스앱 이미지" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        워크플러스
                      </div>
                      <div className="title">
                        담당자는 워크플러스 앱을 통해 자신에게 지정된 상담을 확인할 수 있어요.
                      </div>
                      <div className="sub-text">
                        담당자의 현재 업무 상태에 따라 상담 전화를 바로 받거나 문자 또는 알림톡으로 알림을 받을 수 있습니다.
                        <span>*워크플러스 앱에서 현재 업무 상태를 변경할 수 있습니다.</span>
                      </div>
                    </div>
                  </div>
                  <div className="slot ltr">
                    <div className="slot-img">
                      <img src={imgStep03Slot03} alt="워크플레이스앱 이미지02" />
                    </div>
                    <div className="text-wrap">
                      <div className="category">
                        워크플레이스
                      </div>
                      <div className="title">
                        워크플레이스에서 <br/>상담을 해결해볼까요?
                      </div>
                      <div className="sub-text">
                        워크플레이스에서는 AI직원과 담당자가 상담한 내역을 익숙하신 채팅 형태와 녹취 파일로 제공되어 확인할 수 있습니다. 현재 상담을 진행하고 있는 AI직원과 담당자 현황을 한 눈에 파악할 수 있고, 상세 상담 분석 데이터를 확인하실 수 있습니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lets-start">
        <div className="wrap">
          <div className="contents">
            <p className="catch-phrase">
              더 효율적인 상담을 위해 <em>워크센터를 시작해보세요!</em>
            </p>
            <div className="button-group">
              <button type="button" className="button white">
                시작하기
              </button>
              <button type="button" className="button bg-white">
                문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Guide
