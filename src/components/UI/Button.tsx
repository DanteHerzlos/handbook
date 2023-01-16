import React from "react"
import cl from "../../styles/components/UI/Button.module.css"

interface ButtonProps {
  children?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  type,
  children,
}) => {
  return (
    <button onClick={onClick} className={cl.btn + " " + className} type={type}>
      {children}
    </button>
  )
}

export default Button
