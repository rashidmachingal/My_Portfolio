import { Main } from "../Main/Main"

export const Container = ({ children }) => {
  return (
    <div className="container" >
        <Main>{children}</Main>
    </div>
  )
}
