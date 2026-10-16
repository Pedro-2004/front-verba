import type { ReactNode } from "react"

type Props = {
  icon: ReactNode
}

const Logo = ({ icon }: Props) => {
  return (
    <div>
      {icon}
    </div>
  )
}

export default Logo