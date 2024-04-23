import {useState} from 'react'
import {Pagination} from '@/components/Pagination'

export function PaymentDetail() {
  // select option 박스
  const [selectLabel, setSelectLabel] = useState('요금제 전체')
  const [selectLabel2, setSelectLabel2] = useState('결제상태 전체')
  const [selectLabel3, setSelectLabel3] = useState('3개월')
  const [selectList, setSelectList] = useState(['전체', '구독', '상품'])
  const [selectList2, setSelectList2] = useState(['전체', '결제완료', '결제취소', '취소예정'])
  const [selectList3, setSelectList3] = useState(['3개월', '6개월', '12개월', '전체'])
  const [showSelect, setShowSelect] = useState(false)
  const [showSelect2, setShowSelect2] = useState(false)
  const [showSelect3, setShowSelect3] = useState(false)

  const toggleSelect = () => setShowSelect((prev) => !prev)
  const toggleSelect2 = () => setShowSelect2((prev) => !prev)
  const toggleSelect3 = () => setShowSelect3((prev) => !prev)
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
  const changeLabel3 = (e) => {
    const {innerText} = e.target
    setSelectLabel3(innerText)
    setShowSelect3(false)
  }

  const listItems = [
    {
      id: 1,
      prClass: '구독',
      title: '프로페셔널 플러스',
      amountPay: '77,000원',
      amountDate: '2023. 03. 27',
      amountStatus: '결제완료'
    },
    {
      id: 2,
      prClass: '구독',
      title: '프로페셔널 플러스',
      amountPay: '77,000원',
      amountDate: '2023. 03. 27',
      amountStatus: '결제완료'
    },
    {
      id: 3,
      prClass: '상품',
      title: '베이직',
      amountPay: '33,000원',
      amountDate: '2023. 03. 27',
      amountStatus: '결제취소'
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
        <h3 className="title2">결제 내역</h3>
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
          <div className="box">
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
          <div className="box small">
            {/* 20230615 type1 클래스명 추가 */}
            <div className="select-box type1">
              <button type="button" onClick={toggleSelect3} className="label">
                {selectLabel3}
              </button>
              {showSelect3 && (
                <ul className="option">
                  {selectList3.map((item) => (
                    <li onClick={changeLabel3} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="board-body history-board">
        <div className="board-body-head">
          <div className="left-cont">
            <div className="col-s pr-class">구분</div>
            <div className="col-xl align-left">요금제명</div>
          </div>
          <div className="right-cont fix60">
            <div className="col-l">결제금액</div>
            <div className="col-l">결제일</div>
            <div className="col-l">결제상태</div>
            <div className="col-s">상세</div>
          </div>
        </div>
        <div className="board-content-wrap">
          <ul className="board-list">
            {listItems.map((item) => (
              <li className="list" key={item.id}>
                <div className="left-cont">
                  <div className="col-s pr-class">
                    {/* 상품일 경우 product class로 교체  */}
                    <span className="subscribe">{item.prClass}</span>
                  </div>
                  <strong className="col-xl title">{item.title}</strong>
                </div>
                <div className="right-cont fix60">
                  <div className="col-l">{item.amountPay}</div>
                  <div className="col-l">{item.amountDate}</div>
                  {/* 결제취소 & 취소예정일때 color-gray class 추가 */}
                  <strong className="col-l">{item.amountStatus}</strong>
                  <a href="javascript:(0);" className="link-text col-s amount-detail">
                    상세보기
                  </a>
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

export default PaymentDetail
