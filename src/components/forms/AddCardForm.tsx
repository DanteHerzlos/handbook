import React, { useState } from "react"
import cl from "../../styles/components/forms/AddCardForm.module.css"
import Button from "../../components/UI/Button"
import Modal from "../../components/UI/Modal"
import TextInput from "../../components/UI/TextInput"
import { ICard } from "../../types/ICard"

const AddCardForm = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const card = {
      owners: form.owners.value,
      address: form.address.value,
      basis_partnership: form.basis_partnership.value,
      land_plot_index: form.land_plot_index.value,
      house_index: form.house_index.value,
      land_area: form.land_area.value,
      house_area: form.house_area.value,
      email: form.email.value,
      postal_address: form.postal_address.value,
      tel_numbers: form.tel_numbers.value,
    } as ICard

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await (window as any).electronAPI.addCard(card)
      if (res.changes === 0) {
        throw new Error("Обьект не добавлен!")
      }
      setIsModal(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button className={cl.btn} onClick={() => setIsModal(true)}>
        Add
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
          <Button type="submit">Добавить</Button>
        </form>
      </Modal>
    </>
  )
}

export default AddCardForm
