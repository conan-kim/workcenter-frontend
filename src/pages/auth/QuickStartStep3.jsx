import {useState} from 'react'
export function QuickStartStep3() {
  // 비밀번호 눈
  const [pwType, setpwType] = useState({
    type: 'password',
    visible: false
  })
  const handlePasswordType = () => {
    setpwType(() => {
      if (!pwType.visible) {
        return {type: 'text', visible: true}
      } else {
        return {type: 'password', visible: false}
      }
    })
  }
  return (
    <section className="contents quick-start-join">
      <div className="contents-wrap">
        {/* 컨텐츠 사이즈 small, medium, lage, x-lage */}
        <div className="contents-section medium">
          <div className="title-text-box">
            <h2 className="title3">
              이제 고객님의 전용 AI직원과 <br />
              <strong className="title1">대화하실 수 있어요!</strong>
            </h2>
          </div>

          <div className="box-wrap">
            {/* process breadcrumb */}
            <ul className="page-breadcrumb">
              <li>
                <span>간편계정 만들기</span>
              </li>
              <li>
                <span>약관동의</span>
              </li>
              <li className="on">
                <span>AI직원 대화 시작</span>
              </li>
            </ul>

            <div className="box-layer">
              <div className="process-end-wrap">
                <div className="round-line-box">
                  <p className="info-msg">
                    김정희님을 위한 AI와 전용 전화번호가 지금 바로 만들어졌어요! <br />
                    무료 1개월간 마음껏 사용해 보세요
                  </p>
                  <p className="info-tel">070-4500-0018</p>
                </div>

                <div className="service-msg">
                  위 알려드린 고객님만을 위한 전화번호로 전화를 하시면 <br />
                  고객님의 정보를 학습한 <strong>AI와 지금 바로 자유로운 대화</strong>가 가능합니다.
                </div>

                <div className="button-wrap">
                  <button type="button" className="button bd-brown">
                    워크센터 둘러보기
                  </button>
                  <button type="button" className="button brown">
                    나의 AI 확인
                  </button>
                </div>

                <div className="notice-wrap">
                  <p className="title">꼭 알고 계셔야 해요!</p>
                  <ul className="list-type-normal">
                    <li>
                      플루닛 워크센터의 ‘무료시작하기’ 서비스의 AI직원과 전용 전화번호는 생성 후 1개월만 무료 사용이 가능해요.
                    </li>
                  </ul>
                </div>

                <div className="round-bg-box">
                  <ul className="list-type-bullet">
                    <li>
                      유료기능 사전 체험하기 <br />
                      플루닛의 전문 가이드에게 전화하시면 유료 사용을 위한 모든 준비를 도와 드립니다.

                      <p className="helper-tel">
                        워크센터 전문 가이드 : <span className="tel">02-1533-6117</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
