import { FC, PropsWithChildren } from 'react'

const Main: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <main className="h-full flex flex-col">
      {children}
    </main>
  )
}

export default Main