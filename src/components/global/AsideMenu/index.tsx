import React, { useEffect } from 'react'
import { configs } from '@/routes/index'
import { AsideName } from './style'
import { Link, useLocation } from 'react-router-dom'

import ActiveLabel from '@/components/ActiveLabel/index'

interface Props {
  isToggle: State<Boolean>
}

interface States {}

function AsideMenu(props: Props): JSX.Element {
  const [isToggle] = props.isToggle
  const location = useLocation()

  return (
    <AsideName $isToggle={isToggle} className="aside-menu">
      {configs.map(config => (
        <Link to={config?.path ?? '*'} key={`${config.name}-link`}>
          <ActiveLabel
            active={location.pathname === config?.path}
            label={config.label}
          ></ActiveLabel>
        </Link>
      ))}
    </AsideName>
  )
}

export default AsideMenu
