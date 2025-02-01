'use client'
import { ReactNode } from 'react'
import ReduxProvider from './reduxProvider'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider>
      {children}
      <ProgressBar
        height='2px'
        color='#30A277'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </ReduxProvider>
  )
}

export default Providers
