import React from "react"
import cl from "../styles/components/SearchInput.module.css"

const SearchInput = () => {
  return (
    <div>
      <input className={cl.input} placeholder="Поиск..." />
      <select
        className={cl.select}
        name="filters"
        id="filters"
        defaultValue={"owners"}
      >
        <option value="owners">Владелец</option>
        <option value="land_plot_index">Кад. н. участка</option>
        <option value="house_index">Кад. н. дома</option>
        <option value="address">Адрес</option>
        <option value="postal_address">Кор. адрес</option>
        <option value="email">Email</option>
      </select>
    </div>
  )
}

export default SearchInput
