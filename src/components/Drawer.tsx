import styled from 'styled-components'

import { Link } from 'react-router-dom'

const DrawerStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  background-color: white;
  right: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  color: black;
  font-weight: bold;
  border-left: 1px solid #e5e5e5;
  z-index: 13;
  animation: slideIn 0.3s;

  .close {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url('/icon/icon-close.svg');
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }
`

const Drawer = ({ onClose }: { onClose?: () => void }) => {
  return (
    <DrawerStyle onClick={onClose}>
      <div className="close" onClick={onClose} />
      <div className="drawer-menu">
        <Link to="/login">Login</Link>
      </div>
    </DrawerStyle>
  )
}

export default Drawer