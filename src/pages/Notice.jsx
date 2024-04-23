import { useState } from "react"
import noticeSample from '/assets/images/home-img/notice-sample.png';
import noticeSample02 from '/assets/images/home-img/notice-sample02.png';
import noticeSample03 from '/assets/images/home-img/notice-sample03.png';
import noticeSample04 from '/assets/images/home-img/notice-sample04.png';

import noticeEvent from '/assets/images/home-img/img-notice-event.png';
import noticeNews from '/assets/images/home-img/img-notice-news.png';
import noticeNotice from '/assets/images/home-img/img-notice-notice.png';
export function Notice() {
  // 검색창
  const [text, setText] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSearchResultEmpty, setIsSearchResultEmpty] = useState(false);
  return <>
    <div className="body-container notice">
      <div className="wrap">
        <div className="contents">
          <div className="title-box">
            <h3>
              <span className="en">notice</span>
              워크센터의 <em>새로운 소식을 전해드려요</em>
            </h3>
          </div>
          <div className="board-head">
            <div className="board-tab-header">
              <button type="button" className="board-tab-menu active" onClick={() => handleTabs('W')}>
                <span className="text">전체</span>
              </button>
              <button type="button" className="board-tab-menu">
                <span className="text">공지</span>
              </button>
              <button type="button" className="board-tab-menu">
                <span className="text">뉴스</span>
              </button>
              <button type="button" className="board-tab-menu">
                <span className="text">이벤트</span>
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
          {
            isEmpty ?
            <div className="notice-empty">
              {
                isSearchResultEmpty?
                  '검색어와 일치하는 결과가 없습니다.':
                  '등록된 게시물이 없습니다.'
              }
            </div>
            :<>
              <div className="notice-list">
                <div className="grid">
                  <div className="notice-item">
                    <div className="notice-img">
                      <img src={noticeSample} alt="" />
                    </div>
                    <div className="category">공지</div>
                    <div className="title">솔트룩스, CES2023에서 ‘혁신상’ 수상! 앞으로의 미래 솔트룩스, CES2023에서 ‘혁신상’ 수상! 앞으로의 미래</div>
                    <div className="date">2023. 02. 28</div>
                  </div>
                  <div className="notice-item">
                    <div className="notice-img">
                      <img src={noticeSample02} alt="" />
                    </div>
                    <div className="category">공지</div>
                    <div className="title">솔트룩스, CES2023에서 ‘혁신상’ 수상! 앞으로의 미래</div>
                    <div className="date">2023. 02. 28</div>
                  </div>
                  <div className="notice-item">
                    <div className="notice-img">
                      <img src={noticeSample03} alt="" />
                    </div>
                    <div className="category">공지</div>
                    <div className="title">솔트룩스, CES2023에서 ‘혁신상’ 수상! 앞으로의 미래</div>
                    <div className="date">2023. 02. 28</div>
                  </div>
                  <div className="notice-item">
                    <div className="notice-img">
                      <img src={noticeSample04} alt="" />
                    </div>
                    <div className="category">공지</div>
                    <div className="title">솔트룩스, CES2023에서 ‘혁신상’ 수상! 앞으로의 미래</div>
                    <div className="date">2023. 02. 28</div>
                  </div>

                  {/* 이벤트 케이스 */}
                  <div className="notice-item">
                    <div className="notice-img">
                      <img src={noticeEvent} alt="이벤트 이미지" />
                    </div>
                    <div className="category">이벤트</div>
                    <div className="title">솔트룩스, 구독형 인공지능(AI) 서비스 본격화…상반기 ‘플루닛 워크센터·스튜디오’ 공개한다</div>
                    <div className="date">2023. 02. 28</div>
                  </div>

                  {/* 뉴스 케이스 */}
                  <div className="notice-item">
                    <div className="notice-img">
                      <img src={noticeNews} alt="뉴스 이미지" />
                    </div>
                    <div className="category">뉴스</div>
                    <div className="title">솔트룩스, 구독형 인공지능(AI) 서비스 본격화…상반기 ‘플루닛 워크센터·스튜디오’ 공개한다</div>
                    <div className="date">2023. 02. 28</div>
                  </div>

                  {/* 공지 케이스 */}
                  <div className="notice-item">
                    <div className="notice-img">
                      <img src={noticeNotice} alt="공지 이미지" />
                    </div>
                    <div className="category">공지</div>
                    <div className="title">솔트룩스, 구독형 인공지능(AI) 서비스 본격화…상반기 ‘플루닛 워크센터·스튜디오’ 공개한다</div>
                    <div className="date">2023. 02. 28</div>
                  </div>
                </div>
              </div>
              <div className="pagination">
                <button type="button" className="ico-button page-first">
                  <span className="hide-text">처음</span>
                </button>
                <button type="button" className="ico-button page-prev">
                  <span className="hide-text">이전</span>
                </button>
                <ul className="pagination-list">
                  <li className="active">
                    <button type="button" className="page-number">
                      1
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      2
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      3
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      4
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      5
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      6
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      7
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      8
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      9
                    </button>
                  </li>
                  <li>
                    <button type="button" className="page-number">
                      10
                    </button>
                  </li>
                </ul>
                <button type="button" className="ico-button page-next">
                  <span className="hide-text">다음</span>
                </button>
                <button type="button" className="ico-button page-end">
                  <span className="hide-text">맨끝</span>
                </button>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  </>
}

export default Notice
