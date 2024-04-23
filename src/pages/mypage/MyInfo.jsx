import {useState} from 'react'
import {useSelector} from 'react-redux'
import MyInfoIndividual from '@/pages/mypage/MyInfoIndividual'
import MyInfoCorporate from '@/pages/mypage/MyInfoCorporate'
import MyInfoPhone from '@/pages/mypage/MyInfoPhone'
import MyInfoPasswordEmail from '@/pages/mypage/MyInfoPasswordEmail'

export function MyInfo() {
  const user = useSelector((state) => state.user)
  // 비밀번호 입력 확인 여부
  // ... 이 아이도 redux 로 가야 할꺼 같은데. (session?)
  const [pass, setPass] = useState(false)
  const passSuccess = () => setPass(true)

  return (
    <>
      {pass ? (
        user.type === 'P' ? (
          <MyInfoIndividual />
        ) : (
          <MyInfoCorporate />
        )
      ) : user.sns ? (
        <MyInfoPhone handlePass={passSuccess} />
      ) : (
        <MyInfoPasswordEmail handlePass={passSuccess} />
      )}
    </>
  )
}

export default MyInfo
