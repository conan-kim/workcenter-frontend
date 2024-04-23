import {useState} from 'react'
import {Pagination} from '@/components/Pagination'

export function Credit() {
  // select option 박스
  const [selectLabel, setSelectLabel] = useState('구분 전체')
  const [selectLabel2, setSelectLabel2] = useState('3개월')
  const [selectList, setSelectList] = useState(['전체', '지급', '사용', '소멸'])
  const [selectList2, setSelectList2] = useState(['3개월', '6개월', '12개월', '전체'])
  const [showSelect, setShowSelect] = useState(false)
  const [showSelect2, setShowSelect2] = useState(false)

  const toggleSelect = () => setShowSelect((prev) => !prev)
  const toggleSelect2 = () => setShowSelect2((prev) => !prev)
  const changeLabel = (e) => {
    const {innerText} = e.target
    setSelectLabel(innerText)
    setShowSelect(false)
  }
  const changeLabel2 = (e) => {
    const {innerText} = e.target
    setSelectLabel2(innerText)
    setShowSelect2(false)
  }

  const listItems = [
    {
      id: 1,
      title: '무선 통화 발신',
      creditPay: '- 3,000',
      creditDate: '2023.02.20 14:30:25',
      creditStatus: '사용'
    },
    {
      id: 2,
      title: '상품 요금제 구매 (베이직)',
      creditPay: '- 60,000',
      creditDate: '2023.02.20 14:30:25',
      creditStatus: '사용'
    },
    {
      id: 3,
      title: '구독 요금제 구매 (베이직 플러스)',
      creditPay: '- 60,000',
      creditDate: '2023.02.20 14:30:25',
      creditStatus: '사용'
    }
  ] // 테스트 데이터

  // 테스트 페이징 데이터
  const [pagination, setPagination] = useState({
    tcnt: 343, // 전체 데이터 카운트
    page: 17, // 현재 페이지 (페이지 인덱스는 0 부터)
    size: 5, // 표시할 데이터 사이즈 (기본 10)
    psiz: 5, // 표시할 페이지 사이즈 (기본 10)
    // 페이지 이동 함수 (페이지 인덱스는 0 부터)
    move(page) {
      console.log('move', page)
      // TODO ...
      setPagination({...pagination, page})
    }
  })

  return (
    <div className="board-wrap">
      <div className="board-head">
        <h3 className="title2">크레딧내역</h3>
        <div className="fillter">
          <div className="box">
            {/* 20230615 type1 클래스명 추가 */}
            <div className="select-box type1">
              <button type="button" onClick={toggleSelect} className="label">
                {selectLabel}
              </button>
              {showSelect && (
                <ul className="option">
                  {selectList.map((item) => (
                    <li onClick={changeLabel} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="box small">
            {/* 20230615 type1 클래스명 추가 */}
            <div className="select-box type1">
              <button type="button" onClick={toggleSelect2} className="label">
                {selectLabel2}
              </button>
              {showSelect2 && (
                <ul className="option">
                  {selectList2.map((item) => (
                    <li onClick={changeLabel2} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="board-body history-board credit">
        <div className="board-body-head">
          <div className="left-cont">
            <div className="col-xl align-left">크레딧 사용 상세</div>
          </div>
          <div className="right-cont">
            <div className="col-l credit-pay">크레딧</div>
            <div className="col-xxl credit-date">일시</div>
            <div className="col-s">상태</div>
          </div>
        </div>
        <div className="board-content-wrap">
          <ul className="board-list">
            {listItems.map((item) => (
              <li className="list" key={item.id}> {/* 지급일 경우 pay-active class 추가 */}
                <div className="left-cont">
                  <strong className="col-xl title">{item.title}</strong>
                </div>
                <div className="right-cont">
                  <div className="col-l credit-pay">{item.creditPay}</div>
                  <div className="col-xxl credit-date">{item.creditDate}</div>
                  <strong className="col-s credit-status">{item.creditStatus}</strong>
                </div>
              </li>
            ))}
          </ul>
          <Pagination {...pagination} />
        </div>
      </div>
    </div>
  )
}

export default Credit
