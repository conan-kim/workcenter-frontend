import { useEffect, useRef, useState } from 'react';
import iconFlow01 from '/assets/images/home-img/icon-flow-01.png';
import iconFlow02 from '/assets/images/home-img/icon-flow-02.png';
import iconFlow03 from '/assets/images/home-img/icon-flow-03.png';
import iconFlow04 from '/assets/images/home-img/icon-flow-04.png';
import iconFlow05 from '/assets/images/home-img/icon-flow-05.png';
import iconFlow06 from '/assets/images/home-img/icon-flow-06.png';


export function Section05() {
  const IconSet = () => {
    return(<>
      <div className="icon">
        <img src={iconFlow01} alt="사람 아이콘"/>
      </div>
      <div className="icon">
        <img src={iconFlow02} alt="사람 아이콘"/>
      </div>
      <div className="icon">
        <img src={iconFlow03} alt="사람 아이콘"/>
      </div>
      <div className="icon">
        <img src={iconFlow04} alt="사람 아이콘"/>
      </div>
      <div className="icon">
        <img src={iconFlow05} alt="사람 아이콘"/>
      </div>
      <div className="icon">
        <img src={iconFlow06} alt="사람 아이콘"/>
      </div>
    </>)
  }
  return (
    <section className="section-05">
      <div className="float-wrap">
        {/* <div className="float-icons" style={{'transform':`translateX(${offset}px)`}}> */}
        <div className="float-icons">
          <IconSet />
          <IconSet />
          <IconSet />
          <IconSet />
        </div>
      </div>
      <h2>
        지금 바로 워크센터와 함께 하세요!
      </h2>
      <div className="sub-text">
        플루닛 워크센터의 기술과 서비스, 제휴 관련 궁금한 사항이 있으시다면 문의를 남겨주세요.
      </div>
      <div className="btn-wrap">
        <button className='button brown'>문의하기</button>
      </div>
    </section>
  )
}
export default Section05