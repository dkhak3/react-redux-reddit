import React from "react";
import "./header.css";
import { useSelector } from "react-redux";

const Header = ({ setEdit }) => {
  const user = useSelector((state) => state.user);
  const handleEidt = () => {
    setEdit(true);
  };
  return (
    <>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage: `linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor} 65%, #181818 100%`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEidt}>
            Edit
          </div>
          <img className="info-ava" src={user?.avaUrl} alt={user.name} />
          <div className="info-username">{user.name || ""}</div>
          <div className="info-age">{user.age || ""}</div>
          <div className="info-about">{user.about || ""}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
