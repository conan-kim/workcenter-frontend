import {default as ModalMain} from '@/components/modal/ModalMain'
import {default as ModalContent} from '@/components/modal/ModalContent'
import {default as ModalBottom} from '@/components/modal/ModalBottom'


const modal = Object.assign(ModalMain, {
  Content: ModalContent,
  Bottom: ModalBottom
})

export default modal
