import React from 'react'

import { Main, Section, Sticky } from './styles'

import GlobalStyles from './styles/global'
import Header from './components/Header'
import OneAndTwo from './components/OneAndTwo'
import Footer from './components/Footer'

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyles />

      <Main style={{ height: '1610vh' }}>
        <Header />

        <Section style={{ height: '72.7%' }}>
          <OneAndTwo />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="three" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="four" />
        </Section>

        <Footer />
      </Main>
    </>
  )
}

export default App