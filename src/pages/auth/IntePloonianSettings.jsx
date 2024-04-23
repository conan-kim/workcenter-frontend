import React, { useState } from 'react';

export function IntePloonianSettings() {
  const [activeTab, setActiveTab] = useState('외형');
  const [activeFaceItem, setActiveFaceItem] = useState(0);
  const [activeClothesItem, setActiveClothesItem] = useState(0);
  const [activeVoiceBtn, setActiveVoiceBtn] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFaceItemClick = (index) => {
    setActiveFaceItem(index);
  };

  const handleClothesItemClick = (index) => {
    setActiveClothesItem(index);
  };

  const handleVoiceBtnClick = (index) => {
    setActiveVoiceBtn(index);
  };

  return (
    <section className="contents">
      <div className="contents-wrap">
        <div className="contents-section medium ploonian-create">
          <div className="title-text-box">
            <h2 className="title1">
              이제 마지막 단계입니다. <br />
              <strong>회원님만을 위한 플루니안을 설정해주세요.</strong>
            </h2>
            <p className="description-text">플루니안은 사용하시는 서비스와 궁금한 모든 사항들을 가이드해주고 직원으로도 채용하실 수 있습니다.</p>
          </div>
          <div className="box-wrap">
            <div className="box-layer">
              <div className="box-cont">
                <div className="ploonian-preview">
                  <img src="/assets/images/ploonian-woman-type1-1.png" alt="" />
                  <div className="btn-wrap">
                    <a href="#" className="button orange">선택완료</a>
                  </div>
                </div>
                <div className="ploonian-item-wrap">
                  <ul className="ploonian-item-list">
                    {/* 2023.06.09 수정 button 태그 추가 이벤트 이동, 클래스네임 변경 */}
                    <li className="ploonian-item-item">
                      <button 
                        type="button"
                        className={activeTab === '외형' ? 'ploonian-item-menu active' : 'ploonian-item-menu'}
                        onClick={() => handleTabClick('외형')}
                      >
                        외형
                      </button>
                    </li>
                    <li className="ploonian-item-item">
                      <button 
                        type="button"
                        className={activeTab === '의상' ? 'ploonian-item-menu active' : 'ploonian-item-menu'}
                        onClick={() => handleTabClick('의상')}
                      >
                        의상
                      </button>
                    </li>
                    <li className="ploonian-item-item">
                      <button 
                        type="button"
                        className={activeTab === '목소리' ? 'ploonian-item-menu active' : 'ploonian-item-menu'}
                        onClick={() => handleTabClick('목소리')}
                      >
                        목소리
                      </button>
                    </li>
                  </ul>
                  <div className="ploonian-content">
                    {activeTab === '외형' && (
                      <div className="ploonian-face">
                        <ul className="ploonian-character-list">
                          {/* 2023.06.09 수정 img태그 button 안으로 이동 */}
                          <li className={activeFaceItem === 0 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(0)}>
                              <img src="/assets/images/ploonian-woman-face-type1.png" alt=""/>
                            </button>
                          </li>
                          <li className={activeFaceItem === 1 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(1)}>
                              <img src="/assets/images/ploonian-woman-face-type2.png" alt=""/>
                            </button>
                          </li>
                          <li className={activeFaceItem === 2 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(2)}>
                              <img src="/assets/images/ploonian-man-face-type1.png" alt=""/>
                            </button>
                          </li>
                          <li className={activeFaceItem === 3 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(3)}>
                              <img src="/assets/images/ploonian-man-face-type2.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 4 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(4)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 5 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(5)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 6 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(6)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 7 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(7)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt=""/>
                            </button>
                          </li>
                          <li className={activeFaceItem === 8 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(8)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 9 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(9)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 10 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(10)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 11 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(11)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                          <li className={activeFaceItem === 12 ? 'ploonian-face-item on' : 'ploonian-face-item'}>
                            <button type="button" onClick={() => handleFaceItemClick(12)}>
                              <img src="/assets/images/sample/sample-penguin.png" alt="" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                    {activeTab === '의상' && (
                      <div className="ploonian-clothes">
                        <ul className="ploonian-character-list">
                          {/* 2023.06.09 수정 img태그 button 안으로 이동 */}
                          <li className={activeClothesItem === 0 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            <button type="button" onClick={() => handleClothesItemClick(0)}>
                              <img src="/assets/images/ploonian-woman-clothes-type1.png" alt="" />
                            </button>
                          </li>
                          <li className={activeClothesItem === 1 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            <button type="button" onClick={() => handleClothesItemClick(1)}>
                              <img src="/assets/images/ploonian-woman-clothes-type2.png" alt="" />
                            </button>
                          </li>
                          <li className={activeClothesItem === 2 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            <button type="button" onClick={() => handleClothesItemClick(2)}>
                              <img src="/assets/images/ploonian-man-clothes-type1.png" alt="" />
                            </button>
                          </li>
                          <li className={activeClothesItem === 3 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            <button type="button" onClick={() => handleClothesItemClick(3)}>
                              <img src="/assets/images/ploonian-man-clothes-type2.png" alt="" />
                            </button>
                          </li>
                          <li className={activeClothesItem === 4 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            <button type="button" onClick={() => handleClothesItemClick(4)}>
                              <img src="/assets/images/ploonian-woman-clothes-type1.png" alt="" />
                            </button>
                          </li>
                          <li className={activeClothesItem === 5 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            <button type="button" onClick={() => handleClothesItemClick(5)}>
                              <img src="/assets/images/ploonian-woman-clothes-type2.png" alt="" />
                            </button>
                          </li>
                          <li className={activeClothesItem === 6 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            <button type="button" onClick={() => handleClothesItemClick(6)}>
                              <img src="/assets/images/ploonian-man-clothes-type1.png" alt="" />
                            </button>
                          </li>
                          <li className={activeClothesItem === 7 ? 'ploonian-clothes-item on' : 'ploonian-clothes-item'}>
                            
                            <img src="/assets/images/ploonian-man-clothes-type2.png" alt="" onClick={() => handleClothesItemClick(7)} />
                          
                          </li>
                        </ul>
                      </div>
                    )}
                    {activeTab === '목소리' && (
                      <div className="ploonian-voice">
                        <button
                          type="button"
                          className={activeVoiceBtn === 0 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(0)}
                        >
                          주의깊고 얌전한
                        </button>
                        <button
                          type="button"
                          className={activeVoiceBtn === 1 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(1)}
                        >
                          힘차고 적극적인
                        </button>
                        <button
                          type="button"
                          className={activeVoiceBtn === 3 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(3)}
                        >
                          주의깊고 얌전한
                        </button>
                        <button
                          type="button"
                          className={activeVoiceBtn === 4 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(4)}
                        >
                          힘차고 적극적인
                        </button>
                        <button
                          type="button"
                          className={activeVoiceBtn === 5 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(5)}
                        >
                          주의깊고 얌전한
                        </button>
                        <button
                          type="button"
                          className={activeVoiceBtn === 6 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(6)}
                        >
                          힘차고 적극적인
                        </button>
                        <button
                          type="button"
                          className={activeVoiceBtn === 7 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(7)}
                        >
                          주의깊고 얌전한
                        </button>
                        <button
                          type="button"
                          className={activeVoiceBtn === 8 ? 'ploonian-voice-btn on' : 'ploonian-voice-btn'}
                          onClick={() => handleVoiceBtnClick(8)}
                        >
                          힘차고 적극적인
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
