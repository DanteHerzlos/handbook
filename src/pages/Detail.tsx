import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ICard } from "../types/ICard"

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
    <div>
      <Link to="/">Back</Link>
      {data.owners &&
        data.owners
          .split(",")
          .map((owner, index) => <p key={index}>{owner}</p>)}
      <p>{data.address}</p>
      <p>{data.basis_partnership}</p>
      <p>{data.land_plot_index}</p>
      <p>{data.house_index}</p>
      <p>{data.land_area}</p>
      <p>{data.house_area}</p>
      <p>{data.postal_address}</p>
      <p>{data.email}</p>
      {data.tel_numbers &&
        data.tel_numbers
          .split(",")
          .map((tel, index) => <p key={index}>{tel}</p>)}
    </div>
  )
}

export default Detail
