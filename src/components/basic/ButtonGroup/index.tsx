import { useState } from 'react'
import { ButtonGroupStyle, ButtonGroupItem } from './style'

type Field = { label: string; value: string; disabled?: boolean }
export const defineFields = (fields: Field[]) => {
  return fields
}

interface Props {
  fields: Field[]
  state: State<string> | State<string[]>
  className: string
}

const useValue = (state: State<string> | State<string[]>) => {
  const [value, setValue] = state
  const changeValueHandler = (field: Field) => {
    if (field.disabled === false) return
    setValue(field.value as any)
  }

  return {
    value,
    changeValueHandler,
  }
}

function ButtonGroup(props: Props): JSX.Element {
  const { value, changeValueHandler } = useValue(props.state)

  return (
    <ButtonGroupStyle>
      {(() => {
        return props.fields.map(field => (
          <ButtonGroupItem
            className={
              value === field.value
                ? `button-group-item active ${props.className}`
                : `button-group-item ${props.className ?? ''}`
            }
            disabled={!field.disabled}
            key={field.value}
            onClick={() => changeValueHandler(field)}
          >
            {field.label}
          </ButtonGroupItem>
        ))
      })()}
    </ButtonGroupStyle>
  )
}
export default ButtonGroup
