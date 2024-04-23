import { useState } from "react";

import imgMain03 from '/assets/images/home-img/img-main-03.png';
import iconArrow from '/assets/images/home-img/icon-arrow-bridge.png';


export function Section03() {
  return (
    <section className="section-03">
      <div className="title">
        <span className="en">Core Technology 01</span>
        <h2>
          <em>국내 유일의 옴니채널 서비스 플랫폼</em> 자체 개발∙상용화
        </h2>
      </div>
      <div className="core-tech-01">
        <div className="tech-table">
          <div className="division">
            <div className="th">Front CH</div>
            <div className="td">
              <span className="tech-name">Digital Channel</span>
              <span className="text">문자・알림톡・메일<br />채팅・SNS・키오스크</span>
            </div>
            <div className="td">
              <div className="tech-name">Voice Channel</div>
              <div className="text">IPCC・IPT・Centrix<br/>PSTN・VoIP・WebRTC</div>
            </div>
          </div>

          <div className="arrow-bridge step-1">
            <img src={iconArrow} alt="화살표 아이콘" />
            <img src={iconArrow} alt="화살표 아이콘" />
          </div>

          <div className="division">
            <div className="th">Omni-CH Platform</div>
            <div className="td rowspan-2">
              <span className="text">
                Omni-CH G/W<br/>
                REC<br/>
                ACS<br/>
                PBX<br/>
                VGW
              </span>
            </div>
          </div>

          <div className="arrow-bridge step-2">
            <img src={iconArrow} alt="화살표 아이콘" />
          </div>

          <div className="division wide">
            <div className="th">AI Customer Engagement Platform</div>
            <div className="td colspan-2 long-type">
              <span className="tech-name fc-brown">자동학습 (MLOps)</span>
              <div className="box">
                <div className="item">
                  <span className="category">Voice Studio</span>
                  <div className="text">
                    음성 인식<br/>
                    음성 합성<br/>
                  </div>
                </div>
                <div className="item">
                  <span className="category">Language Studio</span>
                  <div className="text">
                    언어 학습<br/>
                    언어 모델
                  </div>
                </div>
                <div className="item">
                  <span className="category">Talkbot Studio</span>
                  <div className="text">
                    대화 관리<br/>
                    시나리오 빌더
                  </div>
                </div>
              </div>
            </div>
            <div className="td-group">
              <div className="td short-type">
                <span className="tech-name">Metahuman Studio</span>
                <div className="text">카툰형 생성형 실사형</div>
              </div>
              <div className="td short-type">
                <span className="tech-name">외부연계 인터페이스</span>
                <div className="text">API G/W Plug-in</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="title">
        <span className="en">Core Technology 02</span>
        <h2>
          다자간 전화 통화, 문자 발송, 카톡 상담, 메일 발송 등의<br />
          <em>실시간 멀티 대응 가능</em>
        </h2>
      </div>
      <div className="core-tech-02">
        <img src={imgMain03} alt="실시간 멀티대응가능 설명 이미지" />
      </div>

    </section>
  )
}
export default Section03