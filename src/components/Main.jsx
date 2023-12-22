import React from 'react'
import { useTheme } from 'styled-components'

export default function Main() {
    const theme = useTheme()
  return (
    <div className={` h-[92vh] `+ theme.colors.bg}>

    </div>
  )
}
