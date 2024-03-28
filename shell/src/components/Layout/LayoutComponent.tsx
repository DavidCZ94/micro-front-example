import React, { ReactNode } from 'react'
import './LayoutComponent.css'

type Props = {
  children: ReactNode
}

const LayoutComponent: React.FC<Props> = ({children}: Props) => {
  return ( 
    <> 
      <div className='layout-container'>
        {children} 
      </div>
    </> 
  )
}

export default LayoutComponent