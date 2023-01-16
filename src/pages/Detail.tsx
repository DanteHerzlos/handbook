import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ICard } from "../types/ICard"
import cl from "../styles/pages/Detail.module.css"
import Box from "../components/Box"
import ClipboardButton from "../components/UI/ClipboardButton"
import DetailToolbar from "../components/DetailToolbar"


const Detail = () => {
  const [data, setData] = useState<ICard>({} as ICard)
  const { id } = useParams()

  useEffect(() => {
    const fetchCards = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const card = await (window as any).electronAPI.getCardById(id)
      setData(card)
    }
    fetchCards()
  }, [])


  return (
    <div className={cl.container}>
      <DetailToolbar/>
      <Box title="Владельцы">
        <ol>
          {data.owners &&
            data.owners.split(",").map((owner, index) => (
              <li key={index}>
                {owner} <ClipboardButton copyText={owner} />
              </li>
            ))}
        </ol>
      </Box>
      <Box title="Адрес">
        <span>
          {data.address} <ClipboardButton copyText={data.address} />
        </span>
      </Box>
      <Box title="Основание внесения в Реестр">
        <span>
          {data.basis_partnership}
          <ClipboardButton copyText={data.basis_partnership} />
        </span>
      </Box>
      <Box title="Кадастровый номер">
        <>
          <span>
            <b>{data.land_plot_index}</b>
            <em> Земельного участка </em>
            <ClipboardButton copyText={data.land_plot_index} />
          </span>
          <br />
          <span>
            <b>{data.house_index}</b>
            <em> Дома </em>
            <ClipboardButton copyText={data.house_index} />
          </span>
        </>
      </Box>
      <Box title="Размер">
        <>
          <span>
            <b>{data.land_area}</b> м<sup>2</sup>
            <em> Земельного участка </em>
            {data.land_area && (
              <ClipboardButton copyText={data.land_area.toString()} />
            )}
          </span>
          <br />
          <span>
            <b>{data.house_area}</b> м<sup>2</sup>
            <em> Дома </em>
            {data.house_area && (
              <ClipboardButton copyText={data.house_area.toString()} />
            )}
          </span>
        </>
      </Box>
      <Box title="Адрес корреспонденции">
        <span>
          {data.postal_address}
          <ClipboardButton copyText={data.postal_address} />
        </span>
      </Box>
      <Box title="Email">
        <span>
          {data.email}
          <ClipboardButton copyText={data.email} />
        </span>
      </Box>
      <Box title="Номера телефонов">
        <ol>
          {data.tel_numbers &&
            data.tel_numbers.split(",").map((tel, index) => (
              <li key={index}>
                {tel} <ClipboardButton copyText={tel} />
              </li>
            ))}
        </ol>
      </Box>
    </div>
  )
}

export default Detail
