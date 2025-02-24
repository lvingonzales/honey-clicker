import PropTypes from "prop-types";
import upgrades from "../Styles/Upgrades.module.css";
import React, { useEffect } from "react";


export default function UpgradeDrawer(props) {

  useEffect (() => {
    document.getElementById("upgradeDrawer").classList.toggle(upgrades.active);
  }, []);
  
  const closeMenu = () => {
    document.getElementById("upgradeDrawer").classList.toggle(upgrades.active);
    document.getElementById("upgradeDrawer").classList.toggle(upgrades.inactive);
  };
  return (
    <div id="upgradeDrawer" className={upgrades.wrapper + ' ' + upgrades.active + ' ' + upgrades.inactive}>
      <div className={upgrades.tabs}>
        {/* <button className={upgrades.btn}>Upgrades</button> */}
        <div className={upgrades.title}>Upgrades</div>
        <button
          className={upgrades.btn + " " + upgrades.close}
          onClick={closeMenu}
        >
          X
        </button>
      </div>
      <div className={upgrades.shelf}>
        <ul className={upgrades.list + " " + upgrades.activeList}>
          {React.Children.toArray(props.children)}
        </ul>
      </div>
    </div>
  );
}

UpgradeDrawer.propTypes = {
    children: PropTypes.array,
}
