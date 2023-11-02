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
  const [item,setItem]=useState('')

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };

  const menuList = [
    "Woman",
    "Divided",
    "Man",
    "Infant",
    "Child",
    "Home",
    "Sale",
    "Sustainability",
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
      <div className="first-bar">
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
        <a className='main' href="/">SHOPPING <span>STUDIO</span></a>
        <img className='main_image' src="https://i.pinimg.com/564x/4a/ff/25/4aff25a7d0caa43d42b382698836ec02.jpg"/>
        <img className='main_img' src='https://i.pinimg.com/564x/12/0b/c2/120bc25fc82c3494d7db32f7ee005edd.jpg'/>
      </div><hr/>

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
