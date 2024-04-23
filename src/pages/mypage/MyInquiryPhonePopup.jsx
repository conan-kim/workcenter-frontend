import React, { useState, useEffect, useRef } from 'react';
import Modal from '@/components/modal/index';
import { useCallback } from 'react';

export function MyInquiryPhonePopup() {
  //더미 데이터
  const dummyData = {
    messages: [
      {
        'talk' : '안녕하세요. 쏠트룩스 한지아입니다. 다시 전화하셨네요. 어떤걸 안내해드릴까요?',
        'time' : '00:01',
      },
      {
        'talk' : '안녕하세요',
        'time' : '00:02',
      },
      {
        'talk' : '네. 홍길동님 안녕하세요',
        'time' : '00:03',
      },
      {
        'talk' : '김준섭 씨 연락처 알고 싶어요.',
        'time' : '00:04',
      },
      {
        'talk' : '전화번호는 일반문의 담당자를 통해 확인이 가능합니다. 바로 연결해드릴까요?',
        'time' : '00:07',
      },
      {
        'talk' : '그냥 좀 알려주면 안되나요. 일반문의가 뭔지도 모르겠고 저는 그냥 김준섭씨 연락처만 좀 알고 싶은거에요.',
        'time' : '00:10',
      },
      {
        'talk' : '죄송합니다. 제가 알려드릴 수 없는 정보입니다.',
        'time' : '00:12',
      },
      {
        'talk' : '김준섭 씨 연락처 알고 싶어요.',
        'time' : '00:04',
      },
      {
        'talk' : '죄송합니다. 제가 알려드릴 수 없는 정보입니다.',
        'time' : '00:12',
      },
      {
        'talk' : '김준섭 씨 연락처 알고 싶어요.',
        'time' : '00:04',
      },
      {
        'talk' : '죄송합니다. 제가 알려드릴 수 없는 정보입니다.',
        'time' : '00:12',
      },
      {
        'talk' : '김준섭 씨 연락처 알고 싶어요.',
        'time' : '00:04',
      },
      {
        'talk' : '죄송합니다. 제가 알려드릴 수 없는 정보입니다.',
        'time' : '00:12',
      },
      {
        'talk' : '김준섭 씨 연락처 알고 싶어요.',
        'time' : '00:04',
      },
      {
        'talk' : '죄송합니다. 제가 알려드릴 수 없는 정보입니다.',
        'time' : '00:12',
      },
      {
        'talk' : '김준섭 씨 연락처 알고 싶어요.',
        'time' : '00:04',
      },
      {
        'talk' : '죄송합니다. 제가 알려드릴 수 없는 정보입니다.',
        'time' : '00:12',
      },
      {
        'talk' : '김준섭 씨 연락처 알고 싶어요.',
        'time' : '00:04',
      },
    ],
    totaltime: '00:30',
  };
  const [open, setOpen] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const durationInSeconds = calculateDurationInSeconds(dummyData.totaltime);
    setTotalDuration(durationInSeconds);
  }, [dummyData.totaltime]);

  useEffect(() => {
    if (totalDuration !== 0 && isPlaying) {
      const progressPercentage = (currentTime / totalDuration) * 100;
      setBarWidth(progressPercentage);
      if (currentTime < totalDuration) {
        const interval = setInterval(() => {
          setCurrentTime((prevTime) => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
      } else {
        setIsPlaying(false);
        
      }
    }
  }, [currentTime, totalDuration, isPlaying]);

  const handlePlayButtonClick = () => {
    if (currentTime === totalDuration) {
      setCurrentTime(0); // move-time을 0으로 재설정하여 다시 재생
    }
    setIsPlaying((prevState) => !prevState);
  };

  const handleModalOpenChange = (newOpenState) => {
    setOpen(newOpenState);
    if (newOpenState) {
      // 팝업이 열릴 때
      setIsPlaying(true);
      
    } else {
      // 팝업이 닫힐 때
      setIsPlaying(false);
      // setBarWidth(0);
      // setCurrentTime(0);
      // setTotalDuration(0);
    }
  };
  

  return (
    <>
      <button
        style={{ border: '1px solid', padding: '5px', margin: '10px' }}
        onClick={() => setOpen(true)}
      >
        전화문의 팝업
      </button>
      <Modal isOpen={open} onOpenChange={handleModalOpenChange} className="popup medium phone-inquiries">
        <Modal.Content>
          <div className="popup-header">
            <h2>전화문의 상세 (<span className="call-date">2023. 04. 28</span>)</h2>
          </div>
          <div className="popup-contents">
            <div className="progress-bar-container">
              <button
                type="button"
                className={`play-button ${isPlaying ? 'stop' : ''}`}
                onClick={handlePlayButtonClick}
              >
                {isPlaying ? '일시정지' : '플레이'}
              </button>
              <div className="progress-bar">
                <div className="progress-move" style={{ width: `${barWidth}%` }}></div>
              </div>
              <div className="progress-time">
                <span className="move-time">{formatTime(currentTime)}</span>
                <span>/</span>
                <span className="total-time">{dummyData.totaltime}</span>
              </div>
            </div>
            <div className="phone-consultation-details">
              { (dummyData.messages).map((message, index) => (
                <div key={index} className={`message-row ${index % 2 === 1 ? 'own' : ''}`}>
                  {index % 2 !== 1 && <img src="/assets/images/ploonian-complete-face.png" alt="상담원 아이콘" />}
                  <div className="message-row-contents">
                    <div className="message-info">
                      <span className="message-bubble">{message.talk}</span>
                      <span className="message-time">{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            type="button" 
            class="phone-popup-close" 
            onClick={() => {
              setOpen(false);
              setIsPlaying(false);
              // setBarWidth(0);
              // setCurrentTime(0);
              // setTotalDuration(0);
            }}
          >
            닫기
          </button>
        </Modal.Content>
      </Modal>
    </>
  );
}

// 시간을 MM:SS 형식으로 포맷하는 도우미 함수
function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// 분:초 형식의 시간 문자열을 초로 변환하는 함수
function calculateDurationInSeconds(timeString) {
  const [minutes, seconds] = timeString.split(':');
  return parseInt(minutes) * 60 + parseInt(seconds);
}
