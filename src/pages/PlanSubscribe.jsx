function PlanSubscribe(){
  return(<>
    {/* 요금제 */}
    <div className="payment-list">
      <div className="grid col-3">
        <div className="payment-item">
          <div className="pay-name">베이직 플러스</div>
          <div className="pay-amount">30,000<span className="unit">원 x 12개월</span></div>
          <div className="credit">100,000</div>
          <div className="text">크레딧 지급</div>
          <div className="btn-wrap">
            <button type="button" className="button bd-brown">시작하기</button>
          </div>
        </div>
        <div className="payment-item">
          <div className="pay-name">프로페셔널 플러스</div>
          <div className="pay-amount">70,000<span className="unit">원 x 12개월</span></div>
          <div className="credit">200,000</div>
          <div className="text">크레딧 지급</div>
          <div className="btn-wrap">
            <button type="button" className="button bd-brown">시작하기</button>
          </div>
        </div>
        <div className="payment-item">
          <div className="pay-name">비즈니스 플러스</div>
          <div className="pay-amount">300,000<span className="unit">원 x 12개월</span></div>
          <div className="credit">1,000,000</div>
          <div className="text">크레딧 지급</div>
          <div className="btn-wrap">
            <button type="button" className="button bd-brown">시작하기</button>
          </div>
        </div>
        <div className="payment-item wide enterprise">
          <div className="left-side">
            <div className="pay-name">엔터프라이즈</div>
            <div className="catch-phrase">더 많은 혜택으로 시작해보세요!</div>
            <div className="description-plan">엔터프라이즈 요금제는 별도 문의 남겨주시면 상세한 안내와 가입을 도와드립니다.</div>
          </div>
          <div className="right-side">
            <button type="button" className="button">문의하기</button>
          </div>
        </div>
      </div>
    </div>
    {/* 플랜상세비교 */}
    <table className="plan-compare">
      <colgroup>
        <col style={{'width': 'auto'}}/>
        <col style={{'width': '250px'}}/>
        <col style={{'width': '250px'}}/>
        <col style={{'width': '250px'}}/>
      </colgroup>
      <thead className="">
        <tr>
          <th className="fc-brown">플랜 상세 비교</th>
          <th className="payment-name">베이직 플러스</th>
          <th className="payment-name">프로페셔널 플러스</th>
          <th className="payment-name">비지니스 플러스</th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td className="td">유∙무선전화 수/발신</td>
          <td className="td">300건</td>
          <td className="td">600건</td>
          <td className="td">3,000건</td>
        </tr>
        <tr className="">
          <td className="td">웹∙라이브챗 수/발신</td>
          <td className="td">300건</td>
          <td className="td">600건</td>
          <td className="td">3,000건</td>
        </tr>
        <tr className="">
          <td className="td">단문 SMS 발송(건) / 카카오 알림톡 발송(건)</td>
          <td className="td">600건</td>
          <td className="td">1,000건</td>
          <td className="td">6,000건</td>
        </tr>
        <tr className="">
          <td className="td">장문 LMS 발송(건) / 카카오 친구톡 발송(건)</td>
          <td className="td">300건</td>
          <td className="td">600건</td>
          <td className="td">3,000건</td>
        </tr>
        <tr className="">
          <td className="td">이메일 수/발신(건)</td>
          <td className="td">3,000</td>
          <td className="td">6,000건</td>
          <td className="td">30,000건</td>
        </tr>
      </tbody>
    </table>
    </>)
}
export default PlanSubscribe