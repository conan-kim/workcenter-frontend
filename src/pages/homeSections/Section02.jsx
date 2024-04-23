import { useState } from "react";

import imgAcc01sq01 from '/assets/images/home-img/img-acc-01-sq-01.png';
import imgAcc01sq02 from '/assets/images/home-img/img-acc-01-sq-02.png';
import imgAcc01sq03 from '/assets/images/home-img/img-acc-01-sq-03.png';

import imgAcc02sq01 from '/assets/images/home-img/img-acc-02-sq-01.png';
import imgAcc02sq02 from '/assets/images/home-img/img-acc-02-sq-02.png';

import imgAcc03sq01 from '/assets/images/home-img/img-acc-03-sq-01.png';
import imgAcc03sq02 from '/assets/images/home-img/img-acc-03-sq-02.png';

import imgAcc04sq01 from '/assets/images/home-img/img-acc-04-sq-01.png';
import imgAcc04sq02 from '/assets/images/home-img/img-acc-04-sq-02.png';
import imgAcc04sq03 from '/assets/images/home-img/img-acc-04-sq-03.png';
import imgAcc04sq04 from '/assets/images/home-img/img-acc-04-sq-04.png';

import imgAcc05sq01 from '/assets/images/home-img/img-acc-05-sq-01.png';
import imgAcc05sq02 from '/assets/images/home-img/img-acc-05-sq-02.png';
import imgAcc05cl01 from '/assets/images/home-img/img-acc-05-cl-01.png';

import imgAcc06sq01 from '/assets/images/home-img/img-acc-06-sq-01.png';
import imgAcc06sq02 from '/assets/images/home-img/img-acc-06-sq-02.png';

export function Section02(){
  // 아코디언 현재 펼침 
  const [accIndex, setAccIndex] = useState(1);
  
  function handleAccordion(idx){
    setAccIndex(idx);
  }
  return(
    <section className="section-02">
      <div className="title">
        <span className="en">Main Function</span>
        <h2>
          <em>워크센터,</em> 어떤 기능이 있나요?
        </h2>
      </div>

      <div className="main-functions">
        <div className="function-list">
          <div className={accIndex === 1?"item on":"item"}>
            <div className="toggle" onClick={()=>handleAccordion(1)}>
              <span className="toggle-text">AI 직원 채용</span>
            </div>
            <div className="desc">
              다양한 직무에 맞는 선택 가능 업무 매뉴얼 제공<br />설정된 업무에 대한 AI 직원 스킬 즉시 확인 가능
            </div>
          </div>
          <div className={accIndex === 2?"item on":"item"}>
            <div className="toggle" onClick={()=>handleAccordion(2)}>
              <span className="toggle-text">실시간 고객정보와 상담이력 확인</span>
            </div>
            <div className="desc">
              수신 연락처를 기반으로 고객의 상담 이력 확인 가능<br/>고객정보를 통한 아웃바운드 연계 지원
            </div>
          </div>
          <div className={accIndex === 3?"item on":"item"}>
            <div className="toggle" onClick={()=>handleAccordion(3)}>
              <span className="toggle-text">즉시 상담 가능한 환경 세팅과 설정</span>
            </div>
            <div className="desc">
              회원가입과 AI 직원 설정<br/>상담 채널과 환경 세팅 후 상담 즉시 시작 가능
            </div>
          </div>
          <div className={accIndex === 4?"item on":"item"}>
            <div className="toggle" onClick={()=>handleAccordion(4)}>
              <span className="toggle-text">상담현황 실시간 리포트</span>
            </div>
            <div className="desc">
              상담 현황과 AI 직원, 휴먼 직원의 업무 현황을 <br/>한 눈에 파악할 수 있는 통계 데이터 실시간 제공
            </div>
          </div>
          <div className={accIndex === 5?"item on":"item"}>
            <div className="toggle" onClick={()=>handleAccordion(5)}>
              <span className="toggle-text">대량∙단일 아웃바운드 마케팅 지원</span>
            </div>
            <div className="desc">
              대량/ 단건 선택 가능한 메시지 발송 기능<br/>캠페인 또는 상담중 개별 이슈 발생 시 활용 가능한 마케팅 지원
            </div>
          </div>
          <div className={accIndex === 6?"item on":"item"}>
            <div className="toggle" onClick={()=>handleAccordion(6)}>
              <span className="toggle-text">빠르고 편하게 서비스 이용 가능</span>
            </div>
            <div className="desc">
              요금 결제를 통해 부여된 크레딧으로 다양한 플루닛 서비스 이용 가능<br />필요할때 언제든 다양한 업무 추가 선택 용이
            </div>
          </div>
        </div>
        <div className="img-area">
          <div className={accIndex === 1 ? "img-slot acc01 on":"img-slot acc01"}>
            <img src={imgAcc01sq01} className="sq01" alt="채용과정 이미지"/>
            <img src={imgAcc01sq02} className="sq02" alt="채용과정 이미지2"/>
            <img src={imgAcc01sq03} className="sq03" alt="채용과정 이미지3"/>
            <div className="circle"></div>
          </div>
          <div className={accIndex === 2 ? "img-slot acc02 on":"img-slot acc02"}>
            <img src={imgAcc02sq01} className="sq01" alt="상담화면 이미지"/>
            <img src={imgAcc02sq02} className="sq02" alt="상담화면 이미지2"/>
            <div className="circle lg"></div>
            <div className="circle sm"></div>
          </div>
          <div className={accIndex === 3 ? "img-slot acc03 on":"img-slot acc03"}>
            <img src={imgAcc03sq01} className="sq01" alt="환경설정 이미지"/>
            <img src={imgAcc03sq02} className="sq02" alt="환경설정 이미지2"/>
            <div className="circle lg"></div>
            <div className="circle sm"></div>
          </div>
          <div className={accIndex === 4 ? "img-slot acc04 on":"img-slot acc04"}>
            <img src={imgAcc04sq01} className="sq01" alt="실시간 리포트 이미지"/>
            <img src={imgAcc04sq02} className="sq02" alt="실시간 리포트 이미지"/>
            <img src={imgAcc04sq03} className="sq03" alt="실시간 리포트 이미지"/>
            <img src={imgAcc04sq04} className="sq04" alt="실시간 리포트 이미지"/>
            <div className="circle lg"></div>
            <div className="circle sm"></div>
          </div>
          <div className={accIndex === 5 ? "img-slot acc05 on":"img-slot acc05"}>
            <img src={imgAcc05sq01} className="sq01" alt="마케팅 기능 이미지"/>
            <img src={imgAcc05sq02} className="sq02" alt="마케팅 기능 이미지"/>
            <img src={imgAcc05cl01} className="cl01" alt="마케팅 기능 이미지"/>
            <div className="circle lg"></div>
            <div className="circle sm"></div>
          </div>
          <div className={accIndex === 6 ? "img-slot acc06 on":"img-slot acc06"}>
            <img src={imgAcc06sq01} className="sq01" alt="마케팅 기능 이미지"/>
            <img src={imgAcc06sq02} className="sq02" alt="마케팅 기능 이미지"/>
            <div className="circle lg"></div>
            <div className="circle sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section02