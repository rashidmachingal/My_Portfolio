import { Container, Footer, Navbar } from "../components";

export default function Layout({ children }) {
  return (
    <Container>
    <Navbar/>
    {children}
    <Footer/>
    </Container>
  )
}
