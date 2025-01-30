import PropTypes from "prop-types";
import upgrades from "../Styles/Upgrades.module.css";
import React from "react";


export default function UpgradeDrawer(props) {
  const closeMenu = () => {
    document.getElementById("upgradeDrawer").classList.remove(upgrades.active);
  };
  return (
    <div id="upgradeDrawer" className={upgrades.wrapper}>
      <div className={upgrades.tabs}>
        <button className={upgrades.btn}>Extractors</button>
        <button className={upgrades.btn}>Upgrades</button>
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
