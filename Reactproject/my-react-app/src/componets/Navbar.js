// import { NavLink } from 'react-router-dom';


// function Navbar() {
//   return (
//     <section>
//       <div className="dropdwn">

//         <nav>
//           <div className="navbar_container">
//           <img className="nav_logo" src="https://res.cloudinary.com/dztaju8af/image/upload/v1659692322/kitkat-removebg-preview_otggql.png" alt="" />
//           <ul>
//             <li> <NavLink exact to="/" ><a href=""className="Active">HOME</a></NavLink></li>
//             <li><a href="">PRODUCT + <i class="fa-solid fa-caret-down"></i></a>
//               <ul>

//                 <li><NavLink exact to="/ecommerce"><a href="">Ecommerce</a></NavLink></li>
//                 <li><NavLink exact to="/officeErm"><a href="">OfficeErm</a></NavLink></li>
//                 <li><NavLink exact to="/miniBanking"><a href="">MiniBanking</a></NavLink></li>
//                 <li><NavLink exact to="/posonbilling"><a href="">Possonbilling</a></NavLink></li>
//                 <li><NavLink exact to="/goldloan"><a href="">GoldLoan</a></NavLink></li>
//                 <li><NavLink exact to="/medicalbilling"><a href="">MedicalBilling</a></NavLink></li>

//               </ul>
//             </li>
//             <li><a href="">SERVICES + <i class="fa-solid fa-caret-down"></i></a>
//               <ul>
//                 <li><NavLink exact to="/customized"><a href="">Customized</a></NavLink></li>
//                 <li><NavLink exact to="/websitedesign"><a href="">WebsiteDesign</a></NavLink></li>


//                 <li><NavLink exact to="/bulk"><a href="">BulkSms</a></NavLink></li>

//                 <li><NavLink exact to="/crm"><a href="">CRM</a></NavLink></li>
       
//                 <li><NavLink exact to="/erp"><a href="">ERP</a></NavLink></li>
//                 <li><NavLink exact to="/hrm"><a href="">HRM</a></NavLink></li>
//               </ul></li>
//             <li><NavLink exact to="/about"><a href="">ABOUT</a></NavLink></li>
//             <li><NavLink exact to="/career"><a href="">CAREER</a></NavLink></li>
//             <li><NavLink exact to="/contact"><a href="">CONTACT</a></NavLink></li>
//           </ul>
//           </div>

         
//         </nav>
//       </div>
//     </section>

//   )
// }

// export default Navbar
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [icon, setIcon] = useState(false);

  const handleClick = () => {
    setIcon(!icon);
  };
  const closeSideDrawer = () => {
    setIcon(false);
  };
  return (
    <>
      <header>
        <nav className="header">
          <div className="header__container">
            <div className="header__logo container">
              <NavLink to="/">
                <img
                  src="https://res.cloudinary.com/dztaju8af/image/upload/v1659692322/kitkat-removebg-preview_otggql.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div
              className={
                icon
                  ? "header__list container active"
                  : "header__list container"
              }
            >
              <ul>
                <li>
                  <NavLink to="/" onClick={closeSideDrawer}>
                    HOME
                  </NavLink>
                </li>
                <li className="btn__flex">
                  <NavLink to="" onClick={closeSideDrawer}>
                    PRODUCT
                  </NavLink>
                  <i class="fa-solid fa-angle-down icon__down"></i>
                  <ul className="dropdown__menu">
                  <li><NavLink exact to="/ecommerce"><a href="">Ecommerce</a></NavLink></li>
                 <li><NavLink exact to="/officeErm"><a href="">OfficeErm</a></NavLink></li>
                <li><NavLink exact to="/miniBanking"><a href="">MiniBanking</a></NavLink></li>
               <li><NavLink exact to="/posonbilling"><a href="">Possonbilling</a></NavLink></li>
               <li><NavLink exact to="/goldloan"><a href="">GoldLoan</a></NavLink></li>
               <li><NavLink exact to="/medicalbilling"><a href="">MedicalBilling</a></NavLink></li>

                  </ul>
                </li>
                <li className="drop__down btn__flex">
                  <NavLink to="" onClick={closeSideDrawer}>
                    Services
                  </NavLink>
                  <i class="fa-solid fa-angle-down icon__down"></i>
                  <ul className="dropdown__menu">
                    <li><NavLink exact to="/customized"><a href="">Customized</a></NavLink></li>
                <li><NavLink exact to="/websitedesign"><a href="">WebsiteDesign</a></NavLink></li>


               <li><NavLink exact to="/bulk"><a href="">BulkSms</a></NavLink></li>

               <li><NavLink exact to="/crm"><a href="">CRM</a></NavLink></li>
       
               <li><NavLink exact to="/erp"><a href="">ERP</a></NavLink></li>
               <li><NavLink exact to="/hrm"><a href="">HRM</a></NavLink></li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/about" onClick={closeSideDrawer}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/career" onClick={closeSideDrawer}>
                    Career
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="active__link"
                    onClick={closeSideDrawer}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__bar icon" onClick={handleClick}>
              {icon ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars icon"></i>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;