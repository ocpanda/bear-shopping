import React from 'react'
import { AppContainer, Main, Container } from './style'
import AsideMenu from '@/components/global/AsideMenu/index'
import Headerbar from '@/components/global/Headerbar/index'
import { useRoutes } from 'react-router-dom'
import { configs } from '@/routes/index'
import { useStateForm } from '@/use/useStateForm'

interface Props {}

interface States {}

type AsideMenuForm = {
  isAsideToggle: Boolean
}

function App(props: Props): JSX.Element {
  const routes = useRoutes(configs)
  const stateForm: AsideMenuForm = {
    isAsideToggle: false,
  }
  const asideMenuState = useStateForm<AsideMenuForm>(stateForm)

  return (
    <AppContainer>
      <Main>
        <Headerbar isToggleAside={asideMenuState.isAsideToggle}></Headerbar>
        <div className="container">
          <AsideMenu isToggle={asideMenuState.isAsideToggle}></AsideMenu>
          <Container>{routes}</Container>
        </div>
      </Main>
    </AppContainer>
  )
}

export default App
