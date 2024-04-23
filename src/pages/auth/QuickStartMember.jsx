export function QuickStartMember() {
  return (
    <section className="contents quick-start-join">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section medium">
          <div className="title-text-box">
            <h2 className="title3">
              워크센터를 <br />
              <strong className="title1">무료체험 해 보실 수 있어요!</strong>
            </h2>
          </div>

          <div className="box-wrap">
            <div className="box-layer">
              <div className="process-end-wrap">
                <div className="service-msg mt0">
                  워크센터를 정식 이용하시기 전에<br />
                  <strong>무료체험</strong> 해보시겠어요?
                </div>

                <div className="button-wrap type2">
                  <button type="button" className="button bd-brown">아니요</button>
                  <button type="button" className="button brown b-txt">네, 해볼래요</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
