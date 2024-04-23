import { useState } from "react";
import iconDownload from "/assets/images/home-img/icon-download.png";

export function NoticeDetail() {
  // 검색창
  const [text, setText] = useState('')
  return <>
    <div className="body-container notice">
      <div className="wrap">
        <div className="contents detail">
          <div className="content-header">
            <div className="category">공지</div>
            <div className="title">솔트룩스, 구독형 인공지능(AI) 서비스 본격화…상반기 ‘플루닛 워크센터·스튜디오’ 공개한다</div>
            <div className="date">2023. 02. 28</div>
          </div>
          <div className="content-body">
            <div className="notice-img">
              <img src="" alt="게시물 이미지" />
            </div>
            <div className="article">
              코로나 팬데믹으로 인하여 우리 삶은 많은 것들이 변화하였다. 사람을 만나 이야기하고 일을 하는 인류의 보편적인 대면 활동들이 점차 온라인으로 이동했기 때문이다. 온라인을 통해서 화상 회의를 하고, 집에서 원격을 통해 회사 컴퓨터를 제어하고 업무 내용을 클라우드로 팀원들과 공유하며, 학교에서 출석과 수업도 온라인에서 이루어지고 있는 2년 동안의 경험은 과거와 같이 대면 활동을 하지 않아도 세상이 돌아간다는 것을 깨달을 수 있게 하였다. 과연 코로나가 끝난 뒤에 우리의 삶은 어떻게 변할까? 비대면 서비스를 통해 업무와 학업이 이루어지는 동안에 업무 능률이 상승했다는 이야기도 찾아볼 수 있게 되었다. 이러한 상황에 여러 기업들은 다양한 비대면 서비스를 확대해가며, 새로운 삶의 변화를 준비하고 있다. 그중에서 최근 화두가 되고 있는 서비스가 있다면 메타버스가 아닐까 싶다.

              메타버스는 초월 혹은 가상을 뜻하는 메타(meta)와 우주 만물의 세계를 뜻하는 유니버스(universe)가 합쳐진 단어이다. 이를 해석한다면 현실을 넘어선 가상 세계로서 이야기할 수 있다. 이러한 메타버스는 기존의 다양한 가상현실과 다르게, 오감을 통해서 보다 현실 같은 가상을 경험하는데 집중하고 있다. 영화 매트리스에서 네오가 가상현실에 모피어스가 준 약을 먹은 후 현실세계에서 깨어났을 때, 네오는 특정한 장비 속에 갇혀있었다. 이처럼, 현실처럼 느껴지도록 오감을 통제하기 위해서는 여러 장비가 필요하다. 즉, 장비가 없으면 쉽게 체험할 수 없고, 장비가 설치된 특정 영역에서만 경험을 구현할 수 있다는 한계가 존재한다. 이럼에도 불구하고, 메타버스는 미래의 산업으로서 여러 미디어에서 다뤄지고 있는 중이다. 이러한 영향에 따라, 메타버스와 관련한 여러 콘텐츠와 서비스가 등장하기 시작했다. 이는 가상현실에서 구현되는 게임, SNS, 음성대화가 이루어지는 커뮤니티부터 가상공간에서 현실 세계를 구현하는 도서관, 강의실을 포함하는데, 미래에는 의료, 국방 등의 분야까지 확장될 것이다. 이처럼 메타버스는 우리의 현실세계의 실제를 가상공간으로 확장하여, 시공간을 초월하여 행동할 수 있는 또 하나의 공간을 만들게 될 것이다.
            </div>

            {/* 첨부파일 */}
            <div className="file">
              <span className="label">첨부파일</span>
              <a href="" className="file-name">Ploonet IR_2022_3분기_국문_싱가폴NDR.pdf</a>
              <button type="button" className="btn-download">
                <img src={iconDownload} alt="다운로드" />
              </button>
            </div>
          </div>
          <div className="button-wrap">
            <button type="button" className="button bd-brown">
              목록으로
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default NoticeDetail
