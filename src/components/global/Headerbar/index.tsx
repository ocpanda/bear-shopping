import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { HeaderBar } from './style'

interface Props {
  isToggleAside: State<Boolean>
}

const useToggleAside = ({ isToggleAside }: { isToggleAside: State<Boolean> }) => {
  const [isToggle, setIsToggle] = isToggleAside

  const toggleAsideHandler = () => {
    setIsToggle(!isToggle)
  }

  return {
    toggleAsideHandler,
  }
}

function Headerbar(props: Props): JSX.Element {
  const { toggleAsideHandler } = useToggleAside({ isToggleAside: props.isToggleAside })

  return (
    <HeaderBar className="header-bar">
      <h2>
        <BiCategory onClick={toggleAsideHandler}></BiCategory>
        熊仔小舖
      </h2>
    </HeaderBar>
  )
}
export default Headerbar
