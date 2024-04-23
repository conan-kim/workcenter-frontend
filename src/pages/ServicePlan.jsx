import { useState } from "react"
import PlanProduct from "./PlanProduct";
import PlanSubscribe from "./PlanSubscribe";

export function ServicePlan() {
  const [tabIndex, setTabIndex] = useState(1);
  return <>
    <div className="body-container service-plan">
      <div className="wrap">
        <div className="contents">
          <div className="title-box">
            <h3>
              <span className="en">Service Plan</span>
              <em>나에게 알맞는 플랜으로</em> 서비스 비용을 최적화하세요.
            </h3>
          </div>
          <div className="tab-payment-type">
            <button onClick={()=>setTabIndex(1)} className={tabIndex==1?"tab-item on":"tab-item"}>상품 요금제</button>
            <button onClick={()=>setTabIndex(2)} className={tabIndex==2?"tab-item on":"tab-item"}>구독 요금제</button>
          </div>
          <div className="sub-text align-c">
            모든 요금제 금액은 VAT 별도 금액입니다.
          </div>
          {/* 상품요금제 */}
          {
            tabIndex === 1?<PlanProduct />:false
          }
          {/* 구독요금제 */}
          {
            tabIndex === 2?<PlanSubscribe />:false
          }
        </div>
      </div>
    </div>
  </>
}

export default ServicePlan
