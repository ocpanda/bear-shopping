import styled from 'styled-components'
import { color } from '@/assets/styles/global'

export const AppContainer = styled.div`
  height: calc(100% - 3rem);
  background: rgba(255, 209, 150, 0.6);
  padding: 1.5rem 4rem 1.5rem 4rem;
`

export const Main = styled.div`
  height: calc(100% - 1.5rem);
  border: 0.5rem solid ${color.white};
  border-radius: 1rem;

  .header-bar {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .aside-menu {
    border-radius: 0 0 0 0.5rem;

    a:last-child div:hover {
      border-radius: 0 0 0 0.5rem;
    }
  }

  .container {
    display: flex;
    height: calc(100% - 6rem);
  }
`

export const Container = styled.div`
  padding: 24px;
  width: 100%;
`
