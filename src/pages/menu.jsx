import { memo, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@flaticon/flaticon-uicons/css/all/all.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { menuBody, menuResturant } from "../utalities";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Starters'); // لتحديد الفئة الافتراضية (Starters)
  const itemCategory = menuResturant.filter(m => m.category === selectedCategory);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 20000,
    cssEase: "linear"
  };

  return (
    <>
      <div className="menu">
        <div className="menuuu">
        <div className="menu-header text-center pt-5">
          <p className="text-white">Steak & Wine</p>
          <span className="font-pirate text-99 fs-1 pb-2"> OUR MENU</span>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="container mt-4" style={{ width: "80%" }}>
          <div className="menu-body text-white">
            <div className="slider-container">
              <Slider {...settings}>
                {menuBody.map((m) => (
                  <div
                    style={{ cursor: 'pointer' }}
                    className={`menu-choose text-center fs-3 ${selectedCategory === m.category ? 'active':""}`}
                    onClick={() => setSelectedCategory(m.category)}
                  >
                    <p>{m.icon}</p>
                    <p className="font-pirate">{m.category}</p>
                  </div>
                ))}
              </Slider>
            </div>

            <div>
              <div className="row gx-5 mt-3">
                {itemCategory.map((m) => (
                  <div  className="col-md-6">
                    <div className="menu-body-type font-pirate text-99 fs-3">
                      {m.type} <span style={{float:'right'}} className="">{m.price}</span>
                    </div>
                    <p>{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default memo(Menu);
