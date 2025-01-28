import upgrades from "../Styles/Upgrades.module.css";

export default function UpgradeDrawer() {
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
          <li className={upgrades.listItem}>
            <div className={upgrades.itemWrapper}>
                <div className={upgrades.itemContainer}>
                    <div className={upgrades.itemIcon}></div>
                    <div className={upgrades.itemName}></div>
                    <div className={upgrades.itemDesc}></div>
                    <div className={upgrades.itemBuyBtn}></div>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
