import {createBrowserRouter} from 'react-router-dom'
// 인증 필터
import AuthFilter from '@/layouts/AuthFilter'
// 페이지 레이아웃
import DefaultLayout from '@/layouts/DefaultLayout'
import PageLayout from '@/layouts/PageLayout'
import MyPageLayout from '@/layouts/MyPageLayout'
import NoMatch from '@/pages/NoMatch'
// 일반페이지
import Home from '@/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // 일반페이지
      {
        element: <PageLayout />,
        children: [
          // 홈
          {
            index: true,
            element: <Home />
          },
          // 이용가이드
          {
            path: 'guide',
            async lazy() {
              return {Component: (await import('@/pages/Guide')).default}
            }
          },
          // 손비서
          {
            path: 'ai-service',
            async lazy() {
              return {Component: (await import('@/pages/AiService')).default}
            }
          },
          // 서비스플랜
          {
            path: 'service-plan',
            async lazy() {
              return {Component: (await import('@/pages/ServicePlan')).default}
            }
          },
          // 공지사항
          {
            path: 'notice',
            async lazy() {
              return {Component: (await import('@/pages/Notice')).default}
            }
          },
          // 공지사항
          {
            path: 'notice/detail',
            async lazy() {
              return {Component: (await import('@/pages/NoticeDetail')).default}
            }
          },
          // 제휴문의
          {
            path: 'inquiry',
            async lazy() {
              return {Component: (await import('@/pages/Inquiry')).default}
            }
          },
          // 로그인
          {
            path: 'auth/login',
            async lazy() {
              return {Component: (await import('@/pages/auth/Login_Test')).default}
            }
          },
          // 아이디(이메일) 찾기
          {
            path: 'auth/find-id',
            async lazy() {
              return {Component: (await import('@/pages/auth/FindId')).default}
            }
          },
          // 비밀번호 찾기
          {
            path: 'auth/find-pw',
            async lazy() {
              return {Component: (await import('@/pages/auth/FindPassword')).default}
            }
          },
          // 통합서비스안내
          {
            path: 'auth/service-info',
            async lazy() {
              return {Component: (await import('@/pages/auth/LoginServiceInfo')).default}
            }
          },
          // 회원가입
          {
            path: 'auth/join',
            async lazy() {
              return {Component: (await import('@/pages/auth/InteJoinMembership')).default}
            }
          }
        ]
      },
      // 인증필터 - 필수 로그인페이지
      {
        element: <AuthFilter />,
        children: [
          // 마이페이지
          {
            path: 'mypage',
            element: <MyPageLayout />,
            children: [
              // 내정보
              {
                index: true,
                async lazy() {
                  return {Component: (await import('@/pages/mypage/MyInfo')).default}
                }
              },
              // MY문의
              {
                path: 'inquiry',
                async lazy() {
                  return {Component: (await import('@/pages/mypage/MyInquiry')).default}
                }
              },
              // MY문의 - 문의글 남기기
              {
                path: 'inquiry-write',
                async lazy() {
                  return {Component: (await import('@/pages/mypage/MyInquiryWrite')).default}
                }
              },
              // 요금제관리
              {
                path: 'plan',
                async lazy() {
                  return {Component: (await import('@/pages/mypage/RatePlan')).default}
                }
              },
              // 결제내역
              {
                path: 'payment',
                async lazy() {
                  return {Component: (await import('@/pages/mypage/PaymentDetail')).default}
                }
              },
              // 크레딧내역
              {
                path: 'credit',
                async lazy() {
                  return {Component: (await import('@/pages/mypage/Credit')).default}
                }
              },
              // 서비스 사용내역
              {
                path: 'service-usage',
                async lazy() {
                  return {Component: (await import('@/pages/mypage/ServiceUsage')).default}
                }
              }
            ]
          }
        ]
      },
      // 이후로는 퍼블 가이드 링크
      {
        path: 'part-terms-Popup',
        async lazy() {
          let {PartTermsPopup} = await import('@/pages/partnership/PartTermsPopup')
          return {Component: PartTermsPopup}
        }
      },
      {
        path: 'payment-detail-popup1',
        async lazy() {
          let {PaymentDetailPopup1} = await import('@/pages/mypage/PaymentDetailPopup1')
          return {Component: PaymentDetailPopup1}
        }
      },
      {
        path: 'payment-detail-popup2',
        async lazy() {
          let {PaymentDetailPopup2} = await import('@/pages/mypage/PaymentDetailPopup2')
          return {Component: PaymentDetailPopup2}
        }
      },
      {
        path: 'payment-detail-popup3',
        async lazy() {
          let {PaymentDetailPopup3} = await import('@/pages/mypage/PaymentDetailPopup3')
          return {Component: PaymentDetailPopup3}
        }
      },
      {
        path: 'rate-plan-popup1',
        async lazy() {
          let {RatePlanPopup1} = await import('@/pages/mypage/RatePlanPopup1')
          return {Component: RatePlanPopup1}
        }
      },
      {
        path: 'rate-plan-popup2',
        async lazy() {
          let {RatePlanPopup2} = await import('@/pages/mypage/RatePlanPopup2')
          return {Component: RatePlanPopup2}
        }
      },
      {
        path: 'rate-mana-popup1',
        async lazy() {
          let {RatePlanManaPopup1} = await import('@/pages/mypage/RatePlanManaPopup1')
          return {Component: RatePlanManaPopup1}
        }
      },
      {
        path: 'rate-mana-popup2',
        async lazy() {
          let {RatePlanManaPopup2} = await import('@/pages/mypage/RatePlanManaPopup2')
          return {Component: RatePlanManaPopup2}
        }
      },
      {
        path: 'rate-mana-popup3',
        async lazy() {
          let {RatePlanManaPopup3} = await import('@/pages/mypage/RatePlanManaPopup3')
          return {Component: RatePlanManaPopup3}
        }
      },
      {
        path: 'my-change-password-popup1',
        async lazy() {
          let {MyChangePasswordPopup1} = await import('@/pages/mypage/MyChangePasswordPopup1')
          return {Component: MyChangePasswordPopup1}
        }
      },
      {
        path: 'my-change-password-popup2',
        async lazy() {
          let {MyChangePasswordPopup2} = await import('@/pages/mypage/MyChangePasswordPopup2')
          return {Component: MyChangePasswordPopup2}
        }
      },
      {
        path: 'my-withdrawal-popup1',
        async lazy() {
          let {MyWithdrawalPopup1} = await import('@/pages/mypage/MyWithdrawalPopup1')
          return {Component: MyWithdrawalPopup1}
        }
      },
      {
        path: 'my-withdrawal-popup2',
        async lazy() {
          let {MyWithdrawalPopup2} = await import('@/pages/mypage/MyWithdrawalPopup2')
          return {Component: MyWithdrawalPopup2}
        }
      },
      {
        path: 'my-withdrawal-popup3',
        async lazy() {
          let {MyWithdrawalPopup3} = await import('@/pages/mypage/MyWithdrawalPopup3')
          return {Component: MyWithdrawalPopup3}
        }
      },
      {
        path: 'my-withdrawal-popup4',
        async lazy() {
          let {MyWithdrawalPopup4} = await import('@/pages/mypage/MyWithdrawalPopup4')
          return {Component: MyWithdrawalPopup4}
        }
      },
      {
        path: 'social-not-popup',
        async lazy() {
          let {SocialNotPopup} = await import('@/pages/mypage/SocialNotPopup')
          return {Component: SocialNotPopup}
        }
      },
      {
        path: 'change-password-comp-popup',
        async lazy() {
          let {ChangePasswordCompPopup} = await import('@/pages/auth/ChangePasswordCompPopup')
          return {Component: ChangePasswordCompPopup}
        }
      },
      {
        path: 'notuser-info-popup',
        async lazy() {
          let {NotUserInfoPopup} = await import('@/pages/auth/NotUserInfoPopup')
          return {Component: NotUserInfoPopup}
        }
      },
      {
        path: 'social-comp-popup',
        async lazy() {
          let {SocialCompPopup} = await import('@/pages/auth/SocialCompPopup')
          return {Component: SocialCompPopup}
        }
      },
      {
        path: 'dormant-comp-popup',
        async lazy() {
          let {DormantCompPopup} = await import('@/pages/auth/DormantCompPopup')
          return {Component: DormantCompPopup}
        }
      },
      {
        path: 'popup-close-popup',
        async lazy() {
          let {PopupClosePopup} = await import('@/pages/sample/PopupClosePopup')
          return {Component: PopupClosePopup}
        }
      },
      {
        path: 'corporate-popup1',
        async lazy() {
          let {CorporatePopup1} = await import('@/pages/auth/CorporatePopup1')
          return {Component: CorporatePopup1}
        }
      },
      {
        path: 'corporate-popup2',
        async lazy() {
          let {CorporatePopup2} = await import('@/pages/auth/CorporatePopup2')
          return {Component: CorporatePopup2}
        }
      },
      {
        path: 'corporate-popup3',
        async lazy() {
          let {CorporatePopup3} = await import('@/pages/auth/CorporatePopup3')
          return {Component: CorporatePopup3}
        }
      },
      {
        path: 'corporate-popup4',
        async lazy() {
          let {CorporatePopup4} = await import('@/pages/auth/CorporatePopup4')
          return {Component: CorporatePopup4}
        }
      },
      {
        path: 'corporate-popup5',
        async lazy() {
          let {CorporatePopup5} = await import('@/pages/auth/CorporatePopup5')
          return {Component: CorporatePopup5}
        }
      },
      {
        path: 'corporate-popup6',
        async lazy() {
          let {CorporatePopup6} = await import('@/pages/auth/CorporatePopup6')
          return {Component: CorporatePopup6}
        }
      },
      {
        path: 'corporate-popup7',
        async lazy() {
          let {CorporatePopup7} = await import('@/pages/auth/CorporatePopup7')
          return {Component: CorporatePopup7}
        }
      },
      {
        path: 'corporate-popup8',
        async lazy() {
          let {CorporatePopup8} = await import('@/pages/auth/CorporatePopup8')
          return {Component: CorporatePopup8}
        }
      },
      {
        path: 'login-popup',
        async lazy() {
          let {LoginPopup} = await import('@/pages/auth/LoginPopup')
          return {Component: LoginPopup}
        }
      },
      {
        path: 'login-popup1',
        async lazy() {
          let {LoginPopup1} = await import('@/pages/auth/LoginPopup1')
          return {Component: LoginPopup1}
        }
      },
      {
        path: 'login-popup-layer',
        async lazy() {
          let {LoginPopupLayer} = await import('@/pages/auth/LoginPopupLayer')
          return {Component: LoginPopupLayer}
        }
      },
      {
        path: 'login-service-info',
        async lazy() {
          let {LoginServiceInfo} = await import('@/pages/auth/LoginServiceInfo')
          return {Component: LoginServiceInfo}
        }
      },
      // 임시 - 폼가이드
      {
        path: 'contents-layout-guide',
        async lazy() {
          let {ContentsLayoutGuide} = await import('@/pages/ContentsLayoutGuide')
          return {Component: ContentsLayoutGuide}
        }
      },
      {
        path: 'form-guide',
        async lazy() {
          let {FormGuide} = await import('@/pages/FormGuide')
          return {Component: FormGuide}
        }
      },
      {
        path: 'popup-guide',
        async lazy() {
          let {AlertPopupGuide} = await import('@/pages/AlertPopupGuide')
          return {Component: AlertPopupGuide}
        }
      },
      // 회원가입 - 플루니안 설정
      {
        path: 'inte-ploonian-settings',
        async lazy() {
          let {IntePloonianSettings} = await import('@/pages/auth/IntePloonianSettings')
          return {Component: IntePloonianSettings}
        }
      },
      // 회원가입 인증
      {
        path: 'inte-join-membership',
        async lazy() {
          let {InteJoinMembership} = await import('@/pages/auth/InteJoinMembership')
          return {Component: InteJoinMembership}
        }
      },
      // 회원가입 - 개인으로 가입
      {
        path: 'inte-individual-form',
        async lazy() {
          let {InteIndividualForm} = await import('@/pages/auth/InteIndividualForm')
          return {Component: InteIndividualForm}
        }
      },
      // 회원가입 - 기업으로 가입
      {
        path: 'inte-corporate-form',
        async lazy() {
          let {InteCorporateForm} = await import('@/pages/auth/InteCorporateForm')
          return {Component: InteCorporateForm}
        }
      },
      // 회원가입 - 글로벌 인증
      {
        path: 'inte-global-join-membership',
        async lazy() {
          let {InteGlobalJoinMembership} = await import('@/pages/auth/InteGlobalJoinMembership')
          return {Component: InteGlobalJoinMembership}
        }
      },
      // 회원가입 - 글로벌 회원정보입력
      {
        path: 'inte-global-form',
        async lazy() {
          let {InteGlobalForm} = await import('@/pages/auth/InteGlobalForm')
          return {Component: InteGlobalForm}
        }
      },
      // 회원가입 - SNS 인증
      {
        path: 'sns-agree',
        async lazy() {
          let {SnsAgree} = await import('@/pages/auth/SnsAgree')
          return {Component: SnsAgree}
        }
      },
      // 회원가입 - SNS 계정로그인연동
      {
        path: 'login-sns',
        async lazy() {
          let {LoginSns} = await import('@/pages/auth/LoginSns')
          return {Component: LoginSns}
        }
      },
      // 회원가입 - 가입완료
      {
        path: 'inte-join-completed',
        async lazy() {
          let {InteJoinCompleted} = await import('@/pages/auth/InteJoinCompleted')
          return {Component: InteJoinCompleted}
        }
      },
      // 계정찾기 - 아이디 찾기
      {
        path: 'find-id',
        async lazy() {
          let {FindId} = await import('@/pages/auth/FindId')
          return {Component: FindId}
        }
      },
      // 계정찾기 - 비밀번호 찾기 입력
      {
        path: 'find-password',
        async lazy() {
          let {FindPassword} = await import('@/pages/auth/FindPassword')
          return {Component: FindPassword}
        }
      },
      // 계정찾기 - 비밀번호 찾기 - 이메일 발송
      {
        path: 'send-email',
        async lazy() {
          let {SendEmail} = await import('@/pages/auth/SendEmail')
          return {Component: SendEmail}
        }
      },
      // 계정찾기 - 비밀번호 변경
      {
        path: 'change-password',
        async lazy() {
          let {ChangePassword} = await import('@/pages/auth/ChangePassword')
          return {Component: ChangePassword}
        }
      },
      // 휴면계정 - 개인회원
      {
        path: 'dorInd-email',
        async lazy() {
          let {DorIndEmail} = await import('@/pages/dormant/DorIndEmail')
          return {Component: DorIndEmail}
        }
      },
      // 휴면계정 - 기업회원
      {
        path: 'dor-corporate-member',
        async lazy() {
          let {DorCorporateMember} = await import('@/pages/dormant/DorCorporateMember')
          return {Component: DorCorporateMember}
        }
      },
      // 휴면계정 - 글로벌회원
      {
        path: 'dor-global-member',
        async lazy() {
          let {DorGlobalMember} = await import('@/pages/dormant/DorGlobalMember')
          return {Component: DorGlobalMember}
        }
      },
      // 회원가입(Quick Start - Step1)
      {
        path: 'quick-start-step1',
        async lazy() {
          let {QuickStartStep1} = await import('@/pages/auth/QuickStartStep1')
          return {Component: QuickStartStep1}
        }
      },
      // 회원가입(Quick Start - Step2)
      {
        path: 'quick-start-step2',
        async lazy() {
          let {QuickStartStep2} = await import('@/pages/auth/QuickStartStep2')
          return {Component: QuickStartStep2}
        }
      },
      // 회원가입(Quick Start - Step3)
      {
        path: 'quick-start-step3',
        async lazy() {
          let {QuickStartStep3} = await import('@/pages/auth/QuickStartStep3')
          return {Component: QuickStartStep3}
        }
      },
      // Quick Start - Member 무료체험
      {
        path: 'quick-start-member',
        async lazy() {
          let {QuickStartMember} = await import('@/pages/auth/QuickStartMember')
          return {Component: QuickStartMember}
        }
      },
      // Quick Start - Popup1
      {
        path: 'quick-start-popup1',
        async lazy() {
          let {QuickStartPopup1} = await import('@/pages/QuickStartPopup1')
          return {Component: QuickStartPopup1}
        }
      },
      // Quick Start - 사업자등록번호 등록 팝업
      {
        path: 'quick-start-mypage-popup1',
        async lazy() {
          let {QuickStartMypagePopup1} = await import('@/pages/mypage/QuickStartMypagePopup1')
          return {Component: QuickStartMypagePopup1}
        }
      },
      // 마이페이지 (퍼블)
      {
        element: <MyPageLayout />,
        children: [
          // 마이페이지 - 내정보 - 휴대폰본인인증(SNS가입자)
          {
            path: 'my-info-phone',
            async lazy() {
              let {MyInfoPhone} = await import('@/pages/mypage/MyInfoPhone')
              return {Component: MyInfoPhone}
            }
          },
          // 마이페이지 - 내정보 - 비밀번호확인-이메일가입자(개인기업)
          {
            path: 'my-info-password-email',
            async lazy() {
              let {MyInfoPasswordEmail} = await import('@/pages/mypage/MyInfoPasswordEmail')
              return {Component: MyInfoPasswordEmail}
            }
          },
          // 마이페이지 - 내정보 - 기업회원
          {
            path: 'my-info-corporate',
            async lazy() {
              let {MyInfoCorporate} = await import('@/pages/mypage/MyInfoCorporate')
              return {Component: MyInfoCorporate}
            }
          },
          // 마이페이지 - 내정보 - 개인회원
          {
            path: 'my-info-individual',
            async lazy() {
              let {MyInfoIndividual} = await import('@/pages/mypage/MyInfoIndividual')
              return {Component: MyInfoIndividual}
            }
          },
          // 마이페이지 - MY문의 - 웹 문의
          {
            path: 'my-inquiry-web-list',
            async lazy() {
              let {MyInquiryWebList} = await import('@/pages/mypage/MyInquiryWebList')
              return {Component: MyInquiryWebList}
            }
          },
          // 마이페이지 - MY문의 - 전화 문의
          {
            path: 'my-inquiry-phone-list',
            async lazy() {
              let {MyInquiryPhoneList} = await import('@/pages/mypage/MyInquiryPhoneList')
              return {Component: MyInquiryPhoneList}
            }
          },
          // 마이페이지 - MY문의 - 문의글 작성
          {
            path: 'my-inquiry-write',
            async lazy() {
              let {MyInquiryWrite} = await import('@/pages/mypage/MyInquiryWrite')
              return {Component: MyInquiryWrite}
            }
          },
          // 마이페이지 - MY문의 - [팝업] 전화문의상세
          {
            path: 'my-inquiry-phone-popup',
            async lazy() {
              let {MyInquiryPhonePopup} = await import('@/pages/mypage/MyInquiryPhonePopup')
              return {Component: MyInquiryPhonePopup}
            }
          },
          // Layout Lnb 가이드
          {
            path: 'contents-layout-lnb-guide',
            async lazy() {
              let {ContentsLayoutLnbGuide} = await import('@/pages/ContentsLayoutLnbGuide')
              return {Component: ContentsLayoutLnbGuide}
            }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NoMatch />
  }
])

export default router
