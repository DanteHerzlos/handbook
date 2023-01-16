import React, { useState } from "react"
import Button from "../../components/UI/Button"
import Modal from "../../components/UI/Modal"
import TextInput from "../../components/UI/TextInput"
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
          <h2>Добавить</h2>
          <TextInput id="owners" name="owners" placeholder="Владелецы" />
          <TextInput id="address" name="address" placeholder="Адрес" />
          <TextInput
            id="basis_partnership"
            name="basis_partnership"
            placeholder="Основание внесения в Реестр"
          />
          <TextInput
            id="land_plot_index"
            name="land_plot_index"
            placeholder="Кадастровый номер зем. уч."
          />
          <TextInput
            id="house_index"
            name="house_index"
            placeholder="Кадастровый номер дома"
          />
          <TextInput
            type="number"
            id="land_area"
            name="land_area"
            placeholder="Размер зем. уч."
          />
          <TextInput
            type="number"
            id="house_area"
            name="house_area"
            placeholder="Размер дома"
          />
          <TextInput
            id="postal_address"
            name="postal_address"
            placeholder="Корр. адрес"
          />
          <TextInput type="email" id="email" name="email" placeholder="Email" />
          <TextInput
            type="tel"
            id="tel_numbers"
            name="tel_numbers"
            placeholder="Номер телефона"
          />
          <Button type="submit">Подтвердить</Button>
        </form>
      </Modal>
    </>
  )
}

export default EditCardForm
