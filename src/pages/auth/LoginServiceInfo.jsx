import {useNavigate} from 'react-router-dom'

export function LoginServiceInfo() {
  const navigate = useNavigate()

  return (
    <div className="login-service-wrap">
      <div className="login-service-top">
        <h2 className="login-service-tit">
          <strong>플루닛 통합ID 하나면</strong>
          <br />
          다양한 서비스가 한 손안에 쏙~
        </h2>
        <p className="login-service-txt">
          플루닛 통합회원이 되어 보유한 크레딧으로 모든 서비스를 자유롭게 이용해 보세요. <br />
          이용하실 수 있는 서비스는 앞으로 더욱 다양해질 예정입니다.
        </p>
        <div className="button-wrap">
          <button type="button" className="button orange" onClick={() => navigate('/auth/login')}>
            로그인
          </button>
          <button type="button" className="button brown" onClick={() => navigate('/auth/join')}>
            회원가입
          </button>
        </div>
      </div>
      <div className="login-service-middle">
        <ul className="login-service-list">
          <li className="login-service-item ico-1">
            <p className="service-item-tit">
              <strong>다양한 서비스를 하나의 ID로!</strong>
            </p>
            <p className="service-item-txt">
              스튜디오, 워크센터, 개인용 인공지능 비서 등 다양한 플루닛 서비스의 혜택과 회원 서비스를 간편하게 이용하실
              수 있습니다.
            </p>
          </li>
          <li className="login-service-item ico-2">
            <p className="service-item-tit">
              <strong>나의 활동과 크레딧을 한눈에!</strong>
            </p>
            <p className="service-item-txt">
              나의 서비스 이용 정보를 모아보는 것은 물론, 크레딧 사용내역과 요금제 구매 현황을 한눈에 관리할 수
              있습니다.
            </p>
          </li>
          <li className="login-service-item ico-3">
            <p className="service-item-tit">
              <strong>나만을 위한 전담 플루니안</strong>
            </p>
            <p className="service-item-txt">
              플루니안은 회원님이 사용하시는 서비스와 궁금한 모든 사항들을 가이드해주고 직원으로도 채용하실 수 있습니다.
            </p>
          </li>
        </ul>
      </div>
      <div className="login-service-bottom">
        <p className="service-bottom-tit">
          <strong>기존 회원이신 분들은 통합계정전환을 진행해 주세요.</strong>
        </p>
        <p className="service-bottom-txt">하나의 플루닛 ID로 모든서비스를 이용할 수 있습니다.</p>
        <div className="button-wrap">
          <button type="button" className="button bd-brown" onClick={() => alert('링크 확인 필요')}>
            통합회원 전환 신청
          </button>
        </div>
        <div className="integrated-member-service">
          <ul className="integrated-service-list">
            <li className="integrated-service-item ico-1">
              <em>STEP 01</em>
              <strong>통합회원 전환신청</strong>
            </li>
            <li className="integrated-service-item ico-2">
              <em>STEP 02</em>
              <strong>본인인증</strong>
            </li>
            <li className="integrated-service-item ico-3">
              <em>STEP 03</em>
              <strong>회원정보 입력</strong>
            </li>
            <li className="integrated-service-item ico-4">
              <em>STEP 04</em>
              <strong>플루니안 설정</strong>
            </li>
            <li className="integrated-service-item ico-5">
              <em>STEP 05</em>
              <strong>통합회원 전환 완료</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LoginServiceInfo
