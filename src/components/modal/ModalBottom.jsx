/* eslint-disable react/prop-types */
import classNames from 'classnames/bind'
import styles from '@/components/modal/modal.module.scss'

// classNames 라이브러리를 사용하여 CSS 클래스 이름을 조합하는 함수를 가져옵니다.
const cx = classNames.bind(styles);

// ModalBottom 컴포넌트를 정의합니다. 이 컴포넌트는 주어진 className과 children을 props로 받습니다.
function ModalBottom(props) {
  const { className, children } = props;

  // 주어진 className과 'modal-bottom'을 조합하여 최종적으로 사용될 className을 생성합니다.
  // cx 함수를 사용하여 CSS 모듈(styles)과 함께 클래스 이름을 결합합니다.
  const combinedClassName = cx('modal-bottom', className);

  // 최종적으로 생성된 className과 나머지 props를 <div> 요소에 전달하여 ModalBottom 컴포넌트를 렌더링합니다.
  return (
    <div {...props} className={combinedClassName}>
      {children}
    </div>
  );
}


export default ModalBottom
