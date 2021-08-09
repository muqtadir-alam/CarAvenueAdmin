import React from "react";
import { Link } from 'react-router-dom'

class ForVendorSideNavBar extends React.Component {

  render() {
    return (
      <nav className="pcoded-navbar noprint">
        <div className="pcoded-inner-navbar main-menu">

          <ul className="pcoded-item pcoded-left-item">
            <li className="">
              <Link to="/">
                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                <span className="pcoded-mtext">Dashboard</span></Link>
            </li>
            <li className=" pcoded-hasmenu">
              <a href="javascript:void(0)">
                <span className="pcoded-micon">
                  <i className="feather icon-box"></i>
                </span>
                <span className="pcoded-mtext">Products</span>
              </a>
              <ul className="pcoded-submenu">
                <li className=" ">
                  <Link to="/product-fixed">
                    <span className="pcoded-mtext">Fixed</span>
                  </Link>
                </li>
                <li className=" ">
                  <Link to="/product-fixed">
                    <span className="pcoded-mtext">Auction</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <Link to="/postmaster">
                <span className="pcoded-micon">
                  <i className="feather icon-clipboard"></i>
                </span>
                <span className="pcoded-mtext">Post Master</span>
              </Link>
            </li>
            <li className=" pcoded-hasmenu">
              <a href="javascript:void(0)">
                <span className="pcoded-micon">
                  <i className="feather icon-package"></i>
                </span>
                <span className="pcoded-mtext">Orders</span>
              </a>
              <ul className="pcoded-submenu">
                <li className=" ">
                  <Link to="/orders-fixed">
                    <span className="pcoded-mtext">Fixed</span>
                  </Link>
                </li>
                <li className=" ">
                  <Link to="/orders-fixed">
                    <span className="pcoded-mtext">Auction</span>
                  </Link>
                </li>
              </ul>
            </li>
          
           </ul>
         </div>
      </nav>
    );
  }
}

export default ForVendorSideNavBar;
