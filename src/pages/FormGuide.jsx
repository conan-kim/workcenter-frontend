// import {Outlet} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Highlight from 'react-highlight'
import 'highlight.js/scss/vs2015.scss'
// import Accordion from '../components/modal/Accordion'

// 탭메뉴
export function FormGuide() {
  // const [currentTab, setCurrentTab] = useState(0)

  // const menuArr = [
  //   {
  //     name: '개인회원',
  //     content:
  //       '이미 로그인 되어 있음ㅇㄴㅁㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹloremdsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
  //   },
  //   {name: '기업회원', content: '기업'}
  // ]

  // const selectMenuHandler = (index) => {
  //   setCurrentTab(index)
  // }

  // 검색창
  const [text, setText] = useState('')

  // 아코디언
  const [show, setShow] = useState(false)

  const onSelectShow = () => {
    setShow((prev) => !prev)
  }

  // 약관동의
  // const [allCheck, setAllCheck] = useState(false)
  // const [ageCheck, setAgeCheck] = useState(false)
  // const [useCheck, setUseCheck] = useState(false)
  // const [marketingCheck, setMarketingCheck] = useState(false)
  // const [snsCheck, setSnsCheck] = useState(false)
  // const [emailCheck, setEmailCheck] = useState(false)

  // const allBtnEvent = () => {
  //   if (allCheck === false) {
  //     setAllCheck(true)
  //     setAgeCheck(true)
  //     setUseCheck(true)
  //     setMarketingCheck(true)
  //     setSnsCheck(true)
  //     setEmailCheck(true)
  //   } else {
  //     setAllCheck(false)
  //     setAgeCheck(false)
  //     setUseCheck(false)
  //     setMarketingCheck(false)
  //     setSnsCheck(false)
  //     setEmailCheck(false)
  //   }
  // }

  // const ageBtnEvent = () => {
  //   if (ageCheck === false) {
  //     setAgeCheck(true)
  //   } else {
  //     setAgeCheck(false)
  //   }
  // }

  // const useBtnEvent = () => {
  //   if (useCheck === false) {
  //     setUseCheck(true)
  //   } else {
  //     setUseCheck(false)
  //   }
  // }

  // const marketingBtnEvent = () => {
  //   if (marketingCheck === false) {
  //     setMarketingCheck(true)
  //     setSnsCheck(true)
  //     setEmailCheck(true)
  //   } else {
  //     setMarketingCheck(false)
  //     setSnsCheck(false)
  //     setEmailCheck(false)
  //   }
  // }

  // const snsCheckBtnEvent = () => {
  //   if (snsCheck === false) {
  //     setSnsCheck(true)
  //   } else {
  //     setSnsCheck(false)
  //   }
  // }

  // const emailCheckBtnEvent = () => {
  //   if (emailCheck === false) {
  //     setEmailCheck(true)
  //   } else {
  //     setEmailCheck(false)
  //   }
  // }

  // useEffect(() => {
  //   if (ageCheck === true && useCheck === true && marketingCheck === true) {
  //     setAllCheck(true)
  //   } else {
  //     setAllCheck(false)
  //   }
  //   if (snsCheck === true && emailCheck === true) {
  //     setMarketingCheck(true)
  //   } else {
  //     setMarketingCheck(false)
  //   }
  // }, [ageCheck, useCheck, marketingCheck, snsCheck, emailCheck])

  // 비밀번호 눈 숨기기/보이기
  const [pwType, setpwType] = useState({
    type: 'password',
    visible: false
  })
  const handlePasswordType = () => {
    setpwType(() => {
      if (!pwType.visible) {
        return {type: 'text', visible: true}
      } else {
        return {type: 'password', visible: false}
      }
    })
  }

  // input text 지우기
  const onchange = (e) => {
    setText(e.target.value)
  }
  const onReset = () => {
    setText('')
  }

  // select option 박스
  const [selectLabel, setSelectLabel] = useState('문의 전체')
  const [selectList, setSelectList] = useState(['문의 전체', '내용1', '내용2', '내용3'])
  const [showSelect, setShowSelect] = useState(false)

  const toggleSelect = () => setShowSelect((prev) => !prev)
  const changeLabel = (e) => {
    const {innerText} = e.target
    setSelectLabel(innerText)
    setShowSelect(false)
  }

  return (
    <>
      <br />
      <br />
      <br />
      <h2>Input Style</h2>
      <h3>Default</h3>
      {/* 유효성 맞지 않을 경우 error class 추가 , 유효성 맞을 경우 success class 추가 */}
      <div className="field-form">
        <label className="title">
          아이디
          <sup className="important">
            <span className="blind">필수항목</span>
          </sup>
        </label>
        <div className="cont-line">
          <div className="field clear">
            <input type="text" placeholder="아이디를 입력해 주세요." value={text} onChange={onchange} />
            <button type="button" className="btn-clear" onClick={onReset}>
              Reset
            </button>
          </div>
        </div>
        <p className="success-message">사용할 수 있는 아이디 입니다.</p>
        <p className="error-message">형식이 맞지 않습니다.</p>
      </div>

      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
 * 유효성 체크에 따라 field-form에 className="error" 또는 className="succeess" 추가"
   메세지는 해당 유효성에따라 class에 맞게 삽입
 * 필수항목이 있을 경우 sup 마크업 추가
 */

/* 텍스트 리셋 */
const onchange = (e) => {
  setText(e.target.value)
}
const onReset = () => {
  setText('')
}

<div className="field-form">
  <label className="title">
    아이디
    <sup className="important">
      <span className="blind">필수항목</span>
    </sup>
  </label>
  <div className="cont-line">
    <div className="field clear">
      <input type="text" placeholder="아이디를 입력해 주세요." value={text} onChange={onchange} />
      <button type="button" className="btn-clear" onClick={onReset}>
        Reset
      </button>
    </div>
  </div>
  <p className="success-message">사용할 수 있는 아이디 입니다.</p>
  <p className="error-message">형식이 맞지 않습니다.</p>
</div>
`}
        </Highlight>
      </div>
      <br />
      <br />
      <h3>Input + Button</h3>
      <div className="field-form">
        <label className="title">
          비밀번호
          <sup className="important">
            <span className="blind">필수항목</span>
          </sup>
        </label>
        <div className="cont-line line">
          <div className="field clear add">
            <input type={pwType.type} placeholder="비밀번호를 입력해 주세요." />
            <div className="input-button-wrap">
              <button type="button" className="btn-eyes">
                <span>
                  <span className="show">
                    <div className="icon">
                      <div className="img"></div>
                    </div>
                  </span>
                </span>
              </button>
              <button type="button" className="btn-clear">
                Reset
              </button>
            </div>
          </div>
          <button type="button" className="checkbutton bd-brown">
            중복확인
          </button>
        </div>
        <p className="success-message">사용할 수 있는 아이디 입니다.</p>
        <p className="error-message">형식이 맞지 않습니다.</p>
        <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
      </div>
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
 * 유효성 체크에 따라 field-form에 className="error" 또는 className="succeess" 추가
  메세지는 해당 유효성에따라 class에 맞게 삽입
 * 필수항목이 있을 경우 sup 마크업 추가
 * input 옆에 버튼 붙을 시 cont-line에 line 클래스 추가
 */

/* 텍스트 리셋 */
const onchange = (e) => {
  setText(e.target.value)
}
const onReset = () => {
  setText('')
}

// 비밀번호 눈 숨기기/보이기
const [pwType, setpwType] = useState({
  type: 'password',
  visible: false
})
const handlePasswordType = () => {
  setpwType(() => {
    if (!pwType.visible) {
      return {type: 'text', visible: true}
    } else {
      return {type: 'password', visible: false}
    }
  })
}

<div className="field-form">
  <label className="title">
    비밀번호
    <sup className="important">
      <span className="blind">필수항목</span>
    </sup>
  </label>
  <div className="cont-line line">
    <div className="field clear add">
      <input type={pwType.type} placeholder="비밀번호를 입력해 주세요." />
      <div className="input-button-wrap">
        <button type="button" className="btn-eyes">
        <span onClick={handlePasswordType}>
          {pwType.visible ? (
            <span className="show">
              <div className="icon">
                <div className="img"></div>
              </div>
            </span>
          ) : (
            <span className="hide">
              <div className="icon">
                <div className="img"></div>
              </div>
            </span>
          )}
        </span>
        </button>
        <button type="button" className="btn-clear">
          Reset
        </button>
      </div>
    </div>
    <button type="button" className="checkbutton bd-brown">중복확인</button>
  </div>
  <p className="success-message">사용할 수 있는 아이디 입니다.</p>
  <p className="error-message">형식이 맞지 않습니다.</p>
  <p className="condition">영문,숫자,일부기호( - / _ / . / @ )만 입력 가능</p>
</div>
`}
        </Highlight>
      </div>
      <br />
      <br />
      <br />
      <h2>Button Style</h2>
      <h3>Default</h3>
      <div style={{padding: 10}}>
        <button type="button" className="button brown">
          다음
        </button>
        <button type="button" className="button brown" disabled>
          다음
        </button>
        <button type="button" className="button orange">
          다음
        </button>
        <button type="button" className="button orange" disabled>
          다음
        </button>
      </div>
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
* button 2개 나란히 올 때 button-wrap으로 감싸준다.
* 비활성화시 button 태그에 disabled 추가
*/

  <button type="button" className="button brown">
    다음
  </button>
  <button type="button" className="button brown" disabled>
    다음
  </button>
  <button type="button" className="button orange">
    다음
  </button>
  <button type="button" className="button orange" disabled>
    다음
  </button>
`}
        </Highlight>
      </div>
      <br />
      <h3>Button + Button</h3>
      {/* button-wrap에 style paddingTop값은 임시로 넣은 값이므로 해당요소를 이용할 때 지우고 사용 */}
      <div className="button-wrap" style={{paddingTop: 0}}>
        <button type="button" className="button bd-brown">
          취소
        </button>
        <button type="button" className="button brown">
          확인
        </button>
      </div>
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
 * button 2개 나란히 올 때 button-wrap으로 감싸준다.
 * 비활성화시 button 태그에 disabled 추가
*/

<div className="button-wrap">
  <button type="button" className="button bd-brown">
    취소
  </button>
  <button type="button" className="button brown">
    확인
  </button>
</div>
`}
        </Highlight>
      </div>
      <br />
      <h3>Button Style</h3>
      <button type="button" className="checkbutton bd-brown">
        중복확인
      </button>
      <button type="button" className="checkbutton bd-brown" disabled>
        중복확인
      </button>

      <button type="button" className="checkbutton brown">
        인증번호 확인
      </button>
      <button type="button" className="checkbutton bd-black">
        중복확인
      </button>
      <button type="button" className="checkbutton bd-black" disabled>
        중복확인
      </button>
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
* 비활성화시 button 태그에 disabled 추가
*/

