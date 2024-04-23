import {useState} from 'react'
import Modal from '@/components/modal/index'
import Highlight from 'react-highlight'
import 'highlight.js/scss/vs2015.scss'

export function AlertPopupGuide() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const [open7, setOpen7] = useState(false)
  const [open8, setOpen8] = useState(false)
  const [open9, setOpen9] = useState(false)

  const onCloseCallback = () => {
    console.log('close modal!')
  }
  return (
    <>
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen((prev) => !prev)}>
        알럿 - 타이틀만 있는경우
      </button>
      <Modal isOpen={open} onOpenChange={setOpen} className="popup small">
        <Modal.Content>
          <div className="popup-contents alert">
            <p className="bold-text">
              타이틀 <br />
              타이틀
            </p>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            
            <button
              className="button brown"
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open, setOpen] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup small" 384px 모달 */
<Modal isOpen={open} onOpenChange={setOpen} className="popup small"> 
<Modal.Content>
  <div className="popup-contents alert"> //알럿 팝업 alert 클래스 추가
    <p className="bold-text">
      타이틀 <br />
      타이틀
    </p>
  </div>
</Modal.Content>
<Modal.Bottom>
  <div className="popup-bottom">
    {/* 모달 닫을 버튼에 setOpen(false) 호출 */}
    <button
      className="button brown"
      onClick={() => {
        setOpen(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
</Modal.Bottom>
</Modal>

`}
      </Highlight>
      <br />
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen2((prev) => !prev)}>
        알럿 - 타이틀/설명문구 같이 있는 경우
      </button>
      <Modal isOpen={open2} onOpenChange={setOpen2} className="popup small">
        <Modal.Content>
          <div className="popup-contents alert">
            <p className="bold-text">타이틀</p>
            <p className="desc-text">
              디스크립션 <br />
              디스크립션
            </p>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button brown"
              onClick={() => {
                setOpen2(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open2, setOpen2] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup small" 384px 모달 */
<Modal isOpen={open2} onOpenChange={setOpen2} className="popup small">
<Modal.Content>
  <div className="popup-contents alert"> //알럿 팝업 alert 클래스 추가
    <p className="bold-text">타이틀</p>
    <p className="desc-text">
      디스크립션 <br />
      디스크립션
    </p>
  </div>
</Modal.Content>
<Modal.Bottom>
  <div className="popup-bottom">
    {/* 모달 닫을 버튼에 setOpen2(false) 호출 */}
    <button
      className="button brown"
      onClick={() => {
        setOpen2(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
</Modal.Bottom>
</Modal>

`}
      </Highlight>
      <br />
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen3((prev) => !prev)}>
        알럿 - 버튼이 두개 있을 경우
      </button>
      <Modal isOpen={open3} onOpenChange={setOpen3} className="popup small">
        <Modal.Content>
          <div className="popup-contents alert">
            <p className="bold-text">타이틀</p>
            <p className="desc-text">
              디스크립션 <br />
              디스크립션
            </p>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button bd-brown"
              onClick={() => {
                setOpen3(false)
              }}
              type="button"
            >
              버튼
            </button>
            <button
              className="button brown"
              onClick={() => {
                setOpen3(false)
              }}
              type="button"
            >
              버튼
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open3, setOpen3] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup small" 384px 모달 */
<Modal isOpen={open3} onOpenChange={setOpen3} className="popup small">
<Modal.Content>
  <div className="popup-contents alert"> //알럿 팝업 alert 클래스 추가
    <p className="bold-text">타이틀</p>
    <p className="desc-text">
      디스크립션 <br />
      디스크립션
    </p>
  </div>
