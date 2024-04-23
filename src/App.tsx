import { useState } from 'react'
import Loader from './components/Loader'
import About from './containers/About'
import Contact from './containers/Contact'
import Header from './containers/Header'
import Intro from './containers/Intro'
import Languages from './containers/Languages'
import Projetos from './containers/Projetos'
import { GlobalStyle } from './themeProvider'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 3000)
  return (
    <>
      <GlobalStyle />
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Intro />
          <About />
          <Projetos />
          <Languages />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
