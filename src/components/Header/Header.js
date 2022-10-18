import React, {useState, useRef, useEffect}from 'react'

const Header = ({themeColor, setThemeColor, colorState}) => {
    const [showModal, setShowModal] = useState(false);
    const modalBtnRef = useRef(null);
    const modalRef = useRef(null);
   
    const handleTheme = (color) => {
        setThemeColor(color);
        window.localStorage.setItem('themeColor', color);
    };

    const handleModal = (event) => {
        const modalBtnRefCurrent = modalBtnRef.current;
        const modalRefCurrent = modalRef.current;

        if (modalBtnRefCurrent && modalBtnRefCurrent.contains(event.target)){
            setShowModal(true);
        }
        else if (modalBtnRefCurrent && !modalBtnRefCurrent.contains(event.target)) {
            if (modalRefCurrent && !modalRefCurrent.contains(event.target)){
                setShowModal(false);
            }
        }   
    };

    useEffect(() => {
        document.addEventListener('click', handleModal, true);
        return () => document.removeEventListener('click', handleModal, true);
    }, []);

  return (
    <header className='header' style={{background: `${themeColor}`}}>
        <div className='header__logo'>
            <img src="./images/paint.png" alt="" />
            <h3>Color Ideas</h3>
        </div>
        <div className="header__theme">
            <div className="header__theme-current" onClick={handleModal} ref={modalBtnRef} style={{background: `${themeColor}`}}></div>
            { showModal && 
                <ul className="header__theme-list" ref={modalRef}>
                    {colorState?.map((color, i) => (
                            <li className="header__theme-item" key={i} value={color} onClick={() => handleTheme(color)} style={{background: `${color}`}}></li>
                        )
                    )}
                </ul>
            }
        </div>
    </header>
  )
}

export default Header