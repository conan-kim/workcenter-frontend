import { useState } from 'react';
import Modal from '@/components/modal/index';

export function PopupClosePopup() {
  const [open, setOpen] = useState(false); 

  const onOpenCallback = () => {
    console.log('open modal!');
  };

  const onCloseCallback = () => {
    console.log('close modal!');
  };

  const openNextPopup = (popupNumber) => {
    setOpen(popupNumber);
    onCloseCallback();
  };

  const closePopup = () => {
    setOpen(false);
    onCloseCallback();
  };

  return (
    <>
      <button
        style={{ border: '1px solid', padding: '5px', margin: '10px' }}
        onClick={() => setOpen(1)}
      >
        팝업 
      </button>
      <Modal isOpen={open === 1} onOpenChange={setOpen} className="popup medium">
        <Modal.Content>
          <div className="popup-contents">1번 팝업</div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button brown"
              onClick={() => openNextPopup(2)}
              type="button"
            >
              크래딧 있을때
            </button>
            <button
              className="button brown"
              onClick={() => openNextPopup(3)}
              type="button"
            >
              크래딧 없을때
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
      <Modal isOpen={open === 2} onOpenChange={setOpen} className="popup small">
        <Modal.Content>
          <div className="popup-contents">남은 크래딧 있을때 팝업</div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button brown"
              onClick={() => openNextPopup(3)}
              type="button"
            >
              확인
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
      <Modal isOpen={open === 3} onOpenChange={setOpen} className="popup small">
        <Modal.Content>
          <div className="popup-contents">완료 팝업</div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className="button brown"
              onClick={closePopup}
              type="button"
            >
              닫기
            </button>
          </div>
        </Modal.Bottom>
      </Modal>
    </>
  );
}
