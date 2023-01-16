import React, { ReactElement } from "react"
import cl from "../styles/components/Box.module.css"

interface BoxProps {
  children?: ReactElement
  title: string
}

const Box:React.FC<BoxProps> = ({title, children}) => {
  return (
    <div className={cl.container}>
      <span className={cl.title}>{title}</span>
      {children}
    </div>
  )
}

export default Box