/* 
* border만 있는 button
*/
  <button type="button" className="checkbutton bd-brown">
    중복확인
  </button>
  <button type="button" className="checkbutton bd-brown" disabled>
    중복확인
  </button>

/* 
* 배경색,보더 다 있는 button
*/
  <button type="button" className="checkbutton brown">
    인증번호 확인
  </button>

/* 
* border만 있는 button
*/
  <button type="button" className="checkbutton bd-black">
    중복확인
  </button>
  <button type="button" className="checkbutton bd-black" disabled>
    중복확인
  </button>
`}
        </Highlight>
      </div>
      <br />
      <br />
      <br />
      <h3>Textarea Style default</h3>
      <div className="field_form">
        <div className="cont_line">
          <div className="field">
            <textarea className="mCustomScrollbar" placeholder="안녕하세요"></textarea>
          </div>
        </div>
      </div>
      <div className="field_form">
        <div className="cont_line">
          <div className="field">
            <textarea className="mCustomScrollbar" placeholder="안녕하세요" readOnly></textarea>
          </div>
        </div>
      </div>
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
* 비활성화시 textarea 태그에 readOnly 추가
*/

  <div className="field_form">
    <div className="cont_line">
      <div className="field">
        <textarea className="mCustomScrollbar" placeholder="안녕하세요"></textarea>
      </div>
    </div>
  </div>
  <div className="field_form">
    <div className="cont_line">
      <div className="field">
        <textarea className="mCustomScrollbar" placeholder="안녕하세요" readOnly></textarea>
      </div>
    </div>
  </div>
`}
        </Highlight>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>Radio Checkbox Style</h3>
      {/* <div className="agreeBox">
        <div className="agreeAllBtn">
          <label className="agreeAll">
            <input className="check" type="checkbox" checked={allCheck} onChange={allBtnEvent} />
            모든 약관에 동의합니다.
          </label>
        </div>
        <div className="rulebox">
          <label className="ruletext">
            <input className="check" type="checkbox" checked={ageCheck} onChange={ageBtnEvent} />
            <span className="textpoint">필수</span>
            <span className="checkbox-title">만 14세 이상입니다</span>
          </label>
          <a href="#" className="arrow right">
            <span className="hide-text">자세히 보기</span>
          </a>
        </div>
        <div className="rulebox">
          <label className="ruletext">
            <input className="check" type="checkbox" checked={useCheck} onChange={useBtnEvent} />
            <span className="textpoint">필수</span>
            <span className="checkbox-title">이용약관</span>
          </label>
          <a href="#" className="arrow right">
            <span className="hide-text">자세히 보기</span>
          </a>
        </div>
        <div className="rulebox">
          <label className="ruletext">
            <input className="check" type="checkbox" checked={marketingCheck} onChange={marketingBtnEvent} />
            <span className="textpoint select">선택</span>
            <span className="checkbox-title">마케팅 동의</span>
          </label>
          <a href="#" type="button" className="arrow right">
            <span className="hide-text">자세히 보기</span>
          </a>
          <div className="subcheckbox">
            <label className="subselection">
              <input className="check" type="checkbox" checked={snsCheck} onChange={snsCheckBtnEvent} />
              <span className="checkbox-title">SNS</span>
            </label>
            <label className="subselection">
              <input className="check" type="checkbox" checked={emailCheck} onChange={emailCheckBtnEvent} />
              <span className="checkbox-title">이메일</span>
            </label>
          </div>
        </div>
      </div> */}
      <br />
      <input className="check" type="checkbox" />
      <br />
      <br />
      <label className="ruletext">
        <input className="check" type="checkbox" />
        <span className="textpoint">필수</span>
        <span className="checkbox-title">이용약관</span>
      </label>
      <br />
      <br />
      <label className="subselection">
        <input className="check" type="checkbox" />
        <span className="checkbox-title">SNS</span>
      </label>
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
checkbox만 있는 경우
*/
  <input className="check" type="checkbox" />

