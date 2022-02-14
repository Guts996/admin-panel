import React from "react";
import "./navbar.css";
import { FiUsers, FiUser, FiLogOut } from "react-icons/fi";
import { RiBus2Line } from "react-icons/ri";
import { BiTrip, BiHome } from "react-icons/bi";
import { GiBusStop } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { UseUserAuth } from "../authContext/userAuthContext";
export default function navbar () {
  const { logOut, user } = UseUserAuth();
  const handleLogout = async (e) =>{
    try {
      await logOut();
    } catch (err) {
      console.log(""+err.message)
    }
  }
    return (
      user !=null?<div className="navbarArea">
        <div className="navbarWrapper">
          <div className="profile">
            <div className="navbarLinkWrapper">
              <div className="tooltip">{user.email}</div>
              <span>
                <i class="icon">
                  <FiUser />
                </i>
              </span>
            </div>
            <div className="navbarLinkWrapper">
              <div className="tooltip">تسجيل الخروج</div>
              <span>
                <i class="icon">
                  <FiLogOut onClick={handleLogout}/>
                </i>
              </span>
            </div>
          </div>
          <div className="navbar">
            <div className="navbarLinksWrapper">
              <div className="navbarLinkWrapper">
                <div className="tooltip">مؤسسات النقل</div>
                <span>
                  <i class="icon">
                    <GiBusStop />
                  </i>
                </span>
              </div>
              <div className="navbarLinkWrapper ">
                <div className="tooltip">الحافلات</div>
                  <span>
                    <i class="icon">
                      <RiBus2Line />
                    </i>
                  </span>
              </div>
              <div className="navbarLinkWrapper">
                <div className="tooltip">الرحلات</div>
                <Link to="/trips">
                <span>
                  <i class="icon">
                    <BiTrip />
                  </i>
                </span>
                </Link>
              </div>
              <div className="navbarLinkWrapper">
                <div className="tooltip">المستخدمون</div>
                <Link to="/users">
                  <span>
                    <i class="icon">
                      <FiUsers />
                    </i>
                  </span>
                </Link>
              </div>
              <div className="navbarLinkWrapper active">
                <div className="tooltip">الرئيسية</div>
                <Link to="/">
                  <span>
                    <i class="icon active">
                      <BiHome />
                    </i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="logo">
            <div className="logoWrapper">
              <img className="logoImage" src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>:null
    );
  
}
