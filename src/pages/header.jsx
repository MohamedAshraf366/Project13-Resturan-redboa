import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LetfSide from './letfSide';
import logo from '../pic/logo.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const offcanvas = document.getElementById('offcanvasMenu');
    if (!offcanvas) return;

    const handleShow = () => setIsOpen(true);
    const handleHide = () => setIsOpen(false);

    offcanvas.addEventListener('show.bs.offcanvas', handleShow);
    offcanvas.addEventListener('hide.bs.offcanvas', handleHide);

    return () => {
      offcanvas.removeEventListener('show.bs.offcanvas', handleShow);
      offcanvas.removeEventListener('hide.bs.offcanvas', handleHide);
    };
  }, []);

  return (
    <>
    <div>
      
      {/* الزر الذي يفتح/يغلق القائمة */}
      <button
        className="border-0 bg-transparent p-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasMenu"
        aria-controls="offcanvasMenu"
      >
        {
          isOpen ? (
            <span className="fs-3 fw-bold">✖️</span> // أيقونة إغلاق
          ) : (
            <span className="fs-3 fw-bold">☰</span> // أيقونة قائمة
          )
        }
      </button>

      {/* القائمة الجانبية Offcanvas */}
      <div
        className=" offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <LetfSide />
        </div>
      </div>
      <img src={logo} className='' style={{width:'60px', marginLeft:'130px'}}/>
      
    </div>
    
    </>
    
  );
};
