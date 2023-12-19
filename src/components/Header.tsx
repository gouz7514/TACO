import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import Overlay from './Overlay'
import Drawer from './Drawer'

const HeaderStyle = styled.header`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 12px;
  position: sticky;
  top: 0;
  background-color: #fff;

  .header-logo {
    background-image: url('/images/image-taco.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 52px;
    height: 52px;
  }

  .header-menu {
    cursor: pointer;
    background-image: url('/icon/icon-menu.svg');
    height: 40px;
    width: 40px;
    background-size: 40px 40px;
  }
`

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const onToggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <HeaderStyle>
        <Link to="/">
          <div className="header-logo" />
        </Link>
        <div className="header-menu" onClick={onToggleMenu}></div>
      </HeaderStyle>
      { menuVisible && <Drawer onClose={onToggleMenu} /> }
      {
        menuVisible && createPortal(
          <Overlay onClickOverlay={onToggleMenu} />,
          document.getElementById('overlay') as HTMLElement
        )
      }
    </>
  )
}

export default Header