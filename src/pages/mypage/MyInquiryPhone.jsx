import {useState} from 'react'
import {Pagination} from '@/components/Pagination'

export function MyInquiryPhone({handleTabs}) {
  // 검색창
  const [text, setText] = useState('')

  const listItems = [
    {
      id: 1,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
    },
    {
      id: 2,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
    },
    {
      id: 3,
      title: '감사합니다.',
      callTime: '24초',
      date: '2023. 03. 27'
    },
    {
      id: 4,
      title: '네',
      callTime: '20분 33초',
      date: '2023. 03. 27'
    },
    {
      id: 5,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
    },
    {
      id: 6,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
    },
    {
      id: 7,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
    },
    {
      id: 8,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
    },
    {
      id: 9,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
    },
    {
      id: 10,
      title: '감사합니다. 제가 어제 문의했던 내용이랑 오늘 답변주신 내용이랑 문자로 좀 보내주세요.',
      callTime: '1분 34초',
      date: '2023. 03. 27'
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
    <>
      <div className="board-wrap">
        <div className="board-head">
          <div className="board-tab-header">
            <button type="button" className="board-tab-menu" onClick={() => handleTabs('W')}>
              <span className="text">웹 문의</span>
            </button>
            <button type="button" className="board-tab-menu active">
              <span className="text">전화 문의</span>
            </button>
          </div>
          <div className="fillter">
            <div className="box">
              <form className="searchform">
                <input
                  type="text"
                  placeholder="검색어 입력"
                  className="search"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button type="button" className="search-btn">
                  <i className="search-icon"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="board-body">
          <div className="board-tab-body">
            <div className="board-tab-content">
              <div className="board-content-wrap">
                <ul className="board-list">
                  {listItems.map((item) => (
                    <li className="list" key={item.id}>
                      <div className="left-cont">
                        <strong className="title">{item.title}</strong>
                      </div>
                      <div className="right-cont">
                        <div className="col-l call-time">{item.callTime}</div>
                        <div className="col-m date">{item.date}</div>
                        <a href="javascript:(0);" className="col-s link-text">
                          상세보기
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                <Pagination {...pagination} />
              </div>
            </div>
            <div className="tab-content"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyInquiryPhone
