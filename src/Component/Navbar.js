import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ authenticate, setAuthenticate }) => {
  let [width, setWidth] = useState(0);

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const search = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
      // 엔터를 입력할시에만 콘솔에 찍히게 설정
      let keyword = event.target.value;
      console.log(keyword);

      // ul바꿔주기
      navigate(`/?q=${keyword}`);
    }
  };

  const gotomainpage = () => {
    navigate("/");
  };

  return (
    <div>
      <div class="first-bar">
        <div className="login-button" onClick={gotoLogin}>
          {authenticate ? (
            <div onClick={() => setAuthenticate(false)} class="login">
              logout
            </div>
          ) : (
            <div onClick={() => navigate("/login")} class="login">
              login
            </div>
          )}
          <FontAwesomeIcon icon={faUser} />
        </div>

        <div className="side-menu" style={{ width: width }}>
          <div className="x-bar" onClick={() => setWidth(0)}>
            <FontAwesomeIcon className="x-icon" icon={faXmark} />
          </div>

          <div className="side-menu-list">
            {menuList.map((item) => (
              <button>{item}</button>
            ))}
          </div>
        </div>

        <div className="search">
          <FontAwesomeIcon
            className="menu-bar"
            icon={faBars}
            onClick={() => setWidth(250)}
          />

          <FontAwesomeIcon className="search-bar" icon={faMagnifyingGlass} />

          <input type="text" onKeyDown={(event) => search(event)} />
          {/* onKeyDown을 사용해 검색 할 때마다 이벤트가 발생하도록한다 */}
        </div>
      </div>

      <div className="Nav-section" onClick={gotomainpage}>
        <img
          width={200}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
