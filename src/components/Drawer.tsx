import styled from 'styled-components'

import Button from './Atom/Button'
import LinkButton from "./Atom/LinkButton"
import { useAuth } from '@/hooks/useAuth'

const DrawerStyle = styled.div`
  position: fixed;
  height: 100vh;
  padding: 20px 12px;
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

  .drawer-menu {
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
`

const Drawer = ({ onClose }: { onClose?: () => void }) => {
  const { user, signOut } = useAuth()

  const onClickSignOut = () => {
    if (confirm('로그아웃 하시겠습니까?') === false) return
    signOut()
  }

  return (
    <DrawerStyle onClick={onClose}>
      <div className="close" onClick={onClose} />
      <div className="drawer-menu">
        { user ? (
          <>
            <Button text="로그아웃" size="medium" color="secondary" onClick={onClickSignOut} />
          </>
        ) : (
          <>
            <LinkButton href="/login" text="로그인" size="medium" />
            <LinkButton href="/signup" text="회원가입" size="medium" />
          </>
        )}
      </div>
    </DrawerStyle>
  )
}

export default Drawer