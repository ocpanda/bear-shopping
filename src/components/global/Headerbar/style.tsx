import styled from 'styled-components'
import { color } from '@/assets/styles/global'

export const HeaderBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 1rem;
  height: 6rem;
  background: ${color.secondary};

  svg {
    height: 1.6rem;
    width: 1.6rem;
    border: 2px solid ${color.white};
    border-radius: 100%;
    padding: 0.4rem;
    color: ${color.black};

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
  }
`
