import CountUp from '@/components/CountUp';
import imgAi from '/assets/images/home-img/img-main-02.png';
import { useEffect, useState } from 'react';
// import Swiper styles
import 'swiper/css';
// import required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import imgSlide01 from '/assets/images/home-img/slide-01.png';
import imgSlide02 from '/assets/images/home-img/slide-02.png';
import imgSlide03 from '/assets/images/home-img/slide-03.png';
import imgSlide04 from '/assets/images/home-img/slide-04.png';
import imgSlide05 from '/assets/images/home-img/slide-05.png';
import imgSlide06 from '/assets/images/home-img/slide-06.png';

export function Section01(){
  const [sceneIndex, setSceneIndex] = useState(1);
  useEffect(()=>{
    console.log('sceneIndex', sceneIndex);
    const next = setInterval(() => {
      setSceneIndex(sceneIndex+1);
    }, sceneIndex===1?3000:5000);
    if(sceneIndex > 2){
      clearInterval(next);
    }
    return ()=>clearInterval(next);
  },[sceneIndex])
  return(
    <section className="section-01">
      <div className={sceneIndex===1?"scene-01 show":"scene-01"}>
        <div className="catch-phrase">
          <span>May</span><img src={imgAi} alt="ai" className='img-ai'/><span>help you?</span>
        </div>
      </div>
      <div className={sceneIndex===2?"scene-02 show":"scene-02"}>
        <div className="timer">
          <div className="human">
            <div className="label">근로자 노동시간</div>
            <div className="days">1<span className='unit'>년</span> 252<span className='unit'>일</span></div>
            <div className="hours">2016<span className="unit">시간</span></div>
            <div className="off"><span className='fs-48'>휴식</span>252<span className='unit'>시간</span></div>
          </div>
          <div className="ai">
            <div className="label">AI직원 노동시간</div>
            <div className="days">1<span className='unit'>년</span> <span className='count'>{sceneIndex!==1&&<CountUp start={150} end={365} duration={5}/>}</span><span className='unit'>일</span></div>
            <div className="hours"><span className='count'>{sceneIndex!==1&&<CountUp start={7110} end={8760} duration={5}/>}</span><span className="unit">시간</span></div>
            <div className="off"><span className='fs-48'>휴식</span>0<span className='unit'>시간</span></div>
          </div>
        </div>
      </div>
      <div className={sceneIndex===3?"scene-03 show":"scene-03"}>
        <div className='title'>
          <p className='h2'>인공지능 직원을 채용해보세요.</p>
          <p className='h3'>24시간 365일 쉬지 않는 AI비서가 당신을 위해 일합니다.</p>
        </div>


        {sceneIndex===3&&<>
          <Swiper
            slidesPerView={'auto'}
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
              el: '.paging'
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="service-slide"
          >
            <SwiperSlide>
              <img src={imgSlide01} alt="리셉션니스트"/>
              <div className='descript'>
                <div className='category'>리셉션니스트</div>
                <p>방문 고객 관리, 회의실 안내, 방문자와 직원 연결과 메모<br/>ARS와  비전인식으로 자동 입출관리와 휴먼 연결까지 가능</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSlide02} alt="장애접수"/>
              <div className="descript">
                <div className="category">장애접수</div>
                <p>서비스 장애 발생 시 24시간 대응과 긴급 문의와 장애현상 별 <br/>상담접수를 통한 휴먼 상담사 연결까지 빠르고 속시원한 처리</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSlide03} alt="경영지원"/>
              <div className="descript">
                <div className="category">경영지원</div>
                <p>채용과 복지, 사규 안내, 각종 문서 발급 등 휴먼의 업무 처리에서 <br/>반복적인 기초 업무부터 업무 별 지원, 주주 상담과 IR관련 응대 자동화</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSlide04} alt="방문예약"/>
              <div className="descript">
                <div className="category">방문예약</div>
                <p>병원, 호텔, 맛집 예약을 간편하게 관리하고 잦은 노쇼까지 방지할 수 있도록<br/>비즈니스 마다 다른 프로세스를 선택하여 바로 응대 가능</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSlide05} alt="영업/텔레마케터"/>
              <div className="descript">
                <div className="category">영업/텔레마케터</div>
                <p>영업 문의와 전화 상담, 담당자 연결과 동시에 수천명, 수만명에게 동시 전화 영업 가능<br/>유입,잠재 고객 정보도 동시 관리하여 아웃바운드 마케팅까지 연계</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSlide06} alt="개인 비서"/>
              <div className="descript">
                <div className="category">개인 비서</div>
                <p>운전 중일 때, 회의 중일 때, 휴가 중일 때 걸려오는 전화나 부재 메시지를 한 통화도 <br/>놓치지 않고 나 대신 전화응대와 메모를 남겨주는 친절하고 똑똑한 나만의 AI 개인비서</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="paging"></div>
        </>
        }
      </div>
    </section>
  )
}
export default Section01