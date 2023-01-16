import React, { useState } from "react"
import cl from "../../styles/components/forms/AddCardForm.module.css"
import Button from "../../components/UI/Button"
import Modal from "../../components/UI/Modal"
import TextInput from "../../components/UI/TextInput"

const AddCardForm = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }

  return (
    <>
      <Button className={cl.btn} onClick={() => setIsModal(true)}>Add</Button>
      <Modal onClose={() => setIsModal(false)} open={isModal}>
        <form onSubmit={(e) => onSubmit(e)} className={cl.form}>
          <h2>Добавить</h2>
          <TextInput id="owner_1" name="owner_1" placeholder="Владелец" />
          <TextInput id="owner_2" name="owner_2" placeholder="Владелец" />
          <TextInput id="owner_3" name="owner_3" placeholder="Владелец" />
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
          <Button type="submit">Добавить</Button>
        </form>
      </Modal>
    </>
  )
}

export default AddCardForm
