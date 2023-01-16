import React, { ReactElement } from "react"
import cl from "../../styles/components/UI/Tooltip.module.css"

interface TooltipProps {
  children: ReactElement
  tooltipText: string
  active: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText, active }) => {
  return (
    <div className={cl.tooltip}>
      {children}
      {active ? <span className={cl.tooltiptext}>{tooltipText}</span> : <></>}
    </div>
  )
}

export default Tooltip
