import React from 'react'
import { useHistory } from 'react-router'
import * as Styles from './header-styles.scss'

const Header: React.FC = () => {
  const history = useHistory()
  return (
    <header className={Styles.wrapper}>
      <nav>
        <ul>
          <li onClick={() => history.push('/')}>Home</li>
          <li>Real State</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
