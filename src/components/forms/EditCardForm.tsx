import React, { useState } from "react"
import Button from "../../components/UI/Button"
import Modal from "../../components/UI/Modal"
import cl from "../../styles/components/forms/EditCardForm.module.css"

const EditCardForm = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Button className={cl.btn} onClick={() => setIsModal(true)}>
        Edit
      </Button>
      <Modal onClose={() => setIsModal(false)} open={isModal}>
        <form onSubmit={(e) => onSubmit(e)} className={cl.form}>
          <Button type="submit">Подтвердить</Button>
        </form>
      </Modal>
    </>
  )
}

export default EditCardForm