</Modal.Content>
<Modal.Bottom>
  <div className="popup-bottom">
    {/* 모달 닫을 버튼에 setOpen3(false) 호출 */}
    <button
      className="button bd-brown"
      onClick={() => {
        setOpen3(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      취소
    </button>
    <button
      className="button brown"
      onClick={() => {
        setOpen3(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
</Modal.Bottom>
</Modal>

`}
      </Highlight>
      <br />
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen4((prev) => !prev)}>
        스몰 팝업 - 헤더가 있는 경우
      </button>
      <Modal isOpen={open4} onOpenChange={setOpen4} className="popup small">
        <Modal.Content>
          <div className="popup-header">
            <h2 className='popup-title'>타이틀</h2>
          </div>
          <div className="popup-contents">
            컨텐츠 영역
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className='button brown'
              onClick={() => {
                setOpen4(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open4, setOpen4] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup small" 384px 모달 */
<Modal isOpen={open4} onOpenChange={setOpen4} className="popup small">
<Modal.Content>
  <div className="popup-header">
    <h2 className='popup-title'>타이틀</h2>
  </div>
  <div className="popup-contents"> //알럿 팝업이 아닌 스몰 팝업의 경우 alert 클래스가 없음
    컨텐츠 영역
  </div>
</Modal.Content>
<Modal.Bottom>
  <div className="popup-bottom">
  {/* 모달 닫을 버튼에 setOpen4(false) 호출 */}
    <button
      className='button brown'
      onClick={() => {
        setOpen4(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
  
</Modal.Bottom>
</Modal>

`}
      </Highlight>
      <br />
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen5((prev) => !prev)}>
        스몰 팝업 - 헤더가 없는 경우
      </button>
      <Modal isOpen={open5} onOpenChange={setOpen5} className="popup small">
        <Modal.Content>
          <div className="popup-contents">
            컨텐츠 영역
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className='button brown'
              onClick={() => {
                setOpen5(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open5, setOpen5] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup small" 384px 모달 */
<Modal isOpen={open5} onOpenChange={setOpen5} className="popup small">
<Modal.Content>
  <div className="popup-contents"> //알럿 팝업이 아닌 스몰 팝업의 경우 alert 클래스가 없음
    컨텐츠 영역
  </div>
</Modal.Content>
<Modal.Bottom>
  <div className="popup-bottom">
  {/* 모달 닫을 버튼에 setOpen5(false) 호출 */}
    <button
      className='button brown'
      onClick={() => {
        setOpen5(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
  
</Modal.Bottom>
</Modal>

`}
      </Highlight>
      <br />
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen6((prev) => !prev)}>
        중간 팝업 - 헤더가 있는 경우
      </button>
      <Modal isOpen={open6} onOpenChange={setOpen6} className="popup medium">
        <Modal.Content>
          <div className="popup-header">
            <h2 className="popup-title">타이틀</h2>
          </div>
          <div className="popup-contents popup-change-password">
            컨텐츠 영역
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button bd-brown"
              onClick={() => {
                setOpen5(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
            <button
              className="button brown"
              onClick={() => {
                setOpen5(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open6, setOpen6] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup medium" 544px 모달 */
<Modal isOpen={open6} onOpenChange={setOpen6} className="popup medium">
<Modal.Content>
  <div className="popup-header">
    <h2 className="popup-title">타이틀</h2>
  </div>
  <div className="popup-contents">
    컨텐츠 영역
  </div>
</Modal.Content>
<Modal.Bottom>
  <div className="popup-bottom">
    {/* 모달 닫을 버튼에 setOpen5(false) 호출 */}
    <button
      className="button bd-brown"
      onClick={() => {
        setOpen6(false)
        onCloseCallback()
      }}
      type="button"
    >
      버튼
    </button>
    <button
      className="button brown"
      onClick={() => {
        setOpen6(false)
        onCloseCallback() 
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
</Modal.Bottom>
</Modal>

`}
      </Highlight>
      <br />
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen7((prev) => !prev)}>
        중간 팝업 - 헤더가 없는 경우
      </button>
      <Modal isOpen={open7} onOpenChange={setOpen7} className="popup medium">
        <Modal.Content>
          <div className="popup-contents">
            컨텐츠 영역
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
          <button
              className='button bd-brown'
              onClick={() => {
                setOpen6(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
            <button
              className='button brown'
              onClick={() => {
                setOpen6(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open7, setOpen7] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup medium" 544px 모달 */
<Modal isOpen={open7} onOpenChange={setOpen7} className="popup medium">
<Modal.Content>
  <div className="popup-contents">
    컨텐츠 영역
  </div>
</Modal.Content>
<Modal.Bottom>
  <div className="popup-bottom">
  {/* 모달 닫을 버튼에 setOpen7(false) 호출 */}
  <button
      className='button bd-brown'
      onClick={() => {
        setOpen7(false)
        onCloseCallback()
      }}
      type="button"
    >
      버튼
    </button>
    <button
      className='button brown'
      onClick={() => {
        setOpen7(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
  
</Modal.Bottom>
</Modal>

`}
      </Highlight>
      <br />
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen8((prev) => !prev)}>
        대 팝업
      </button>
      <Modal isOpen={open8} onOpenChange={setOpen8} className="popup bic">
        <Modal.Content>
          <div className="popup-contents">
            컨텐츠 영역
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
          <button
              className='button bd-brown'
              onClick={() => {
                setOpen8(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
            <button
              className='button brown'
              onClick={() => {
                setOpen8(false)
                onCloseCallback()
              }}
              type="button"
            >
              버튼
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
      <Highlight>
{`
상단에 import Modal from '@/components/modal/index'

/* 모달창 오픈 클로즈 상태 */
const [open8, setOpen8] = useState(false);

/* 모달창 오픈할려는 버튼에 들어갈 이벤트 */
onClick={() => setOpen((prev) => !prev)
ex) <button onClick={() => setOpen((prev) => !prev)}>모달 오픈</button>

/* className"popup bic" 800px 모달 */
<Modal isOpen={open8} onOpenChange={setOpen8} className="popup bic">
<Modal.Content>
  <div className="popup-contents">
    컨텐츠 영역
  </div>
</Modal.Content>
{/* 하단 버튼이 없으면 Modal.Bottom 영역 제거*/}
<Modal.Bottom>
  <div className="popup-bottom">
  {/* 모달 닫을 버튼에 setOpen8(false) 호출 */}
  <button
      className='button bd-brown'
      onClick={() => {
        setOpen8(false)
        onCloseCallback()
      }}
      type="button"
    >
      버튼
    </button>
    <button
      className='button brown'
      onClick={() => {
        setOpen8(false)
        onCloseCallback()
        // onCloseCallback 현재 아무 기능없습니다 페이지 내의 onCloseCallback 함수 사용 하시면 됩니다.   
      }}
      type="button"
    >
      버튼
    </button>
  </div>
  
</Modal.Bottom>
</Modal>

`}
      </Highlight>
    </>
  )
}
