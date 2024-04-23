import { Children, createContext, isValidElement, useRef, useMemo, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames/bind';
import ModalContent from '@/components/modal/ModalContent';
import ModalBottom from '@/components/modal/ModalBottom';
import styles from '@/components/modal/modal.module.scss';

// 모달 상태와 관련된 컨텍스트를 생성합니다.
export const ModalContext = createContext({
  isOpen: false,
  onOpenChange: undefined
});

const cx = classNames.bind(styles);

// 자식 컴포넌트 중에서 특정 컴포넌트를 추출하는 함수입니다.
const getComponent = (children, component) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter((child) => isValidElement(child) && child.type === component).slice(0, 2);
};

function ModalMain(props) {
  let closeFlag = true;
  const {
    children,
    isOpen = false,
    isBottom = false,
    className,
    useCloseBt = true,
    isCloseOutside = true,
    onOpenChange,
    onOpenCallback,
    onCloseCallback
  } = props;
  const nodeRef = useRef(null);

  // 모달 컨텍스트의 값들을 useMemo를 사용하여 메모이제이션합니다.
  const values = useMemo(
    () => ({
      isOpen,
      onOpenChange
    }),
    [isOpen, onOpenChange]
  );

  // 모달 컨텐츠와 모달 하단 컴포넌트를 추출합니다.
  const modalContent = useMemo(() => getComponent(children, <ModalContent />.type), [children]);
  const modalBottom = useMemo(() => getComponent(children, <ModalBottom />.type), [children]);

  // 모달을 닫는 함수입니다.
  const onCloseModal = useCallback(() => {
    if (!closeFlag) return;
    onOpenChange && onOpenChange(false);
    onCloseCallback && onCloseCallback();
  }, [closeFlag, onOpenChange, onCloseCallback]);

  // CSSTransition의 onExiting 콜백입니다.
  // 모달이 닫히는 중임을 나타내는 closeFlag 값을 변경합니다.
  const onExiting = () => {
    closeFlag = false;
  };

  // CSSTransition의 onExited 콜백입니다.
  // 모달이 완전히 닫힌 후에 closeFlag 값을 다시 true로 설정합니다.
  const onExited = () => {
    closeFlag = true;
  };

  // 모달이 열릴 때 onOpenCallback을 호출합니다.
  useEffect(() => {
    if (isOpen && onOpenCallback) {
      onOpenCallback();
    }
  }, [isOpen, onOpenCallback]);

  // 컴포넌트가 언마운트될 때 호출되는 함수입니다.
  useEffect(() => {
    return () => {
      console.log('unMounted');
    };
  }, []);

  // 모달을 document.body에 렌더링합니다.
  return createPortal(
    <ModalContext.Provider value={values}>
      <CSSTransition
        // 모달이 열린 상태인지를 나타내는 Boolean 값입니다.
        in={isOpen}

        // 모달이 마운트되는 DOM 노드를 가리키는 React ref입니다.
        // 이를 사용하여 CSSTransition이 모달의 상태 변화를 추적하고 애니메이션을 적용합니다.
        nodeRef={nodeRef}

        // 모달이 열리거나 닫히는데 걸리는 시간을 밀리초 단위로 설정합니다.
        // 모달이 열리거나 닫힐 때 애니메이션의 지속 시간을 지정합니다.
        timeout={1000}

        // CSSTransition 컴포넌트에 적용할 CSS 클래스를 설정합니다.
        // 'fade' 클래스는 천천히 나타나는 효과를 정의하는 CSS 스타일을 적용하는 클래스입니다.
        // cx 함수를 사용하여 동적으로 CSS 클래스를 생성합니다.
        classNames={cx('fade')}

        // 모달이 닫힐 때 CSSTransition이 완전히 종료되고 나서 모달 컴포넌트를 언마운트합니다.
        // 이를 통해 모달이 메모리를 절약하고 다시 열릴 때 초기 상태에서 시작할 수 있습니다.
        unmountOnExit

        // 모달이 닫히기 직전에 호출되는 콜백 함수입니다.
        // 이 콜백을 사용하여 모달이 닫히는 동안 필요한 작업을 수행할 수 있습니다.
        onExiting={onExiting}
        
        // 모달이 닫힌 후에 호출되는 콜백 함수입니다.
        // 이 콜백을 사용하여 모달이 완전히 닫힌 후에 필요한 작업을 수행할 수 있습니다.
        onExited={onExited}
      >
        <div ref={nodeRef} className={cx('modal-root', { 'is-bottom': isBottom }, className)}>
          <div className={cx('window', 'popup-inner')}>
            {/* 모달의 내용을 렌더링합니다. */}
            {modalContent && modalContent}

            {/* 모달의 하단 컴포넌트를 렌더링합니다. */}
            {modalBottom && modalBottom}
          </div>

          {/* 모달 바깥 영역을 클릭할 경우 모달을 닫을 수 있습니다. */}
          <div
            className={cx('overlay')}
            onClick={() => {
              isCloseOutside && onCloseModal();
            }}
          ></div>
        </div>
      </CSSTransition>
    </ModalContext.Provider>,
    document.body
  );
}

export default ModalMain;
