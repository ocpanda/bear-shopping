import styled, { css } from 'styled-components'
import { color } from '@/assets/styles/global'

type Props = {
  $isToggle: Boolean
}

export const AsideName = styled.div`
  width: 240px;
  height: 100%;
  background: ${color.main};
  overflow-y: auto;
  transition: width 0.1s ease-in-out;

  ${(props: Props) => {
    if (props.$isToggle) {
      return css`
        width: 240px;
      `
    } else {
      return css`
        width: 0px;
      `
    }
  }}

  a {
    text-decoration: none;
  }
`
