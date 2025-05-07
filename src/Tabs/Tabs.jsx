import React, { useEffect, useRef, useState } from 'react';
import './Tabs.css';

const Tabs = React.memo(() => {
  const tabsRef = useRef(null);
  const placeholderRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [tabsHeight, setTabsHeight] = useState(0);

  useEffect(() => {
    const tabs = tabsRef.current;
    const header = document.getElementById('mainHeader');

    if (tabs) {
      setTabsHeight(tabs.offsetHeight);
    }

    const handleScroll = () => {
      const headerHeight = header?.offsetHeight || 0;
      // Usamos el placeholder para obtener la posición original
      const placeholderTop = placeholderRef.current?.getBoundingClientRect().top + window.scrollY || 0;

      if (window.scrollY >= placeholderTop - headerHeight) {
        if (!isFixed) setIsFixed(true);
      } else {
        if (isFixed) setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [isFixed]);

  return (
    <>
      <div
        ref={placeholderRef}
        style={{ height: isFixed ? tabsHeight : 0, transition: 'height 0.0s' }}
      ></div>
      <div
        className={`TabsContainer${isFixed ? ' fixed-tabs' : ''}`}
        id="tabs"
        ref={tabsRef}
      >
        <div className='tab-item'><a href="#pasos">PASOS</a></div>
        <div className='tab-item'><a href="#premios">PREMIOS</a></div>
        <div className='tab-item'><a href="#preguntas">PREGUNTAS</a></div>
      </div>
    </>
  );
});

export default Tabs;
