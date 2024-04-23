import Highlight from 'react-highlight'
import 'highlight.js/scss/vs2015.scss'

export function ContentsLayoutGuide() {
  return (
    <section className="contents">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section small">
          <div className="title-text-box">
            <h2 className="title1">타이틀</h2>
            <p className="description-text">설명문구</p>
          </div>
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-top border-bottom">
                {/* title-text-box가 없는 경우 h2 태그로 수정 */}
                <h3 className="title1">타이틀</h3>
                <p className="box-info-txt">문구</p>
                <p className="box-info-txt">문구</p>
              </div>
              <div className="box-cont">컨텐츠</div>
              <div className="button-wrap">
                <button type="button" className="button bd-brown">
                  버튼영역
                </button>
              </div>
            </div>
            <div className="button-wrap">
              <button type="button" className="button brown">
                버튼영역
              </button>
            </div>
          </div>
        </div>
      </div>

      <Highlight>
        {`
{/* box형 레이아웃 마크업 - 시작 */}
<section className="contents">
  <div className="contents-wrap">
    <div className="contents-section small"> {/* 컨텐츠 사이즈 small:600px, medium:800px, lage:1200px, x-lage:1600px */}
      <div className="title-text-box"> {/* 컨텐츠가 없는 경우 삭제 */}
        <h2 className="title1">타이틀</h2>
        <p className="description-text">설명문구</p>
      </div>
      <div className="box-wrap">
        <div className="box-layer"> {/* box 내 컨텐츠의 시작 지점 */}
          <div className="box-top border-bottom">
            {/* title-text-box가 없는 경우 h2 태그로 수정 */}
            <h3 className="title1">타이틀</h3>
            <p className="box-info-txt">문구</p>
            <p className="box-info-txt">문구</p>
          </div>
          <div className="box-cont">컨텐츠</div>
          {/* box 내 버튼이 있을 경우 */}
          <div className="button-wrap">
            <button type="button" className="button bd-brown">버튼영역</button>
          </div>
        </div>
        </div>
        {/* box 밖 버튼이 있을 경우 */}
        <div className="button-wrap">
          <button type="button" className="button brown">버튼영역</button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* box형 레이아웃 마크업 - 끝 */}
        `}
      </Highlight>
    </section>
  )
}
