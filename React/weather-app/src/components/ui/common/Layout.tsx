import  { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='flex flex-col w-full min-h-full p-10'>{children}</div>
  )
}
