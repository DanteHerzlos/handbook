import React, { useState, useEffect } from "react"
import cl from "../styles/pages/Home.module.css"
import Owner from "../components/Owner"
import SearchInput from "../components/SearchInput"

import { Link } from "react-router-dom"
import { ICard } from "../types/ICard"



const Home = () => {
  const [owners, setOwners] = useState<ICard[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cards = await (window as any).electronAPI.getAllCards()
      setOwners(cards)
      console.log(cards)
    }
    fetchCards()
  }, [])

  return (
    <div className={cl.container}>
      <SearchInput />
      <hr />
      {owners.map((el) => (
        <Link key={el.id} to={el.id.toString()}>
          <Owner title={el.owners.split(",")[0]} />
        </Link>
      ))}
    </div>
  )
}

export default Home
