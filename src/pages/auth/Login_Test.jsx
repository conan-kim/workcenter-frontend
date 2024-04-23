import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login} from '@/reducer/user'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [params] = useSearchParams()

  // 로그인
  const fnLogin = (e, type, sns) => {
    console.log('fnLogin')
    e.preventDefault()

    // TODO ...
    // AJAX 로그인 처리 후 응답값
    const payload = {
      key: 'test',
      sns: sns,
      type: type
    }
    console.log(payload)

    navigate(params.get('r') || '/mypage')
    dispatch(login(payload))
  }

  return (
    <>
      <br />
      <a onClick={(e) => fnLogin(e, 'P', false)}>로그인 - 개인 이메일</a>
      <br />
      <a onClick={(e) => fnLogin(e, 'P', true)}>로그인 - 개인 SNS</a>
      <br />
      <a onClick={(e) => fnLogin(e, 'B', false)}>로그인 - 사업자</a>
      <br />
      <br />
      <a>SNS계정간편로그인</a>
      <br />
      <br />
      <Link to="/auth/find-id">아이디찾기</Link>
      <br />
      <Link to="/auth/find-pw">비밀번호찾기</Link>
      <br />
      <br />
      <Link to="/auth/join">통합회원가입</Link>
      <br />
      <br />
      <Link to="/auth/service-info">통합서비스 안내</Link>
    </>
  )
}
