import { useEffect } from 'react'
import { styled } from 'styled-components'

const OverlayStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.5;
  background-color: #000;
  animation: fadeIn 0.3s;
  z-index: 12;

  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }

    to {
      opacity: 0.5;
      visibility: visible;
    }
  }
`

const Overlay = ({ onClickOverlay }: { onClickOverlay?: () => void }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  
  return <OverlayStyle onClick={onClickOverlay} />
}

export default Overlay