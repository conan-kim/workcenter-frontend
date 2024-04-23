import {useState} from 'react'
import {Pagination} from '@/components/Pagination'

export function MyInquiryPhoneList() {
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
    },
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
      <div className="ploonian-banner">
        <div className="left-cont">
          <div className="user-box">
            <img src="/assets/images/ploonian-complete-face.png" alt="플루니안 이미지" />
          </div>
          <div className="info-box">
            <h3 className="title2">홍길동님의 플루니안 앨리스입니다.</h3>
            <p className="description">
              플루닛 서비스 이용 중 궁금한 것, 도움이 필요한 것을 언제든 문의해주세요. <br />
              전화는 24시간 당신을 위해 대기하고 있어요.
            </p>
            <dl className="tel-info">
              <dt className="title">앨리스 전화번호</dt>
              <dd className="text">070-1233-4567</dd>
            </dl>
          </div>
        </div>
        <div className="right-cont">
          <a href="#" className="button brown">
            문의글 남기기
          </a>
        </div>
      </div>
      <div className="board-wrap">
        <div className="board-head">
          <div className="board-tab-header">
            <button type="button" className="board-tab-menu">
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
