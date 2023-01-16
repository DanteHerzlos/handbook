import React, { useState } from "react"
import { v4 } from "uuid"
import TextInput from "../../components/UI/TextInput"
import Button from "../../components/UI/Button"
import Modal from "../../components/UI/Modal"
import cl from "../../styles/components/forms/DeleteCardForm.module.css"
import { useNavigate } from "react-router-dom"

interface DeleteCardFormProps {
  id: string
}

const DeleteCardForm: React.FC<DeleteCardFormProps> = ({id}) => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [deleteString, setDeleteString] = useState<string>("")
  const [inputValue, setInputValue] = useState<string>("")
  const navigate = useNavigate()


  const onOpenHandler = () => {
    const uuid = v4().substring(0, 8)
    setDeleteString(uuid)
    setIsModal(true)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()  
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await (window as any).electronAPI.deleteCardById(id)
      if (res.changes === 0) {
        throw new Error("Обьект не удален!")
      }
      navigate(-1)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button className={cl.btn} onClick={onOpenHandler}>
        Delete
      </Button>
      <Modal onClose={() => setIsModal(false)} open={isModal}>
        <form onSubmit={(e) => onSubmit(e)} className={cl.form}>
          <h2>Удаление</h2>
          <p>
            Для подтверждения удаления введите эту строку: <b>{deleteString}</b>
          </p>
          <TextInput
            required
            pattern={deleteString}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            value={inputValue}
          />
          <Button type="submit">Подтвердить</Button>
        </form>
      </Modal>
    </>
  )
}

export default DeleteCardForm
