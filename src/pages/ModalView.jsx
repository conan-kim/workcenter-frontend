import {useState} from 'react'
import Modal from '@/components/modal/index'

export function ModalView() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const onOpenCallback = () => {
    console.log('open modal!')
  }
  const onCloseCallback = () => {
    console.log('close modal!')
  }
  return (
    <>
      <button style={{border: '1px solid', padding: '5px'}} onClick={() => setOpen((prev) => !prev)}>
        open modal!
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="test-modal-1"
        onOpenCallback={onOpenCallback}
        onCloseCallback={onCloseCallback}
      >
        <Modal.Content>
          <p>open center modal!!</p>
        </Modal.Content>
        <Modal.Bottom>
          bottom
          <button
            onClick={() => {
              setOpen(false)
              onCloseCallback()
            }}
            type="button"
          >
            close modal
          </button>
        </Modal.Bottom>
      </Modal>
      <br />
      <br />
      <button style={{border: '1px solid', padding: '5px'}} onClick={() => setOpen2((prev) => !prev)}>
        open bottom modal!
      </button>
      <Modal isOpen={open2} onOpenChange={setOpen2} isBottom className="test-modal-2" isCloseOutside={false}>
        <Modal.Content>
          <p>open bottom modal!!</p>
        </Modal.Content>
        <Modal.Bottom>bottom</Modal.Bottom>
      </Modal>
    </>
  )
}
