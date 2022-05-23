import styled, { css } from 'styled-components'
import { color } from '@/assets/styles/global'

type Props = {
  active: Boolean
}

export const Label = styled.div`
  font-size: 16px;
  padding: 12px 24px;
  color: ${color.fontPrimary};
  transition: all 0.2s;

  ${(props: Props) => {
    if (props.active === true) {
      return css`
        color: ${color.fontMain};
        background-color: ${color.secondary};
      `
    } else return ``
  }}

  &:hover {
    cursor: pointer;
    color: ${color.fontMain};
    background-color: ${color.secondary};
  }
`
