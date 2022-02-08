// eslint-disable-next-line no-unused-vars
import react from "react";

import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  const onBackClick = (e) => {
    e.preventDefault();
    navigate(`${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={onBackClick}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
