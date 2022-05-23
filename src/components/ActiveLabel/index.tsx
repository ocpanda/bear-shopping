import React from 'react'
import { Label } from './style'

interface Props {
  label: string
  active: Boolean
}

interface States {}

function ActiveLabel(props: Props): JSX.Element {
  return <Label active={props.active}>{props.label}</Label>
}

export default ActiveLabel
