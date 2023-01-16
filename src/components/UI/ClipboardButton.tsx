import React, { useState } from "react"
import Tooltip from "./Tooltip"
import cl from "../../styles/components/UI/ClipboardButton.module.css"

interface ClipboardButtonProps {
  copyText: string
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({ copyText }) => {
  const [isTooltip, setIsTooltip] = useState<boolean>(false)
  const clickHandler = () => {
    navigator.clipboard.writeText(copyText)
    setIsTooltip(true)
    setTimeout(() => {
      setIsTooltip(false)
    }, 2000)
  }
  return (
    <Tooltip active={isTooltip} tooltipText="Скопировано!">
      <svg
        className={cl.btn}
        onClick={clickHandler}
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        viewBox="0 0 48 48"
      >
        <path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z" />
      </svg>
    </Tooltip>
  )
}

export default ClipboardButton
