import { Main } from '@/components'

export const Container = ({ children }) => {
  return (
    <div className="container" >
        <Main>{children}</Main>
    </div>
  )
}