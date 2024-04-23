import {useState} from 'react'
import {Pagination} from '@/components/Pagination'

export function MyInquiryWeb({handleTabs}) {
  const [activeItems, setActiveItems] = useState([])

  const handleClick = (index) => {
    setActiveItems((prevItems) => {
      const updatedItems = [...prevItems]
      updatedItems[index] = !updatedItems[index]
      return updatedItems
    })
  }

  const itemList = [
    {
      id: 1,
      type: '장애/오류',
      title: '회원탈퇴가 안됩니다.',
      status: '답변완료',
      createDate: '2023. 04. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 2,
      type: '결제/환불',
      title: '결제했는데 크레딧이 안들어와요.',
      status: '접수',
      createDate: '2023. 04. 24',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 3,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 4,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 5,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 6,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 7,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 8,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 9,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
    },
    {
      id: 10,
      type: '회원',
      title: '정보수정이 안돼요',
      status: '접수',
      createDate: '2023. 03. 27',
      questionContent:
        '안녕하세요.\n제가 일주일 전에 전화번호 수정을 했는데 반영도 안되있고, 그냥 불편해서 탈퇴하려고 했는데 탈퇴도 안돼요.\n도대체 어떻게 해야되는거에요? 확인 좀 부탁드립니다.',
      answerTitle: '플루니안 엘리스 답변드립니다.',
      answerContent:
        '안녕하세요. 플루니안 엘리스에요.\n현재 시스템의 오류로 전화번호 수정이 안되었습니다. 불편을 드려 죄송합니다.\n행복한 하루되세요. 감사합니다.',
      answerDate: '2023. 04. 27'
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

  // select option 박스
  const [selectLabel, setSelectLabel] = useState('문의 전체')
  const [selectList, setSelectList] = useState([
    '문의 전체',
    '메타휴먼',
    '회원',
    '결제/환불',
    '장애/오류',
    '개선제안',
    '기타'
  ])
  const [showSelect, setShowSelect] = useState(false)

  const toggleSelect = () => setShowSelect((prev) => !prev)
  const changeLabel = (e) => {
    const {innerText} = e.target
    setSelectLabel(innerText)
    setShowSelect(false)
  }

  // 검색창
  const [text, setText] = useState('')

  return (
    <>
      <div className="board-wrap">
        <div className="board-head">
          <div className="board-tab-header">
            <button type="button" className="board-tab-menu active">
              <span className="text">웹 문의</span>
            </button>
            <button type="button" className="board-tab-menu" onClick={() => handleTabs('P')}>
              <span className="text">전화 문의</span>
            </button>
          </div>
          <div className="fillter">
            <div className="box">
              <div className="select-box">
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
                <ul className="board-list accordion">
                  {/* 최대 10개 노출 */}
                  {itemList.map((item, index) => (
                    <li className={`list ${activeItems[index] ? 'active' : ''}`} key={item.id}>
                      <button type="button" className="accordion-button" onClick={() => handleClick(index)}>
                        <span className="left-cont">
                          <span className="col-s type">{item.type}</span>
                          <strong className="title">{item.title}</strong>
                        </span>
                        <span className="right-cont">
                          <span className="col-l status">{item.status}</span>
                          <span className="col-m date">{item.createDate}</span>
                          <span className="arrows"></span>
                        </span>
                      </button>
                      <div className="detail-box">
                        <div className="question-section">
                          <div className="left-cont-box">
                            <div className="tag">문의내용</div>
                            <div className="content-box">
                              <p className="text">{item.questionContent}</p>
                            </div>
                          </div>
                          <a href="javascript:(0);" className="link-text">
                            삭제
                          </a>
                        </div>
                        <div className="answer-section">
                          <div className="left-cont-box">
                            <div className="tag">답변</div>
                            <div className="content-box">
                              <strong className="title">{item.answerTitle}</strong>
                              <p className="text">{item.answerContent}</p>
                            </div>
                          </div>
                          <div className="date">{item.answerDate}</div>
                        </div>
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

export default MyInquiryWeb
