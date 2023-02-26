import { FC } from "react"

type Content = {
  children: any;
}

export const DarkLayout: FC<Content> = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '5px'
    }}>
        <h3>Dark Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
