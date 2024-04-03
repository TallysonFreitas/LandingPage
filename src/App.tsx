import About from './containers/About'
import Contact from './containers/Contact'
import Header from './containers/Header'
import Intro from './containers/Intro'
import Languages from './containers/Languages'
import Projetos from './containers/Projetos'
import { GlobalStyle } from './themeProvider'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Intro />
      <About />
      <Projetos />
      <Languages />
      <Contact />
    </>
  )
}

export default App
