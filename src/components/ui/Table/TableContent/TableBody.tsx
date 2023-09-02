import React, { ReactNode } from "react"

export const TableBody = ({ children, className }: { children?: ReactNode; className?: string }) => {
  return <tbody className={className}>{children}</tbody>
}
