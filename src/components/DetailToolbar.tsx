import React from "react"
import { useNavigate } from "react-router-dom"
import cl from "../styles/components/DetailToolbar.module.css"
import Button from "../components/UI/Button"
import DeleteCardForm from "../components/forms/DeleteCardForm"
import EditCardForm from "../components/forms/EditCardForm"

interface DetailToolbarProps {
  id: string
}

const DetailToolbar: React.FC<DetailToolbarProps> = ({id}) => {
  const navigate = useNavigate()
  
  return (
    <div className={cl.toolbar}>
      <div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
      <div className={cl.toolbar__right}>
        <Button>Импорт в PDF</Button>
        <EditCardForm />
        <DeleteCardForm id={id} />
      </div>
    </div>
  )
}

export default DetailToolbar