/* 
checkbox와 text 같이 있는 경우
*/
  <label className="ruletext">
    <input className="check" type="checkbox" />
    <span className="textpoint">필수</span>
    <span className="checkbox-title">이용약관</span>
  </label>

/* 
선택 체크박스 하위 체크라디오
*/
  <label className="subselection">
    <input className="check" type="checkbox" />
    <span className="checkbox-title">SNS</span>
  </label>
          `}
        </Highlight>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3>Search Input Style</h3>
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
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
* 
* 
*/

  // 검색창
  const [text, setText] = useState('')

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
          `}
        </Highlight>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3>SelectBox Style</h3>
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
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
* 
* onClick에 toggleSelect 함수명 추가
*/

  // select option 박스
  const [selectLabel, setSelectLabel] = useState('문의 전체')
  const [selectList, setSelectList] = useState(['문의 전체','내용1', '내용2', '내용3'])
  const [showSelect, setShowSelect] = useState(false)

  const toggleSelect = () => setShowSelect((prev) => !prev)
  const changeLabel = (e) => {
    const {innerText} = e.target
    setSelectLabel(innerText)
    setShowSelect(false)
  }

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
`}
        </Highlight>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>Accordion Style</h3>
      <div className="accordion">
        <div className="accordion-title">
          <button className={`headline ${show ? 'show' : ''}`} onClick={onSelectShow}>
            추가 정보 입력 (선택)
          </button>
        </div>
        {show && (
          <div className="accordion-content">
            <h2 className="cont-title">제목</h2>
            <div className="cont-area">내용</div>
          </div>
        )}
      </div>
      <div style={{padding: 10}}>
        <Highlight>
          {`
/* 
* 비어있는 중괄호 안에 headline 클래스명 추가 -> $ {show ? 'show' : ''} 같이 넣기
* onClick에 onSelectShow 함수명 추가
*/

  // 아코디언
  const [show, setShow] = useState(false)

  const onSelectShow = () => {
    setShow((prev) => !prev)
  }

  <div className="accordion">
    <div className="accordion-title">
      <button className={} onClick={}>
        추가 정보 입력 (선택)
      </button>
    </div>
    {show && (
      <div className="accordion-content">
        <h2 className="cont-title">제목</h2>
        <div className="cont-area">내용</div>
      </div>
    )}
  </div>
`}
        </Highlight>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
