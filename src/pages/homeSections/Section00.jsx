import { useState, useEffect } from 'react';

export function Section00() {
	const [audioPlaying, setAudioPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(Array(6).fill(false));

  const playAudio = (audioFile, index) => {
    if (audioPlaying && audioPlaying !== audioFile) {
      audioPlaying.pause();
      setIsPlaying(Array(6).fill(false));
    }

    if (isPlaying[index]) {
      audioPlaying.pause();
      setAudioPlaying(null);
      setIsPlaying(Array(6).fill(false));
    } else {
      const audio = new Audio(audioFile);
      audio.play();
      setAudioPlaying(audio);
      const newIsPlaying = Array(6).fill(false);
      newIsPlaying[index] = true;
      setIsPlaying(newIsPlaying);
    }
  };

  const stopAudio = () => {
    if (audioPlaying) {
      audioPlaying.pause();
      setAudioPlaying(null);
    }
    setIsPlaying(Array(6).fill(false));
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (audioPlaying && !event.target.classList.contains('voice-btn')) {
        stopAudio();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [audioPlaying]);

  return(
    <section className="section-00">
			<div className="scene-01">
				<p className="title">
					<strong>10억 짜리 콜센터가 클릭 한번이면 기업, 개인 그 누구나 가능!</strong>
					인공지능 AI와 GPT까지 탑재된 플루닛 워크센터
				</p>
				<div className="contents">
					<div className="form-wrap">
						<p className="text">
							고민은 매출 기회만 놓치게 할 뿐,<br />
							1분만 투하자면 바로 AI콜센터 세팅 완료
						</p>
						<div className="field-form">
							<span className="input-title">지금 바로 시작해보세요</span>
							<div className="cont-line">
								<div className="field clear">
									<input type="text" placeholder="이메일 입력" />
								</div>
								<button className="button orange">무료 시작하기</button>
							</div>
						</div>
					</div>
					<ul className="ai-wrap">
						<li>
              <img src="/assets/images/home-img/ai-01.png" alt="장애접수 AI" />
							<button className={`voice-btn ${isPlaying[0] ? 'playing' : ''}`} onClick={() => playAudio('/assets/audio/231030_workcenter_script_disability_application_v1.wav', 0)}>
								<i class="hide-text">{isPlaying[0] ? '정지' : '재생'}</i>
							</button>
							<span className="text">장애접수</span>
						</li>
						<li>
              <img src="/assets/images/home-img/ai-02.png" alt="예약 AI" />
							<button className={`voice-btn ${isPlaying[1] ? 'playing' : ''}`} onClick={() => playAudio('/assets/audio/231030_workcenter_script_reservation_v1.wav', 1)}>
								<i class="hide-text">{isPlaying[1] ? '정지' : '재생'}</i>
							</button>
							<span className="text">예약</span>
						</li>
						<li>
              <img src="/assets/images/home-img/ai-03.png" alt="안내데스크 AI" />
							<button className={`voice-btn ${isPlaying[2] ? 'playing' : ''}`} onClick={() => playAudio('/assets/audio/231030_workcenter_script_information_desk_v1.wav', 2)}>
								<i class="hide-text">{isPlaying[2] ? '정지' : '재생'}</i>
							</button>
							<span className="text">안내데스크</span>
						</li>
						<li>
              <img src="/assets/images/home-img/ai-04.png" alt="개인비서 AI" />
							<button className={`voice-btn ${isPlaying[3] ? 'playing' : ''}`} onClick={() => playAudio('/assets/audio/231030_workcenter_script_personal_assistant_v1.wav', 3)}>
								<i class="hide-text">{isPlaying[3] ? '정지' : '재생'}</i>
							</button>
							<span className="text">개인비서</span>
						</li>
						<li>
              <img src="/assets/images/home-img/ai-05.png" alt="IR AI" />
							<button className={`voice-btn ${isPlaying[4] ? 'playing' : ''}`} onClick={() => playAudio('/assets/audio/231030_workcenter_script_ir_v1.wav', 4)}>
								<i class="hide-text">{isPlaying[4] ? '정지' : '재생'}</i>
							</button>
							<span className="text">IR</span>
						</li>
						<li>
              <img src="/assets/images/home-img/ai-06.png" alt="영업 AI" />
							<button className={`voice-btn ${isPlaying[5] ? 'playing' : ''}`} onClick={() => playAudio('/assets/audio/231030_workcenter_script_sales_v1.wav', 5)}>
								<i class="hide-text">{isPlaying[5] ? '정지' : '재생'}</i>
							</button>
							<span className="text">영업</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="scene-02">
				<div className="text-wrap">
					<div className="title">
						<strong>AI 마케팅 서비스 </strong>체험 해보기
					</div>
					{/* 2023.10.31 수정 및 추가 */}
					<p className="text">AI가 나 대신 보내는 문자, 전화 발송 서비스 지금 바로 체험해보세요.</p>
					<div className="ai-bubble-box">
						<p>
							플루닛 AI직원 조이입니다.<br />
							전달드려야 하는 메시지가 있어서 연락드렸어요.<br />
							<strong>[입력하신 내용이 들어갑니다]</strong> 라고 메시지 전달 요청 주셨습니다.<br />
							혹시 메시지 관련해서 궁금하시거나 저를 만나 보실 수 있는 경로를 통화 종료 후 문자로 남겨드릴게요. 행복한 하루 보내세요.
						</p>
					</div>
					{/* 2023.10.31 수정 및 추가 - 끝 */}
				</div>

				<div className="form-wrap">
					<div className="btn-radio-wrap">
						<input type="radio" name="radio" id="chk01" checked />
						<label htmlFor="chk01">전화</label>
						<input type="radio" name="radio" id="chk02" />
						<label htmlFor="chk02">문자</label>
					</div>
					<div className="field-form">
						<div className="cont-line">
							<div className="field clear">
								<input type="text" placeholder="연락 받으실 분의 핸드폰 번호는 숫자만 입력해주세요" />
							</div>
							<div className="field">
								<textarea className="mCustomScrollbar" placeholder="보내실 내용을 입력해주세요."></textarea>
							</div>
						</div>
					</div>
					<div className="btn-wrap">
						<p className="info">
							발신번호는 1566-6116으로 받으시는 <br />
							분에게 전달 됩니다.
						</p>
						<button type="button" className="button bd-brown">미리듣기</button>
						<button type="button" className="button orange">보내기</button>
					</div>
				</div>
			</div>

			<div className="scene-03">
				<div className="title-wrap">
					<span className="sub-tit">Customer Reviews</span>
					<p className="title">
						워크센터 서비스는 검증된 서비스로 <br />
						<strong>다양한 비즈니스 고객을 만나고 있습니다.</strong>
					</p>
				</div>
				<div className="reviews-wrap">
					<ul className="reviews-list">
						<li className="review">
							<p className="text">
								장애접수 전화를 AI가 받아주고 장애 처리율이 150%나 올랐어요! <br />
								물론 저희 상담 직원들은 감정노동에서 해방 되었지요
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon01.png" alt="의료전산 장애접수" />
								</i>
								의료전산 장애접수
							</div>
						</li>
						<li className="review">
							<p className="text">
								저희 같은 작은 소호몰은 기획전, 행사 때마다 주문 전화가 몰려서 전직원을 다 동원했어야 했는데 <br />
								플루닛 워크센터를 사용하고 부터는 CS 직원 1명이 사후 처리만해주고 있어요.
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon02.png" alt="쇼핑몰" />
								</i>
								쇼핑몰
							</div>
						</li>
						<li className="review">
							<p className="text">
								결혼 시즌이 임박하면 예식장 전화가 넘쳐나서 시즌에만 직원을 늘리자니 고민스러웠었는데 워크센터의 AI직원 채용하고부터는 놓치는 전화도 없고 예약 전 사전 안내 전화도 해주니 효율적인 회사운영이 가능해졌어요.
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon03.png" alt="예식장" />
								</i>
								예식장
							</div>
						</li>
						<li className="review">
							<p className="text">
								내원 예약과 변경을 워크센터로 모두 변경하고 노쇼방지 서비스도 사용했더니 환자를 더 많이 받을 수 있어서 직원들도 너무 만족하고 있습니다.
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon04.png" alt="병원" />
								</i>
								병원
							</div>
						</li>

						<li className="review">
							<p className="text">
								주가 하락 시 투자자들의 빗발치는 전화 때문에 업무가 마비될 지경이었는데 AI가 대신 받아주고 루시아GPT로 여러 답변도 척척해주어서 전화로 뺏기는 시간도 줄고<br />
								업무 집중도가 높아졌어요.
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon05.png" alt="기업 IR" />
								</i>
								기업 IR
							</div>
						</li>
						<li className="review">
							<p className="text">
								1인 회사 대표지만 회사 일반 문의나 담당자 안내는 따로 담당자를 두기가 정말 힘들고 제가 다 받자니 일인 다역하느라 지쳤었는데 이젠 사람처럼 응대해주는 인공지능 직원이 다 받아주고 기록도 확인할 수 있어서 주위<br />
								사장님들에게도 추천하고 있어요.
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon06.png" alt="안내데스크" />
								</i>
								안내데스크
							</div>
						</li>
						<li className="review">
							<p className="text">
								복지사들은 일반 문의 외에도 케어하는 분들에게 먼저<br />
								전화 드리고 안내해야 하는 일들이 많은데 워크센터를<br />
								도입하고부터는 일반 고지와 안내는 AI가 하고 직접<br />
								상담하는 업무만 제가 하게 되어서 통화 시간이<br />
								절반 이상 줄었어요
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon07.png" alt="복지사" />
								</i>
								복지사
							</div>
						</li>
						<li className="review">
							<p className="text">
							시즌이나 계절 가전은 구매나 AS 때문에 문의 전화가<br />
							너무 많아서 비싼 비용들여 콜센터에 위탁했었는데<br />
							워크센터로 바꾸고 나서는 위탁 비용을 100% 절감할 수 있었어요.  AS 접수도 증상도 알아서 응대해주니<br />
							이건 뭐 만능이네요~
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon08.png" alt="전자제품" />
								</i>
								전자제품
							</div>
						</li>
						<li className="review">
							<p className="text">
								밤늦은 시간이나 주말에 고객분들께서 예약을 변경해야 하거나 급한 문의를 하셔야 하는 경우가 많았는데<br />
								24시간 AI가 대응해주고 오전에 출근해서 바로 기록된 내용을 처리하니 고객분들 만족도가 높아져서 서비스<br />
								이용이 더 많아졌어요
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon09.png" alt="이사/홈케어" />
								</i>
								이사/홈케어
							</div>
						</li>
						<li className="review">
							<p className="text">
								저는 영업이라 전화가 하루종일 오는데요, 중요한<br />
								미팅이나 주말에는 영업 전화를 놓치거나 받기 싫어도 <br />
								받아야만 했었어요. 워크센터 서비스를 사용하고부터는 전화를 다 받아주고 통화 기록도 남겨주니 중요한 고객은 더 잘 관리할 수 있고 제 개인 시간도 여유가 생겨서 너무 만족하고 있어요
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon10.png" alt="개인비서" />
								</i>
								개인비서
							</div>
						</li>
						<li className="review">
							<p className="text">
								퇴근 후, 주말에 오는 제휴나 문의 전화는 아예 놓치는<br />
								경우가 많았는데 워크센터 사용 후부터 문의 처리도<br />
								빨라지고 제휴 제안 하시는 회사들은 24시간 직원이<br />
								계속 근무하냐고 물어보시기까지 하셨어요
							</p>
							<div className="tag">
								<i className="icon">
									<img src="/assets/images/home-img/review-icon11.png" alt="서비스 제휴/문의" />
								</i>
								서비스 제휴/문의
							</div>
						</li>
					</ul>
      	</div>
			</div>
    </section>
  )
}
export default Section00